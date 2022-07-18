import React from 'react'
import { Link } from 'react-router-dom'

export class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>首页</h2>
        <section>
          <h3>路由跳转演示：</h3>
          <Link to="/demo">点击我跳转路由</Link>
        </section>
        <section>
          <h3>环境变量引入演示：</h3>
          <p>当前为：{import.meta.env.VITE_TITLE}</p>
        </section>
      </div>
    )
  }
}
