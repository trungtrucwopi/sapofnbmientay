import { useEffect, useMemo } from 'react'

const KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
export type UTMData = Partial<Record<(typeof KEYS)[number], string>>

export const useUTM = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const hasUTM = KEYS.some((key) => params.get(key))
    if (!hasUTM) return

    const current: UTMData = {}
    KEYS.forEach((key) => {
      const value = params.get(key)
      if (value) current[key] = value
    })
    sessionStorage.setItem('sapo_mientay_utm', JSON.stringify(current))
  }, [])

  return useMemo<UTMData>(() => {
    try {
      return JSON.parse(sessionStorage.getItem('sapo_mientay_utm') || '{}') as UTMData
    } catch {
      return {}
    }
  }, [])
}
