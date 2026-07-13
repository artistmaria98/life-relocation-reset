const quizQuestions = window.LRRQuizData.questions;
const resultContent = window.LRRQuizData.results;

const state = {
  step: 0,
  answers: {}
};

const stage = document.querySelector("#quizStage");
const form = document.querySelector("#relocationQuiz");
const nextButton = document.querySelector("#nextQuestion");
const prevButton = document.querySelector("#prevQuestion");
const stepLabel = document.querySelector("#quizStepLabel");
const progressBar = document.querySelector("#quizProgressBar");
const restartButton = document.querySelector("#restartQuiz");
const consentBanner = document.querySelector("#consentBanner");
const acceptAnalyticsButton = document.querySelector("#acceptAnalytics");
const declineAnalyticsButton = document.querySelector("#declineAnalytics");

const analyticsKey = "lrr_demo_events";
const consentKey = "lrr_analytics_consent";
let analyticsConsent = readConsent();

function readConsent() {
  try {
    return localStorage.getItem(consentKey);
  } catch (error) {
    return "necessary";
  }
}

function setConsent(value) {
  analyticsConsent = value;
  try {
    localStorage.setItem(consentKey, value);
  } catch (error) {
    console.info("Analytics consent", value);
  }
}

function track(eventName, payload = {}) {
  const event = {
    event: eventName,
    payload,
    page: window.location.pathname,
    timestamp: new Date().toISOString()
  };

  window.LRRAnalyticsPreview = window.LRRAnalyticsPreview || [];
  window.LRRAnalyticsPreview.push(event);

  if (analyticsConsent !== "accepted") {
    window.LRRPendingAnalytics = window.LRRPendingAnalytics || [];
    window.LRRPendingAnalytics.push(event);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);

  try {
    const existing = JSON.parse(localStorage.getItem(analyticsKey) || "[]");
    existing.push(event);
    localStorage.setItem(analyticsKey, JSON.stringify(existing.slice(-80)));
  } catch (error) {
    console.info("Analytics event", event);
  }
}

function flushPendingAnalytics() {
  const pending = window.LRRPendingAnalytics || [];
  window.LRRPendingAnalytics = [];
  pending.forEach((event) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
    try {
      const existing = JSON.parse(localStorage.getItem(analyticsKey) || "[]");
      existing.push(event);
      localStorage.setItem(analyticsKey, JSON.stringify(existing.slice(-80)));
    } catch (error) {
      console.info("Analytics event", event);
    }
  });
}

function initConsent() {
  if (!consentBanner) return;

  if (!analyticsConsent) {
    consentBanner.hidden = false;
  }

  acceptAnalyticsButton?.addEventListener("click", () => {
    setConsent("accepted");
    flushPendingAnalytics();
    consentBanner.hidden = true;
    track("analytics_consent_accepted");
  });

  declineAnalyticsButton?.addEventListener("click", () => {
    setConsent("necessary");
    consentBanner.hidden = true;
    track("analytics_consent_declined");
  });
}

function renderQuestion() {
  const question = quizQuestions[state.step];
  const total = quizQuestions.length;
  const progress = ((state.step + 1) / total) * 100;
  document.querySelector("#quiz-start")?.classList.remove("quiz-panel--result");
  stepLabel.textContent = `Вопрос ${state.step + 1} из ${total}`;
  progressBar.style.width = `${progress}%`;
  prevButton.style.visibility = state.step === 0 ? "hidden" : "visible";
  nextButton.querySelector("span").textContent = state.step === total - 1 ? "Показать результат" : "Далее";

  const saved = state.answers[question.id] || "";
  const field = question.type === "text" ? renderTextQuestion(question, saved) : renderChoiceQuestion(question, saved);
  stage.innerHTML = `
    <h3 class="question-title">${question.label}</h3>
    ${field}
    <p class="quiz-error" id="quizError" role="alert"></p>
  `;

  document.body.classList.add("quiz-open");
}

function renderChoiceQuestion(question, saved) {
  const options = question.options
    .map((option, index) => {
      const value = String(index);
      const checked = saved === value ? "checked" : "";
      return `
        <label class="option-card">
          <input type="radio" name="${question.id}" value="${value}" ${checked}>
          <span>${option.label}</span>
        </label>
      `;
    })
    .join("");
  return `<div class="option-list">${options}</div>`;
}

function renderTextQuestion(question, saved) {
  const required = question.optional ? "" : "required";
  const help = question.help ? `<p class="field-help">${question.help}</p>` : "";
  return `
    <input
      class="text-field"
      id="${question.id}"
      name="${question.id}"
      type="text"
      value="${escapeHtml(saved)}"
      placeholder="${question.placeholder || ""}"
      ${required}
    >
    ${help}
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function readCurrentAnswer() {
  const question = quizQuestions[state.step];
  if (question.type === "text") {
    const input = form.elements[question.id];
    return input ? input.value.trim() : "";
  }

  const checked = form.querySelector(`input[name="${question.id}"]:checked`);
  return checked ? checked.value : "";
}

function validateCurrentAnswer() {
  const question = quizQuestions[state.step];
  const value = readCurrentAnswer();
  const error = document.querySelector("#quizError");

  if (!question.optional && !value) {
    error.textContent = question.type === "text" ? "Заполни это поле, чтобы продолжить." : "Выбери один вариант, чтобы продолжить.";
    return false;
  }

  error.textContent = "";
  state.answers[question.id] = value;
  track("quiz_answered", { questionId: question.id, step: state.step + 1 });
  return true;
}

function calculateResult() {
  const scores = {
    explorer: 0,
    builder: 0,
    reinventor: 0,
    freedom_seeker: 0
  };

  quizQuestions.forEach((question) => {
    if (question.type !== "single_choice") return;
    const answerIndex = Number(state.answers[question.id]);
    const option = question.options[answerIndex];
    if (!option) return;
    Object.entries(option.score).forEach(([key, value]) => {
      scores[key] += value;
    });
  });

  const priority = ["explorer", "builder", "reinventor", "freedom_seeker"];
  return priority.sort((a, b) => scores[b] - scores[a])[0];
}

function renderResultDetail(result) {
  const sections = [
    ["Твоя сила", result.strength],
    ["Какие страны могут подойти", result.countries],
    ["Какие возможности искать", result.opportunities],
    ["Частые ошибки", result.mistakes],
    ["Следующий шаг", result.nextStep]
  ];

  const cards = sections
    .map(([title, text]) => `
      <article class="result-card">
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `)
    .join("");

  return `
    <p class="result-intro">${result.body}</p>
    <div class="result-card-grid">${cards}</div>
  `;
}

function showResult() {
  const resultId = calculateResult();
  const result = resultContent[resultId];
  document.querySelector("#quiz-start")?.classList.add("quiz-panel--result");
  stage.innerHTML = `
    <p class="section-kicker">твой результат</p>
    <h3 class="question-title result-inline-title">${result.title}</h3>
    <p class="result-inline-summary">${result.summary}</p>
    ${renderResultDetail(result)}
  `;
  document.querySelector("#quiz-start")?.scrollIntoView({ behavior: "smooth", block: "start" });
  track("quiz_completed", {
    result: resultId,
    hasInstagram: Boolean(state.answers.instagram),
    hasCurrentJob: Boolean(state.answers.current_job)
  });
}

nextButton.addEventListener("click", () => {
  if (!validateCurrentAnswer()) return;
  if (state.step < quizQuestions.length - 1) {
    state.step += 1;
    renderQuestion();
    track("quiz_step_viewed", { step: state.step + 1, questionId: quizQuestions[state.step].id });
  } else {
    showResult();
  }
});

prevButton.addEventListener("click", () => {
  state.answers[quizQuestions[state.step].id] = readCurrentAnswer();
  if (state.step > 0) {
    state.step -= 1;
    renderQuestion();
  }
});

restartButton?.addEventListener("click", () => {
  state.step = 0;
  state.answers = {};
  renderQuestion();
  document.querySelector("#quiz").scrollIntoView({ behavior: "smooth", block: "start" });
  track("quiz_restarted");
});

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-event]");
  if (!target) return;
  track(target.dataset.event, {
    href: target.getAttribute("href") || null,
    text: target.textContent.trim()
  });
});

const observedSections = document.querySelectorAll("[data-track-section]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        track("section_viewed", { section: entry.target.dataset.trackSection });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.45 }
);

observedSections.forEach((section) => observer.observe(section));

initConsent();
renderQuestion();
track("site_loaded");
