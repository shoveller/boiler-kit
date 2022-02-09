import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

const Style = () => (
  <style global jsx>{`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }
  `}</style>
)

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Style />
      {/*eslint-disable-next-line react/jsx-props-no-spreading*/}
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)
