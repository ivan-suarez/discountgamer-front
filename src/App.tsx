import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null);

  useEffect(() =>{
    axios.get('http://localhost:8080/game/getAll').then(response =>{
      setData(response.data);
      console.log(response.data);
    })
    .catch(error =>{
      console.error('Error fetching data', error);
    })
  })

  return (
    <>
     <div>
        <ul>
          {data.map((item) =>(
            <li key={item.id}>{item.name}:{item.genre}:{item.releaseYear}:{item.score}:{item.developer} </li>
          ))}
        </ul>
      </div>
      
      
     
    </>
  )
}

export default App
