import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './header/header'
import { About } from './about/about'


function App() {

  return (
    <>
    <div>
     <Header/>
     <About/>
    </div>
    </>
  )
}

export default App
