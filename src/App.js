import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LandingScreen from "./screens/LandingScreen"
import TodaysGamesScreen from "./screens/TodaysGamesScreen"
import OddsScreen from "./screens/OddsScreen"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/todaysgames" element={<TodaysGamesScreen />} />
        <Route path="/odds" element={<OddsScreen />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
