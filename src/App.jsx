import { useState } from 'react'
import NavBar from './componets/NavBar'
import Main from './componets/Main'
import Calculator from './componets/Calculator'
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [USER, setUSER] = useState('')
  const [full, setFull] = useState(false)
  
  const transition = (user) => {
    setFull(!full)
    setUSER(user.name)
  };

  return (
    <>
      <div className='w-[100vw]'>
        {!full && <NavBar fx={transition}/>}
        {!full && <Main/>}
        {full && <Calculator name={USER}/>}
        
      </div>
      <Analytics />
    </>
  )
}

export default App
