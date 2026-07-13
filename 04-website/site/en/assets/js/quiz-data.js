window.LRRQuizData = {
  questions: [
    {
      id: "region_interest",
      label: "If you could choose any country to live in, which region would interest you the most?",
      type: "single_choice",
      options: [
        { label: "Europe", score: { explorer: 2, builder: 1 } },
        { label: "Asia", score: { freedom_seeker: 1, explorer: 2 } },
        { label: "Middle East", score: { builder: 2, explorer: 1 } },
        { label: "North or South America", score: { builder: 1, reinventor: 1, explorer: 1 } },
        { label: "I'm not sure yet / open to different options", score: { reinventor: 2, freedom_seeker: 1 } }
      ]
    },
    {
      id: "environment",
      label: "What kind of environment feels most like you?",
      type: "single_choice",
      options: [
        { label: "The energy of a big city", score: { builder: 2 } },
        { label: "Life by the ocean", score: { freedom_seeker: 2 } },
        { label: "A peaceful and charming town", score: { reinventor: 1, explorer: 1 } },
        { label: "An international community", score: { explorer: 2, builder: 1 } }
      ]
    },
    {
      id: "fearless_action",
      label: "If all your fears disappeared tomorrow, what would you do?",
      type: "single_choice",
      options: [
        { label: "Move to another country", score: { explorer: 2 } },
        { label: "Start my own business", score: { builder: 2 } },
        { label: "Change careers", score: { reinventor: 2 } },
        { label: "Travel and work remotely", score: { freedom_seeker: 2 } }
      ]
    },
    {
      id: "main_obstacle",
      label: "What's holding you back the most?",
      type: "single_choice",
      options: [
        { label: "Money", score: { builder: 1, freedom_seeker: 1 } },
        { label: "Language", score: { explorer: 1, reinventor: 1 } },
        { label: "I don't know where to start", score: { reinventor: 2 } },
        { label: "I'm afraid of making the wrong decision", score: { reinventor: 1, explorer: 1 } }
      ]
    },
    {
      id: "desired_change",
      label: "What would you like to change in your life right now?",
      type: "single_choice",
      options: [
        { label: "I want more opportunities to grow", score: { builder: 2 } },
        { label: "I want to feel more connected to where I live", score: { explorer: 2 } },
        { label: "I want to increase my income", score: { builder: 2 } },
        { label: "I'm ready for a fresh start", score: { reinventor: 2 } }
      ]
    },
    {
      id: "clarity_need",
      label: "If you could get clarity on one thing right now, what would it be?",
      type: "single_choice",
      options: [
        { label: "Which country would fit me best", score: { explorer: 2 } },
        { label: "Where to find the right job, clients, apartments or connections", score: { builder: 1, explorer: 1 } },
        { label: "How to increase my income and opportunities", score: { builder: 2 } },
        { label: "What my next step should be", score: { reinventor: 1, freedom_seeker: 1 } }
      ]
    },
    {
      id: "three_year_vision",
      label: "Imagine it's 3 years from now and your life has changed for the better. What happened?",
      type: "single_choice",
      options: [
        { label: "I finally stopped postponing the life I wanted", score: { reinventor: 3 } },
        { label: "I created more freedom and flexibility in my life", score: { freedom_seeker: 3 } },
        { label: "I built a career with more opportunities and income", score: { builder: 3 } },
        { label: "I moved to a country that feels right for me", score: { explorer: 3 } }
      ]
    },
    {
      id: "instagram",
      label: "Your Instagram account",
      type: "text",
      placeholder: "@username",
      help: "Leave your handle if you would like Masha to contact you after the assessment."
    },
    {
      id: "current_job",
      label: "What's your current job? Optional.",
      type: "text",
      placeholder: "For example: marketing, actress, project manager",
      optional: true
    }
  ],
  results: {
    explorer: {
      title: "The Explorer",
      summary: "You are not looking for a vacation. You are looking for a place where your next chapter can grow.",
      body:
        "Your environment matters more than you may realize. You want growth, new experiences, and a place that fits the person you are becoming.",
      strength: "You are curious, adaptive, and sensitive to the energy of a place.",
      countries: "Compare international, well-connected places with lifestyle infrastructure: Spain, Portugal, UAE, Thailand, Indonesia, Mexico, or the US.",
      opportunities: "Look for creative networks, communities, coworking spaces, events, and places where newcomers can build quickly.",
      mistakes: "Do not choose a country only because it looks beautiful online. Check money, documents, healthcare, and daily rhythm.",
      nextStep: "Compare 2 or 3 destinations by lifestyle, income, documents, network, and emotional fit."
    },
    builder: {
      title: "The Builder",
      summary: "Your focus is growth, opportunity, income, and a bigger version of your future.",
      body:
        "For you, relocation may not only be about a country. It may be about market access, career growth, clients, projects, and scale.",
      strength: "You think in terms of growth, income, positioning, and visibility.",
      countries: "Look at markets with clients, startups, creative industries, or premium services: UAE, Spain, Portugal, UK, US, Singapore.",
      opportunities: "Look for international clients, partnerships, freelance work, events, consulting, sales, marketing, or creative production.",
      mistakes: "Do not move somewhere exciting if it weakens your income path. Research demand, pricing, taxes, and client access.",
      nextStep: "Match your skills with 2 or 3 markets where your work can become more valuable."
    },
    reinventor: {
      title: "The Reinventor",
      summary: "You are ready for change, even if part of you is still waiting for permission or certainty.",
      body:
        "You do not need to have the whole path figured out before taking the first step. You need a realistic first plan that reduces noise and creates movement.",
      strength: "You can admit when the current version of life no longer fits.",
      countries: "Look for easier transition places: clear documents, lower pressure, community, language options, and manageable costs.",
      opportunities: "Try short stays, remote income tests, language study, portfolio rebuilding, collaborations, or transitional work.",
      mistakes: "Do not wait for 100 percent certainty. Also do not make dramatic choices from panic.",
      nextStep: "Create a 30-day clarity plan: research, money numbers, people to speak to, and one small experiment."
    },
    freedom_seeker: {
      title: "The Freedom Seeker",
      summary: "You are looking for freedom: more choice, more flexibility, and a life designed on your terms.",
      body:
        "You may not only need a new location. You may need a new life structure: remote work, flexibility, entrepreneurship, a different environment, or more independence.",
      strength: "You value autonomy, movement, and the ability to design your days.",
      countries: "Look at remote-friendly places with good lifestyle and flexible stay options: Portugal, Spain, Thailand, Mexico, Georgia, Turkey, UAE.",
      opportunities: "Look for remote work, freelance clients, digital services, content, coaching, creative work, or seasonal projects.",
      mistakes: "Do not confuse freedom with no structure. You still need income planning, documents, routines, and community.",
      nextStep: "Define your freedom formula: income target, lifestyle, work format, documents, community, and risk level."
    }
  }
};
