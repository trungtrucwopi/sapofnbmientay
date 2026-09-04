import { CONTACT_ENDPOINT, FORM_SOURCE } from '../config/contact'
import type { UTMData } from '../hooks/useUTM'

export type LeadPayload = {
  name: string
  phone: string
  businessName: string
  province: string
  businessType: string
  scale: string
  needs: string[]
  note: string
  utm: UTMData
}

export const normalizePhone = (raw: string) => {
  let phone = raw.replace(/[^\d+]/g, '')
  if (phone.startsWith('+84')) phone = `0${phone.slice(3)}`
  if (phone.startsWith('84') && !phone.startsWith('840')) phone = `0${phone.slice(2)}`
  return phone.replace(/\D/g, '')
}

export const isValidVietnamPhone = (raw: string) => {
  const phone = normalizePhone(raw)
  return /^0\d{9,10}$/.test(phone)
}

export const submitLead = async (payload: LeadPayload) => {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 12000)

  const body = new URLSearchParams({
    name: payload.name.trim(),
    phone: normalizePhone(payload.phone),
    businessName: payload.businessName.trim(),
    province: payload.province.trim(),
    businessType: payload.businessType,
    scale: payload.scale,
    needs: payload.needs.join(', '),
    note: payload.note.trim(),
    source: FORM_SOURCE,
    pageUrl: window.location.href,
    referrer: document.referrer,
    utm_source: payload.utm.utm_source || '',
    utm_medium: payload.utm.utm_medium || '',
    utm_campaign: payload.utm.utm_campaign || '',
    utm_content: payload.utm.utm_content || '',
    utm_term: payload.utm.utm_term || '',
    createdAt: new Date().toISOString(),
  })

  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body,
      signal: controller.signal,
    })

    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const text = await response.text()
    let data: unknown = text
    try {
      data = JSON.parse(text)
    } catch {
      // Apps Script may return plain text depending on deployment implementation.
    }

    return data
  } finally {
    window.clearTimeout(timeout)
  }
}
