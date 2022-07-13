import React from 'react'
import { Link } from 'react-router-dom'

export class Index extends React.Component {
  render() {
    return (
      <div>
        <h3>首页</h3>
        <Link to="/demo">路由跳转示例</Link>
      </div>
    )
  }
}
