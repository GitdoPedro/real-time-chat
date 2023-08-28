import { useState } from 'react'
import './App.css'
import Join from './components/Join'
import Chat from './components/Chat'

function App() {
  const [chatVisibility, setchatVisibility] = useState(false)
  const [socket, setSocket] = useState(null)
  return (
    <div className="App">
      {
        chatVisibility ? <Chat socket={socket} /> : <Join setSocket={setSocket} setchatVisibility ={setchatVisibility} />
      }
      
    </div>
  )
}

export default App
