/**
 * SkyLog `App.tsx`
 * Main application entry point
 * Used for expo snack
 */

import { Text } from 'react-native'

import Dashboard from './components/screens/Dashboard'
import Navbar from './components/Navbar'


/**
 * TODO board (Key: - incomplete, o complete, x wontfix, !- high priority)
 * - Header
 * - Navigation  
 */

export default function App() {
  const navCallback = (index: number) => {
    alert(`Navbar item ${index} clicked`)
  }

  return (
    <>
      <Dashboard />
      <Navbar callback={navCallback}/>
    </>
  )
}
