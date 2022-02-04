import React, {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
      const url =`https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories/3`
      const fetchData = async(res) => {
      const response = await fetch(res)
      const data = await response.json()
      console.log('render');
      setData(data)
      setIsLoading(false)
      console.log(data.files);
      const map = data.files.map(file=>console.log(file.name))
    }
    fetchData(url)
  }, [])


  return (
    <div className="App">
      <header className="App-header">
          {isLoading ? <h1>Loading...</h1> : <div><p>{data.name}</p><p>
            {data.files.map(file=><p key={file.name}>{file.name}</p>)}
            </p></div>}
      </header>
    </div>
  )
}

export default App;
