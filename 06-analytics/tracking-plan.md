# Tracking Plan

This is the first analytics event plan for the Life Relocation Reset website MVP.

## Current Prototype

The static prototype records events into:

- `window.LRRAnalyticsPreview` for local inspection;
- `window.dataLayer` only after analytics consent is accepted;
- `localStorage["lrr_demo_events"]` only after analytics consent is accepted.

No events are sent to an external analytics provider yet.

## Consent

The site now includes a small analytics consent banner.

Consent values:

- `accepted` - production-style tracking can run.
- `necessary` - no optional analytics should be sent.

The local key is:

- `localStorage["lrr_analytics_consent"]`

## Event Names

- `site_loaded`
- `section_viewed`
- `header_cta`
- `hero_quiz_click`
- `hero_about_click`
- `quiz_step_viewed`
- `quiz_answered`
- `quiz_completed`
- `quiz_restarted`
- `result_booking_click`
- `booking_calendly_click`
- `footer_instagram_click`
- `analytics_consent_accepted`
- `analytics_consent_declined`

## Recommended Production Destinations

Choose one primary privacy-conscious analytics tool first, then add ad pixels later only if needed.

Recommended first choices:

- Plausible or Fathom for simple privacy-friendly behavior analytics.
- Google Analytics 4 if deeper attribution and advertising integrations are required.
- Meta Pixel only when paid Instagram/Facebook campaigns are active and consent handling is ready.

## Useful Funnel Metrics

- Landing page views.
- Assessment starts.
- Assessment completion rate.
- Result distribution.
- Result-to-session click rate.
- Booking click rate.
- Instagram outbound clicks.
- Drop-off by quiz question.

## Data To Avoid

Do not send sensitive free-text answers, legal/immigration details, financial details, or private personal context into ad pixels or general analytics tools.

Quiz answers can be stored in a CRM or database later, but only with clear consent and a privacy notice.
