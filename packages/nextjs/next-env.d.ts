/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

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
