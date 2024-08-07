import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import Content from './Content'
import Photo from './Photo'
import Support from './Support'
import FixedLayout from './FixedLayout'
import Animation1 from './Animation1'
import Toolkit from './Toolkit'
import Manager from './Manager'
import Download from './Download'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Nav/>
   <Content/>
   <Photo/>
   <Support/>
   <FixedLayout/>
   <Animation1/>
   <Toolkit/>
   <Manager/>
   <Download/>
   <Footer/>
   
   </>
  )
}

export default App
