# LIFE RELOCATION RESET / “НОВАЯ ГЛАВА” — Complete Context for Codex

> **Purpose of this document**  
> This is the working context for a coding agent (Codex) building the digital ecosystem for Masha’s relocation and “next chapter” strategic-coaching venture. Treat this as the best available source of truth from prior planning conversations.  
>
> **Important:** distinguish between:
> - **Confirmed decisions** — build around these.
> - **Historical / superseded ideas** — preserve only as context; do not hard-code them.
> - **Open decisions** — make them configurable, use placeholders, or flag them clearly in the implementation.
>
> The business is **not** a law firm, immigration agency, or visa-processing service. The site must never present legal advice as legal advice or make approval/outcome promises.

---

## 0. Live Source Artifacts (Read These Before Building)

These are the current live versions of the early funnel assets. They are the closest thing to “source files” for the original implementation and must be reviewed before replacing the experience.

| Asset | Live source | What it contains | Build instruction |
|---|---|---|---|
| Canva landing site | `https://relocationreset.my.canva.site/` | The original hosted visual landing-page implementation, page hierarchy, visual direction, CTA arrangement, and public copy. | Treat as a visual/content reference. Rebuild as a native site; do not attempt to scrape/import Canva-generated markup as production code. |
| Google Form | `https://forms.gle/v2NzyHtHYeRxAANg7` | The original public quiz / lead-magnet form, including its live question order, answer options, and submission flow. | Treat as the canonical source for the initial question set. Rebuild as a native quiz with editable data, scoring, privacy controls, analytics, and result routing. |
| Direct Google Form endpoint | `https://docs.google.com/forms/d/e/1FAIpQLScK3mVbpSdc8EyDmhea9q8pb9nv_UK5KCGe8SFa1LeHH5YDkg/viewform?usp=send_form` | Resolved public endpoint for the same form. | Use only as a reference or temporary external fallback; do not embed Google Forms as the intended finished experience. |

### Important Clarification: “Code” Does Not Exist for These Two Original Assets

The original Canva site and Google Form are **no-code hosted artifacts**, not a codebase with reusable React/HTML/CSS/JS source files.

- **Canva:** publishes a hosted page and controls the generated implementation. There is no clean, maintainable source repository to migrate.
- **Google Forms:** stores form configuration and responses inside Google’s product; it does not provide a normal frontend codebase or a transparent scoring/result-engine source to copy.

Therefore, the task for Codex is **reconstruction and improvement**, not literal code extraction:
1. inspect the live public artifacts;
2. preserve the approved copy, question order, answer options, CTA logic, visual hierarchy, and business intent;
3. recreate them as clean, maintainable native website components;
4. store all editable content and commercial settings in structured configuration;
5. improve the user experience rather than preserving limitations of Canva/Google Forms.

### Canonical Source Precedence

When sources conflict, use this order:
1. **Latest owner decision from Masha** (including future edits).
2. **Live Canva page and live Google Form** linked above.
3. **This Markdown document**.
4. **Older conversation drafts**.

Do not treat older text as final if the live assets or Masha’s later decisions differ.

### Required Pre-Implementation Review Checklist

Before coding:
- Visit the Canva site in a browser and inventory every visible section, heading, body paragraph, CTA, image, link, footer item, and language choice.
- Complete the Google Form once in a test mode and record every question, field type, required-state, answer option, branching rule, confirmation text, and destination URL.
- Do **not** submit personal or real client data while documenting the form.
- Compare the live artifacts against this brief and flag any mismatch rather than silently “correcting” it.
- Extract only owned/approved images and text. Do not reuse third-party media without confirming usage rights.
- Present a concise “source inventory + differences” to Masha before replacing any public-facing claim that is materially different.

### Suggested Configuration Object

```ts
export const sourceArtifacts = {
  canvaSite: {
    url: "https://relocationreset.my.canva.site/",
    role: "visual-and-copy-reference",
    importStrategy: "manual-rebuild",
  },
  googleForm: {
    shortUrl: "https://forms.gle/v2NzyHtHYeRxAANg7",
    resolvedUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScK3mVbpSdc8EyDmhea9q8pb9nv_UK5KCGe8SFa1LeHH5YDkg/viewform?usp=send_form",
    role: "initial-quiz-source-of-truth",
    importStrategy: "manual-question-and-logic-migration",
  },
} as const;
```

### Content Extraction Status

This brief preserves the business context and known planned quiz architecture, but it does **not** claim that all live Canva text, exact live Google Form choices, or visual assets have been programmatically extracted into this document. The linked artifacts are deliberately included as canonical references for that final one-to-one inventory.


---

## 1. Founder and Brand Context

### Founder
**Masha** is a Russian-speaking actress, performer, musician, and immersive-theatre creative producer who has lived internationally and is now based in Madrid, Spain.

Relevant international experience and credibility:
- Approximately **five years across four countries**.
- Lived and worked in Dubai; spent time in Los Angeles; currently lives in Madrid.
- Has personally navigated relocation, documents, career transitions, foreign markets, marriage-based EU residence processes, rebuilding a network, and adapting to life abroad.
- Background includes performance, hospitality/event-facing work, creative production, music, and international projects.
- Her value is not “I am a lawyer who will file your visa.” Her value is lived experience, strategic perspective, emotional clarity, realistic planning, and a genuine international network.

### Brand Names
There are two connected naming layers:

1. **Product / service name:**  
   **LIFE RELOCATION RESET**

2. **Russian-facing personal-brand identity:**  
   **«Новая глава | Маша»**  
   This is preferred over an overly functional or bureaucratic framing such as “Переезд за границу | Маша.”

### Core Brand Idea
This is not primarily a “which country should I move to?” service.

It is a strategic reset for people who are at a crossroads and need to understand:
- What their next chapter could look like.
- Which lifestyle, environment, market, or country may fit their goals.
- How to create more opportunity, income, movement, and international possibility.
- What first practical steps make sense.
- How to move from vague desire / overwhelm into a personal strategic direction.

The emotional message is:

> “You do not necessarily need a country recommendation. You may need clarity about what next chapter fits your goals, lifestyle, and opportunities.”

The brand should feel like a guide toward a new and better life — not a dry visa-information account.

---

## 2. Positioning

### Main Positioning Statement
**LIFE RELOCATION RESET is a 1:1 strategic session for people who want to understand what a more international, aligned, opportunity-rich next chapter could look like — and how to begin moving toward it.**

### What Makes It Different
The service combines:
- Personal experience across multiple countries and life transitions.
- An emotional, lifestyle, and career perspective — not just logistics.
- Practical thinking about locations, pathways, income, work, market access, networking, and adaptation.
- The founder’s willingness to connect people in her network where it genuinely helps with a collaboration, project, opportunity, or next step.

The network element is important but should be framed carefully:
- It is a **potential value-add**, not a guaranteed result.
- It belongs prominently on the **About Me** / founder-introduction experience.
- It does **not** need to be repeated on every quiz result page.

### Boundaries
The brand can discuss:
- Personal relocation experiences.
- General strategic considerations around visas, documents, countries, and relocation pathways.
- Career direction, lifestyle preferences, research directions, and practical next steps.
- International work and networking opportunities.

The brand must not:
- Claim legal authority.
- Guarantee visas, jobs, residency, income, or introductions.
- Present country/visa information as current legal advice without sourcing and verification.
- Suggest that a coaching session replaces a lawyer, tax adviser, immigration specialist, or financial professional.

Suggested boundary copy:
> “This is a strategic coaching and clarity session based on lived international experience and practical research. It is not legal, tax, immigration, or financial advice.”

---

## 3. Target Audience

### Primary Market
- **Russian-speaking women**, primarily from Russia/CIS.
- Intended first market: Russian language.
- English-language expansion can come later for a global audience.

### Core Audience Age / Stage
- Roughly **22–37** years old.
- Ambitious, thoughtful, internationally curious, and likely consuming lifestyle, self-development, career, travel, and relocation content on Instagram.
- May be considering relocation, a career shift, a relationship-driven move, a “start over,” or simply a more globally open life.

### Typical Inner State
They may:
- Feel stuck in a city, country, relationship, job, or version of themselves.
- Want change but not yet know whether they need a new country, a new career direction, a new environment, or a new routine.
- Dream about living abroad, earning internationally, working remotely, meeting new people, or having a bigger life.
- Be overwhelmed by documents, uncertainty, fear, money questions, family expectations, or lack of a clear plan.
- Not need someone to “pick a country,” but need help understanding what they actually want and what is realistically possible.

### Desired Transformation
From:
- “I want something different but I do not know where to begin.”
- “I keep thinking about moving but I cannot make a decision.”
- “I do not know whether my problem is the country, my career, or my life direction.”
- “I am scared to make a move without a plan.”

To:
- “I understand what kind of next chapter I am building.”
- “I can see a few realistic directions instead of one overwhelming unknown.”
- “I know what questions to research and what first actions to take.”
- “I feel more grounded, strategic, and less alone.”

---

## 4. The Core Offer

### Confirmed Offer
**LIFE RELOCATION RESET**  
A **40-minute 1:1 strategic reset session** / **стратегическая 1:1 сессия**.

### What Can Be Covered in the Session
This is a flexible strategic conversation, potentially including:
- Identifying a country / region / type of environment that fits the client’s goals and lifestyle.
- Evaluating whether the client needs relocation, reinvention, a career pivot, a new market, or a different lifestyle structure.
- Thinking through more international income or career options.
- Discussing how to find jobs, clients, communities, collaborations, or opportunities in new markets.
- Mapping possible relocation scenarios and research directions.
- Explaining broad document / visa-route considerations **without providing legal advice**.
- Working through fears, blocks, indecision, or identity questions around moving.
- Clarifying the client’s personal priorities and building a first-action plan.
- Where genuinely appropriate, exploring whether Masha’s existing contacts may be useful for future connection or collaboration.

### Expected Deliverable / Outcome
The exact deliverable has not been formally finalized. For the website, phrase the outcome as:
- clarity,
- personal direction,
- a realistic next-step map,
- key questions to research,
- and an actionable first step.

Avoid promising a formal written plan unless Masha explicitly decides to provide one.

### Pricing

#### Current latest known launch pricing
- **€59 launch price** is the latest known decision from the most recent planning context.

#### Historical pricing ideas (do not treat as current)
- €99 was previously considered / used as an earlier launch-price concept.
- €199 was considered as a possible future price.

#### Implementation Requirement
Price must be stored in a clear configuration source, for example:
```ts
launchPriceEur: 59
standardPriceEur: null // TBD
```
Do not bury pricing in static copy across multiple pages. Make it easy to update:
- current price,
- crossed-out future / standard price,
- campaign expiry,
- currency,
- payment links,
- offer availability.

### Launch / Scarcity Language
Earlier sales messaging used a 24-hour launch window. This should be handled as a configurable campaign feature, not a permanent claim. Do not show false countdowns or artificial scarcity.

---

## 5. Funnel Architecture

### Confirmed Funnel Logic
The current desired experience is:

1. **Instagram / Reels / Stories**
2. **About Me / Founder introduction**
3. **Relocation-style quiz**
4. **Personal result page**
5. **Booking + payment**
6. **Confirmation / next steps**

A prior simplified flow was:
> Instagram / Reels → quiz → result → booking/payment

The newer preference supersedes it:
> Instagram / Reels → **About Me** → quiz → result → booking/payment

### Why “About Me” Comes First
Masha wants people to understand:
- who she is,
- why she has credibility,
- that the work is deeper than country recommendations,
- and that she can connect people when it is genuinely helpful.

This differentiator should be introduced before the quiz, not repeated aggressively across every result page.

### Funnel Goals
The funnel should:
- Turn passive Instagram curiosity into an emotionally engaging self-assessment.
- Make the user feel seen before asking them to book.
- Segment visitors by their “next chapter” mindset.
- Build trust without sounding manipulative or overly salesy.
- Lead naturally toward a paid 1:1 reset session.

---

## 6. Quiz / Lead Magnet

### Current Structure
A **7-question** quiz / self-assessment was planned. It was initially considered for Google Forms in quiz mode, but the website should replace or improve this with a native, branded experience.

### Known Question Themes
The exact final wording is not fully locked, but planned question areas included:
- Preferred region / general location direction.
- Preferred environment / lifestyle vibe.
- “If fear disappeared, what would you do?”
- What is currently holding the person back?
- What would they change now?
- Personal goals, lifestyle, opportunity, or freedom priorities.
- The kind of transition / next chapter they may be seeking.

### Required Result Types
The quiz should branch into four outcome archetypes:

1. **The Explorer**
2. **The Builder**
3. **The Reinventor**
4. **The Freedom Seeker**

### Directional Result Descriptions
These are useful working definitions for design/copy purposes, but are not fully finalized personality-science claims.

#### The Explorer
Likely motivated by discovery, new environments, identity expansion, cultural curiosity, and the feeling that there is more to experience.  
Main tension: desire for movement versus fear of choosing the wrong path.  
Best CTA angle: turn curiosity into a thoughtful exploration plan.

#### The Builder
Likely motivated by career, scale, income, international clients, stronger markets, and building a more ambitious life.  
Main tension: wanting bigger opportunities but lacking a market-entry strategy.  
Best CTA angle: map a practical pathway toward growth and international opportunity.

#### The Reinventor
Likely in or approaching a major personal transition: career shift, relationship change, loss of direction, burnout, or a desire to become a new version of themselves.  
Main tension: they may be unsure whether they need to move externally or reset internally.  
Best CTA angle: create clarity around the next chapter, not just a new location.

#### The Freedom Seeker
Likely motivated by autonomy, flexibility, emotional breathing room, mobility, and a life that feels less constrained.  
Main tension: craving escape without yet knowing what sustainable freedom looks like.  
Best CTA angle: move from “I need out” to a realistic freedom-oriented plan.

### Quiz Product Requirements
Codex should build the quiz to be:
- Native to the site, mobile-first, fast, and visually polished.
- Simple enough for social-media traffic.
- Data-driven from a local JSON / CMS-friendly question bank.
- Easy to change later without rewriting the scoring engine.
- Able to include answer weights per archetype.
- Able to capture an email / contact only with clear consent and only if Masha chooses to enable it.
- Able to save / export anonymized aggregate analytics.
- Able to handle direct shareable result URLs only if privacy is protected.
- Able to send users directly from a result to the relevant booking CTA.

### Quiz Scoring Recommendation
Use a configurable scoring model:
- Every answer can add weighted points to one or more archetypes.
- Select the highest score as the primary result.
- In a tie, use a deterministic priority / tie-breaker stored in configuration.
- Retain secondary-score information internally for future personalization, but do not overstate psychological precision to users.

---

## 7. Website Information Architecture

### Recommended MVP Pages
1. **Home / Landing Page**
2. **About Masha**
3. **Quiz Introduction**
4. **Quiz**
5. **Four Result Pages** (or dynamic result-page template)
6. **Session / Offer Detail Page**
7. **Booking + Payment Page**
8. **Thank You / Confirmation Page**
9. **FAQ**
10. **Legal / Disclaimer / Privacy pages**
11. **Optional Resources Hub** for scalable content later

### Home Page: Required Narrative
The homepage should make the visitor feel:
- “This is not a generic relocation checklist.”
- “This understands the emotional and strategic side of starting a new chapter.”
- “This may help me understand what I need before I make a big decision.”

Suggested flow:
1. Hero: a bold emotional line about the next chapter.
2. Short explanation of the problem: it is not always about choosing a country.
3. Founder credibility / lived international experience.
4. Quiz entry CTA.
5. Explanation of the 1:1 Strategic Reset.
6. What can be explored during the session.
7. How it works.
8. Price / launch offer (configurable).
9. FAQ.
10. Clear CTA to take the quiz or book.

### About Masha Page
This page should cover:
- Her lived international journey.
- The human reason for creating the product.
- Her experience with relocation, documents, career rebuilding, community, and foreign markets.
- Her multidisciplinary background: performer, creative producer, musician, international hospitality/event experience.
- Why she believes a “new chapter” should be built around a person’s goals, lifestyle, opportunity, and identity — not only immigration logistics.
- Her network-oriented mindset: when appropriate, she likes connecting people with projects, collaborators, and opportunities.

Avoid:
- Listing irrelevant personal data.
- Pretending she is an immigration lawyer.
- Repeating claims that cannot be substantiated.
- Making every connection sound guaranteed.

### Result Page Template
Each result page should have:
- Result name.
- Empathetic description.
- “What this may mean” section.
- Common blockers / tension.
- What a session could help clarify for this result type.
- CTA to book the 1:1 Reset.
- Optional small “not a diagnosis / not a fixed label” note.
- Optional link to return to / retake quiz.

### Offer Detail Page
Recommended sections:
- Who it is for.
- Who it is not for.
- What we can discuss.
- What the session is and is not.
- Format: 40 minutes, 1:1, online.
- Price (configurable).
- Booking/payment pathway.
- Disclaimer.
- FAQs.
- CTA.

### FAQ Topics
Potential FAQ categories:
- Is this only for people who are 100% sure they want to move?
- Do I need to know which country I want?
- Is this a visa consultation?
- Can we talk about career and income as well as relocation?
- What happens after payment?
- What language is the session in?
- Can someone outside Russia/CIS book?
- Are introductions guaranteed? (Answer must be no.)
- Is the session recorded? (Do not make a claim unless Masha decides.)
- Can I reschedule? (Policy TBD.)

---

## 8. Booking and Payment

### Current Tool Direction
The current plan has included:
- **Calendly** for booking.
- Availability roughly **Monday–Friday, 10:00–20:00 Madrid time**.
- **PayPal / PayPal.Me** for payment.

### Implementation Notes
No final public booking URL, payment handle, domain, or payment processor integration has been provided in this context. Therefore:
- Use environment variables / editable CMS configuration for all live links.
- Build a clean integration layer.
- Do not fabricate Stripe, PayPal, Calendly, or payment confirmation links.
- Make the payment sequence easy to switch:
  - pay first → choose time,
  - choose time → pay,
  - or external checkout → booking confirmation.

### Time Zone
Default scheduling language should reference:
- **Madrid time**
- IANA zone: `Europe/Madrid`

The site should clearly show time-zone conversion for international visitors if booking is embedded or custom-built.

---

## 9. Content and Social Strategy

### Primary Traffic Channel
**Instagram** is the primary acquisition channel, especially:
- Reels
- Stories
- Direct messages
- Quiz CTAs
- Founder-led personal storytelling

### Content Pillars
1. **Relocation reality**
   - Honest stories about moving, documents, emotional transition, mistakes, and adaptation.
2. **Career and opportunity abroad**
   - International markets, work possibilities, clients, industries, and lifestyle/career trade-offs.
3. **“New chapter” identity**
   - Questions around where a person belongs, how they want to live, and who they are becoming.
4. **Founder credibility / lifestyle**
   - Masha’s real international experience, Spain/Madrid life, past cities, career shifts, network.
5. **Useful educational hooks**
   - Relocation-related concepts, country/career comparisons, broad document frameworks, cultural and practical observations.
6. **Conversion content**
   - Quiz CTA, result archetypes, consultation invitation, founder story, first-client launch messaging.

### Tone
The voice should be:
- warm,
- direct,
- aspirational but grounded,
- emotionally intelligent,
- stylish,
- conversational,
- human,
- not bureaucratic,
- not aggressively “sales funnel” sounding,
- not fake-luxury or fake-expert.

The content should feel closer to:
> “I have lived this. I know how confusing and exciting a new chapter can feel. Let’s make it clearer.”

Than:
> “Move abroad in 30 days! Guaranteed visa strategy! I know the best country for everyone!”

### Bio / Profile Direction
Preferred personal-brand framing:
**«Новая глава | Маша»**

The intended bio message should communicate:
- five years in four countries,
- honest content about relocation,
- documents,
- career,
- and finding one’s place in the world.

This should remain elegant and personal, not like a generic immigration account.

### Stories Funnel
A prior planned format:
1. Emotional hook / relatable struggle.
2. Personal insight or a common relocation/career pattern.
3. Quiz or self-reflection invitation.
4. CTA toward quiz / session / booking.

### Example Sales/DM Wording
Use this as a tone reference, not unchangeable final copy:

> “That’s actually the reason why I created my 1:1 Life Relocation Reset session — for people who don’t necessarily need ‘a country recommendation’, but need to understand what next chapter fits their goals, lifestyle and opportunities.”

A launch-price follow-up was also discussed. Any price or time-limit claim must use the current configured campaign settings.

### Example Educational Reel Direction
A previously discussed Reel concept uses Spain’s Beckham Law as a fast hook and then transitions into the broader funnel:
- Hook: the fact that Spain’s “Beckham Law” was originally associated with David Beckham’s move to Real Madrid.
- Transition: international opportunity, tax/residency considerations, and how people need a personalized strategic lens rather than one-size-fits-all advice.
- CTA: quiz / 1:1 reset.

**Critical:** tax/legal facts must be researched and updated before publishing. The website should not automatically reuse tax claims as evergreen factual content.

---

## 10. Existing Assets and Current Project State

### Known Assets / Work Already Developed
- Brand / product concept: **LIFE RELOCATION RESET**
- Russian-facing positioning: **«Новая глава | Маша»**
- Offer: 40-minute 1:1 strategic reset session.
- Initial sales copy in Russian and English.
- A live Google Forms quiz: `https://forms.gle/v2NzyHtHYeRxAANg7`
- Four quiz result archetypes.
- A live Canva hosted landing site: `https://relocationreset.my.canva.site/`
- A Canva “About Me” concept / page.
- Calendly availability concept (weekday daytime/evening Madrid hours).
- Initial pricing and launch-sale experimentation.
- Instagram story funnel concepts.
- Initial first-client launch/promo concept.

### What the Website Should Replace or Improve
- Replace the generic Google Form with a branded native quiz.
- Replace a static Canva “About Me” asset with an immersive founder / trust-building web page.
- Centralize offer, pricing, booking, result pages, FAQ, and disclaimers.
- Make it easy to update copy, price, booking links, and quiz scoring without rebuilding the whole site.
- Create an expandable foundation for content resources, guides, and future international audience versions.

### Unknown / Not Yet Confirmed
Codex should not assume these exist:
- Domain name.
- Logo.
- Final brand colors.
- Final typography.
- Live Calendly URL.
- PayPal / PayPal.Me URL.
- Live payment processor account.
- Email platform / CRM.
- Privacy-policy text.
- Refund or rescheduling policy.
- Testimonials.
- Formal written follow-up deliverable.
- A future €99 / €199 pricing structure.
- English-language session availability.
- Exact quiz questions and final scoring.
- A finalized visual direction.

---

## 11. Product and UX Requirements for Codex

### General Build Principles
- Mobile-first. Most visitors will come from Instagram.
- Fast page load; minimal friction.
- Russian should be the default language.
- Architecture should support English later.
- Make all commercial and campaign variables editable.
- Maintain an elegant, premium-feeling but human design.
- Optimize for conversions without looking manipulative.
- Do not use fake testimonials, fake scarcity, countdowns, fake social proof, or unsupported claims.
- Preserve privacy and minimize data collection.

### Localization / i18n
Suggested content architecture:
- Russian (`ru`) as launch language.
- English (`en`) ready as a second language.
- Avoid hard-coding Russian strings throughout components.
- Create translation keys or structured content files.
- Make quiz labels / result content localizable.
- Treat Masha’s personal story with localized nuance, not literal word-for-word translation where possible.

### Data Model Suggestions
Use editable structured content for:
- Offer metadata.
- Price / campaign settings.
- Calendly / payment URLs.
- Quiz questions and answers.
- Archetype results.
- FAQ.
- About-page milestones.
- Resource articles.
- CTA variants.
- Disclaimers.
- UTM campaign mapping.

### Analytics Suggestions
Track, with appropriate consent settings:
- landing-page visits,
- quiz starts,
- quiz completions,
- result type distribution,
- click-through to booking,
- click-through to payment,
- confirmed conversion,
- source / UTM,
- language selection.

Make analytics integration modular; do not assume a specific provider unless selected later.

### Email / Lead Capture
Email collection is not yet a confirmed requirement. Build it as optional:
- Can be disabled.
- Requires a clear consent checkbox / privacy explanation before marketing use.
- Do not block quiz results behind email by default unless Masha chooses that strategy.

---

## 12. Resources Hub: Advanced Website Direction

The user wants Codex to be able to build advanced website resources over time. The platform should therefore support a future resource hub.

### Potential Resource Categories
- “Starting a New Chapter” reflections.
- Country / city lifestyle observations.
- Career and international-market thinking.
- Relocation preparation checklists.
- Questions to ask before moving.
- Building community abroad.
- First months in a new city.
- Personal stories and case-style lessons.
- Broad, carefully sourced document / visa research guides.

### Resource Rules
- Clearly date any potentially time-sensitive immigration, tax, visa, law, cost, or policy content.
- Cite authoritative sources for factual/regulated information.
- Include a visible disclaimer for content that touches law, taxes, visas, or residency.
- Never present blog content as individual professional advice.
- Use content types / tags so future resources can be filtered by:
  - goal,
  - region,
  - career,
  - lifestyle,
  - planning stage,
  - language,
  - content freshness.

### Good Technical Foundation
Codex should consider:
- a simple content collection,
- MD/MDX or CMS-backed entries,
- frontmatter with publication/review dates,
- tags and related resources,
- internal CTA modules toward the quiz/session,
- reusable “last updated” and source/disclaimer components.

No CMS vendor is selected yet. Keep the architecture portable.

---

## 13. Legal, Safety, Privacy, and Trust Rules

### Mandatory Content Safeguards
The site must:
- State that the service is strategic coaching / guidance, not legal or immigration advice.
- Avoid guarantees.
- Avoid making legal/visa/tax claims without current source review.
- Have a real privacy policy and consent handling before collecting personal data.
- Avoid sensitive personal data unless it is essential and the user has knowingly provided it.
- Make the result quiz feel reflective, not diagnostic or medical.
- Avoid collecting passport information, residency documents, or high-risk data through the public quiz.
- Avoid claiming introductions or jobs are promised.

### EU / Spain Context
Because the founder is based in Spain and serves an EU-based business audience, privacy and consumer-facing legal pages need real review before public launch. Codex may provide structural placeholders and implementation support, but must not invent a legally valid policy or commercial terms.

---

## 14. Suggested Site Copy Foundations

These are working direction, not final locked copy.

### Hero Direction (English)
> Your next chapter may not start with choosing a country.  
> It may start with understanding what kind of life, work, and opportunity you are ready to build.

### Hero Direction (Russian)
> Возможно, твоя новая глава начинается не с выбора страны.  
> А с понимания — какую жизнь, карьеру и возможности ты действительно хочешь построить.

### Offer Framing
> A 40-minute 1:1 strategic reset for people who want clarity on what their next chapter could look like — across lifestyle, career, countries, opportunities, and first practical steps.

### Founder / Trust Framing
> I am not here to tell everyone to move to the same “best” country. I am here to help you see which direction makes sense for your life, your ambitions, and the version of yourself you are becoming.

### CTA Directions
- Take the “What Is Your Next Chapter?” quiz.
- Find your relocation archetype.
- Book your 1:1 Life Relocation Reset.
- Get clear on your next move.
- Start your new chapter with a plan.

### Russian CTA Directions
- Пройти тест «Какая новая глава тебе нужна?»
- Узнать свой сценарий перемен.
- Записаться на стратегическую 1:1 сессию.
- Разобраться, куда двигаться дальше.
- Начать новую главу с ясностью.

---

## 15. Build Priorities

### Phase 1 — Conversion MVP
Build:
- landing page,
- About Me page,
- native 7-question quiz,
- 4 result experiences,
- session detail page,
- booking/payment link flow,
- thank-you page,
- configurable price and CTA system,
- basic FAQ/disclaimer/privacy placeholders,
- responsive Russian-first UI,
- analytics hooks.

### Phase 2 — Trust and Content Layer
Add:
- resource hub,
- publishing workflow,
- related resources,
- email capture / lead nurture if selected,
- content categories and tags,
- evergreen / reviewed-date controls,
- bilingual version.

### Phase 3 — Advanced Personalization
Possible future expansion:
- personalized result email,
- quiz result history,
- recommended resources by archetype,
- dynamic country/career reflection tools,
- session preparation intake,
- post-session action-plan template,
- CRM integration,
- member portal or client dashboard.

These are **not yet confirmed business decisions**. Build the initial architecture so they remain possible, but do not overbuild before the MVP works.

---

## 16. What Codex Must Not Invent

Do not invent:
- legal credentials,
- official immigration expertise,
- client testimonials,
- successful visa/job outcomes,
- exact contact numbers,
- payment links,
- live Calendly links,
- current availability,
- a return/refund policy,
- a final standard price,
- fake urgency,
- country recommendations as universal truth,
- factual legal/tax/visa content without current research,
- founder personal details not included in public brand context.

When a detail is unknown:
- Make it editable.
- Use a visibly marked placeholder in development.
- Place it in a configuration file or CMS record.
- Keep user-facing production copy conservative.

---

## 17. One-Paragraph Brief for Codex

Build a polished, mobile-first, Russian-first website for Masha’s personal relocation-and-life-transition brand, **«Новая глава | Маша»**, centered on her paid 40-minute **LIFE RELOCATION RESET** 1:1 strategic session. The experience should lead Instagram visitors through an emotionally intelligent founder introduction, a branded seven-question “next chapter” quiz, one of four result archetypes (Explorer, Builder, Reinventor, Freedom Seeker), and then into a configurable booking/payment flow. The brand is warm, ambitious, elegant, and grounded in Masha’s lived experience across multiple countries — not a bureaucratic visa service. Build all pricing, links, campaign messaging, quiz content, and language content as editable structured data. Avoid legal claims, guarantees, fake scarcity, and invented assets. Create an extensible foundation for future resources, bilingual content, and personalization.

---

## 18. Current Source-of-Truth Snapshot

| Topic | Current working decision |
|---|---|
| Product | LIFE RELOCATION RESET |
| Russian personal brand | «Новая глава | Маша» |
| Core offer | 40-minute 1:1 strategic reset session |
| Primary launch audience | Russian-speaking women, roughly 22–37, Russia/CIS first |
| Primary traffic channel | Instagram |
| Current funnel | Instagram → About Me → Quiz → Result → Booking/Payment |
| Quiz | 7 questions, 4 archetype outcomes |
| Archetypes | Explorer, Builder, Reinventor, Freedom Seeker |
| Latest known launch price | €59, make configurable |
| Earlier price concepts | €99 launch / €199 future, historical only |
| Booking direction | Calendly |
| Payment direction | PayPal / PayPal.Me |
| Scheduling reference | Mon–Fri approximately 10:00–20:00 Madrid time |
| Default language | Russian |
| Future language | English |
| Differentiator | Strategic clarity + lived international experience + possible relevant network connections |
| Not the service | Legal, tax, immigration, or financial advice |
| Priority build | Native quiz + conversion funnel + flexible configuration |

---

## 19. Final Instruction to Codex

Use this document as product context, but build with uncertainty in mind. Where the business owner has not made a final decision, preserve flexibility rather than silently deciding for her. The product should feel personal and premium, but never overclaim. The user’s actual goal is to help someone move from a vague longing for “another life” toward clarity, direction, and an achievable next step.

