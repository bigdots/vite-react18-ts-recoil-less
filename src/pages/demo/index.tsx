import React from 'react'

import { useRecoilState, useRecoilValue } from 'recoil'
import { countState, doubleCountState } from '../../store/demo'

import styled from 'styled-components'
const Button = styled.button`
  background-color: aliceblue;
`

export function Demo() {
  const [count, setCount] = useRecoilState(countState)

  const doublecount = useRecoilValue(doubleCountState)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h3>demo页面</h3>
      <h2 onClick={handleClick}>点击体验Recoil状态管理{count}</h2>
      <h3>数字翻倍：{doublecount}</h3>
      <div>
        <Button>styled-component使用示例</Button>
      </div>
    </div>
  )
}
