import './App.css'
import { WebsocketChat } from './chat/WebsocketChat'
import { WebsocketProvider } from './chat/WebsocketChatContext'

function App() {
  return (
    <>
      <WebsocketProvider>
        <WebsocketChat />
      </WebsocketProvider>
    </>
  )
}

export default App
