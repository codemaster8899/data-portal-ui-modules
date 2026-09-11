export function getRepresentativeLocaleOf({
  candidates = [],
  preferredLocale = [],
}: {
  candidates: string[]
  preferredLocale?: string | string[] | null
}) {
  if (candidates.length === 0)
    return ''
  if (!preferredLocale || preferredLocale.length === 0)
    return candidates[0]

  const priorityListArray = Array.isArray(preferredLocale) ? preferredLocale : [preferredLocale]
  for (const locale of priorityListArray) {
    if (candidates.includes(locale))
      return locale
  }
  return candidates[0]
}

export function getTranslationFor(obj?: Record<string, string> | null, preferredLocale?: string | string[] | null) {
  if (!obj)
    return ''
  const locale = getRepresentativeLocaleOf({ candidates: Object.keys(obj), preferredLocale })
  return obj[locale]
}

export function getLocalizedValue({
  obj,
  fallbackLocale,
}: {
  obj?: Record<string, string> | null
  fallbackLocale: MaybeRefOrGetter<string>
}) {
  const localizedValue = getTranslationFor(obj, toValue(fallbackLocale))
  return localizedValue || obj?.[toValue(fallbackLocale)] || ''
}