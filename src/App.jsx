import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Left from './Home/LeftPart/Left'
import Right from './Home/Rightpart/Right'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-screen overflow-hidden'>
      <Left />
      <Right />
    </div>
  );
}

export default App
