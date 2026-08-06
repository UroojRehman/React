import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentList from './StudentList'
import { Courses } from './Courses/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<StudentList/>
<Courses/>
    </>
  )
}

export default App
