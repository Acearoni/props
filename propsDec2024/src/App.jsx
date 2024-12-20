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
        gamesales={200}
      />


      <Games
        title={'SSX Tricky'}
        company={'EA Big'}
        platform={'PS2'}
        gamesales={400}
      />

      <Games
        title={'Pokemon Emerald'}
        company={'Nintendo'}
        platform={'Gameboy SP'}
        gamesales={100}
      />


    </>
  )
}

export default App
