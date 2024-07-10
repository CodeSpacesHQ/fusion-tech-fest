import { useState } from 'react'
import './App.css'
import './fonts/style.css'; // Custom font

import Header from './components/Header'
import Home from './pages/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bgf-neutral-white'>
      <Home />    </div>
  )
}

export default App
