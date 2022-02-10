import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import css from 'styled-jsx/css'

const globalStyle = css`
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
`

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>
        {globalStyle}
      </style>
      {/*eslint-disable-next-line react/jsx-props-no-spreading*/}
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)
