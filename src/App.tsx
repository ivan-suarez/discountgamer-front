import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null);

  useEffect(() =>{
    axios.get('http://localhost:8080/game/getAll').then(response =>{
      setData(response.data);
      console.log(response.data);
    })
    .catch(error =>{
      console.error('Error fetching data', error);
    })
  }, []); // Added an empty dependency array to ensure fetching happens only once

  return (
    <>
     <div>
        <ul>
          {data && data.map((item) =>(
            <li key={item.id}>
              {item.name}:{item.genre}:{item.releaseYear}:{item.score}:{item.developer}
            </li>
          ))}
        </ul>
      </div>
      
      
     
    </>
  )
}

export default App
