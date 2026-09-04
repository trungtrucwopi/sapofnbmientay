export const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ')

export const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
