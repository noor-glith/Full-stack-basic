import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect} from 'react'

function App() {
  const [jokes, setJokes] = useState([])


  useEffect(() =>{
    axios.get('http://localhost:3000/jokes')
    .then((response)=>{
      setJokes(response.data)
    }
  )
  .catch((error)=>{
    console.log(error)
  }
)
  })
  return (
    <div>
      <h1>Chai aur full Stack</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke)=>{
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        })
      }
    </div>
  )
}

export default App
