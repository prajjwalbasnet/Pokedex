import { useState } from "react"
import { PokeCard } from "./components/PokeCard"
import { SideNav } from "./components/SideNav"
import { Header } from "./components/Header"


function App() {

  const [ selectedPokemon, setSelectedPokemon] = useState(0)
  const [showSideMenu, setShowSideMenu ] = useState(true)

  function handleToggleMenu(){
    setShowSideMenu(!showSideMenu)
  }
  function handleCloseMenu() {
    setShowSideMenu(true)
  }

  return (
    <>
      <Header handleToggleMenu={handleToggleMenu}/> 
      <SideNav selectedPokemon={selectedPokemon} 
        setSelectedPokemon={setSelectedPokemon} 
        showSideMenu={showSideMenu}
        handleCloseMenu={handleCloseMenu}
        />
      <PokeCard selectedPokemon={selectedPokemon}/>
      
    </>
  )
}

export default App
