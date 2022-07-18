import React from 'react'

import { useRecoilState, useRecoilValue } from 'recoil'
import { countState, doubleCountState } from '../../store/demo'
import $http from '@/api/demo'

import styled from 'styled-components'
const Button = styled.button`
  background-color: aliceblue;
  font-size: 16px;
`

export function Demo() {
  const [count, setCount] = useRecoilState(countState)

  const doublecount = useRecoilValue(doubleCountState)

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleQueryIp = async () => {
    const res = await $http.queryIp()
    console.error(res.data)
  }

  return (
    <div>
      <h2>demo页面</h2>
      <section>
        <h3>Recoil状态管理演示：</h3>
        <Button onClick={handleClick}>点击体验Recoil状态管理{count}</Button>
        <h3>数字翻倍：{doublecount}</h3>
      </section>

      <section>
        <h3>styled-component使用示例：</h3>
        <Button>这是一个使用styled-component写的按钮</Button>
      </section>

      <section>
        <h3>请求接口演示：</h3>
        <button onClick={handleQueryIp}>点击请求接口</button>
        <p> </p>
      </section>
    </div>
  )
}
