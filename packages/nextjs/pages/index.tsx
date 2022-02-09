import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetServerSidePropsContext } from 'next/types'
import i18nConfig from '../next-i18next.config'

const TranslationTest = () => {
  const { t } = useTranslation()
  const label = t('home')

  return <div>{label}</div>
}

const Index: NextPage = () => {
  return <TranslationTest />
}

export const getServerSideProps = async ({
  locale = i18nConfig.i18n.defaultLocale,
}: GetServerSidePropsContext) => {
  const { _nextI18Next } = await serverSideTranslations(locale)

  return {
    props: {
      _nextI18Next,
    },
  }
}
export default Index
