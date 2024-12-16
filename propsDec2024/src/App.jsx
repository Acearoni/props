import './App.css'
import Nav from './components/Nav'
import Games from './components/Games'

function App() {


  return (
    <>
      {/* Think of these as calling an argument */}

      <Nav />

      <Games
        title={'Jet Force Gemini'}
        company={'RareWare'}
        platform={'Nintendo 64'}
      />







    </>
  )
}

export default App
