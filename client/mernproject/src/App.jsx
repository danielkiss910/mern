import { useState } from 'react'
import './App.css'
import { ListOfBooks } from "./components/ListOfBooks.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <ListOfBooks></ListOfBooks>
      </div>
  )


}

export default App
