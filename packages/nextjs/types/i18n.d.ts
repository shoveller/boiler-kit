declare module '@/root/next-i18next.config' {
  const defaultLocale: string
  const locales: string[]

  exports = {
    defaultLocale,
    locales,
    i18n: {
      defaultLocale,
      locales,
    },
  }
}
