import type { NextPage } from 'next'
import Link from 'next/link'

const Index: NextPage = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/css-example">CSS 활용 예제로 이동</Link>
        </li>
        <li>
          <Link href="/i18n-example">다국어 리소스 활용 예제로 이동</Link>
        </li>
      </ul>
    </>
  )
}

export default Index
