/**
 * SkyLog `App.tsx`
 * Main application entry point
 * Used for expo snack
 */

import { Text } from 'react-native'

import Dashboard from './components/screens/Dashboard'
import Navbar from './components/Navbar'
import Header from './components/snackSpecific/header'

/**
 * TODO board (Key: - incomplete, o complete, x wontfix, !- high priority)
 * o Header
 *!- Integrate navbar with header, titles and all 
 * o Navigation  
 */

export default function App() {
  const navCallback = (index: number) => {
    alert(`Navbar item ${index} clicked`)
  }

  return (
    <>
      <Header title="Dashboard"/>
      <Dashboard />
      <Navbar callback={navCallback}/>
    </>
  )
}
