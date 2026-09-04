declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export type AnalyticsEvent =
  | 'click_phone'
  | 'click_zalo'
  | 'click_facebook'
  | 'click_hero_cta'
  | 'view_lead_form'
  | 'start_lead_form'
  | 'submit_lead_success'
  | 'submit_lead_error'
  | 'select_industry'

export const track = (event: AnalyticsEvent, params: Record<string, unknown> = {}) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
  window.gtag?.('event', event, params)
}

export const initAnalytics = () => {
  const id = import.meta.env.VITE_GA_ID as string | undefined
  if (!id || document.getElementById('ga4-script')) return

  const script = document.createElement('script')
  script.id = 'ga4-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args)
  window.gtag('js', new Date())
  window.gtag('config', id)
}
