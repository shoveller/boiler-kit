import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '@/styles/globalStyle.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/*eslint-disable-next-line react/jsx-props-no-spreading*/}
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)
