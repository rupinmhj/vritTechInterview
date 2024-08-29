import { useState } from 'react'
import Navbar from './Components/Navbar'



function App() {
  const [count, setCount] = useState(0)
  const items=['Python','Java','Ruby','dotnet']

  return (
    <>
     <Navbar/>
    </>
  )
}

export default App
