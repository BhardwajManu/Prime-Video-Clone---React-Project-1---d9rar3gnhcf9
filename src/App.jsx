
import './App.css'
import AuthContextProvider from './Context/AuthContext'
import WatchlistContextProvider from './Context/WatchlistContext'
import Routing from './components/Routes'



function App() {

  return (
    <>
      <AuthContextProvider>
        <WatchlistContextProvider>
          <Routing />
        </WatchlistContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
