import { GetStaticPropsContext, NextPage } from 'next'
import { useTranslation, Trans } from 'next-i18next'
import { defaultLocale } from '@/root/next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const UseTranslationHook = () => {
  const { t } = useTranslation()
  const label = t('example')

  return <p>다국어 리소스를 명령형 코드로 활용하는 예: {label}</p>
}

const UseTransComponent = () => {
  return (
    <p>
      다국어 리소스를 선언형 코드로 활용하는 예: {<Trans i18nKey="example" />}
    </p>
  )
}

const I18nExample: NextPage = () => {
  return (
    <>
      <UseTranslationHook />
      <UseTransComponent />
    </>
  )
}

export const getStaticProps = async ({
  locale = defaultLocale,
}: GetStaticPropsContext) => {
  const { _nextI18Next } = await serverSideTranslations(locale)

  return {
    props: {
      _nextI18Next,
    },
  }
}

export default I18nExample
