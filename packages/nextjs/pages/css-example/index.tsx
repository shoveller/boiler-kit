import { NextPage } from 'next'
import css from 'styled-jsx/css'

const LocalStyling = () => {
  const style = css`
    div.test {
      color: red;
    }
  `

  return (
    <>
      <style jsx>{style}</style>
      <div className="test">컴포넌트 단위로 CSS를 적용하는 예</div>
    </>
  )
}

const CssExample: NextPage = () => {
  return (
    <>
      <LocalStyling />
    </>
  )
}

export default CssExample
