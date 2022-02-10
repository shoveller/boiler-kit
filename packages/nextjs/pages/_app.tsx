import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '@/styles/globalStyle.css'
import { defaultTheme } from '../themes/defaultTheme'
import { darkTheme } from '../themes/darkTheme'
import { useEffect, useState } from 'react'

const App = ({ Component, pageProps }: AppProps) => {
  const [on, setOn] = useState(true)
  useEffect(() => {
    const timer = setInterval(() => {
      setOn((value) => !value)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      {on ? <style jsx>{defaultTheme}</style> : <style jsx>{darkTheme}</style>}

      {/*eslint-disable-next-line react/jsx-props-no-spreading*/}
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)
