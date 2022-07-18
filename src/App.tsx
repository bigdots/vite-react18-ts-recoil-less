import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import Routers from './routers/demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>单页面应用公共部分</h1>
      </header>
      {/* 路由 */}
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  )
}

export default App
