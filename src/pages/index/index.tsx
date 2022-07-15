import React from 'react'
import { Link } from 'react-router-dom'

console.error(import.meta.env)

export class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>{import.meta.env.VITE_TITLE}</h2>
        <h3>首页</h3>
        <Link to="/demo">路由跳转示例</Link>
      </div>
    )
  }
}
