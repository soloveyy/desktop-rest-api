import React, { useEffect, useState } from 'react'
import './App.css';
import  DesktopElements  from './components/DesktopElements';
import { Loading } from './components/Loading';

function App() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [directoryId, setDirectoryId] = useState('')

  useEffect(()=>{
      const fetchData = async() => {
      const response = await fetch(`https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories/${directoryId}`)
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    }
    fetchData()
  }, [directoryId])

  return (
    <div className='App'>
      {isLoading ? <Loading/> : 
        <DesktopElements 
          data={data} 
          setDirectoryId={setDirectoryId}
        />
      }
    </div>
  )
}

export default App;
