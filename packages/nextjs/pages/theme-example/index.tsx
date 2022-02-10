import { NextPage } from 'next'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { defaultTheme } from '../../themes/defaultTheme'
import { darkTheme } from '../../themes/darkTheme'

const ThemeChanger: FC<{
  on: boolean
  setOn: Dispatch<SetStateAction<boolean>>
}> = ({ on, setOn }) => {
  return (
    <input
      id="changer"
      type="checkbox"
      checked={on}
      onChange={() => setOn((value) => !value)}
    />
  )
}

const ThemeExample: NextPage = () => {
  const [on, setOn] = useState(true)

  return (
    <>
      <ThemeChanger on={on} setOn={setOn} />
      {on ? <style jsx>{defaultTheme}</style> : <style jsx>{darkTheme}</style>}
      <p>테마 적용 예제이며, 프로덕션 코드가 아닙니다.</p>
      <p>동적으로 css variables를 바꾸는 코드가 핵심입니다.</p>
    </>
  )
}

export default ThemeExample
