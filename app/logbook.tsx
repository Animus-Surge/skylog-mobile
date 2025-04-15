/**
 * Skylog `app/logbook.tsx`
 * Logbook page
 */

import Logbook from '../components/screens/Logbook'
import Navbar from '../components/Navbar'

import { Stack } from 'expo-router'

export default function LogbookPage() {
  return (
    <>
      <Stack.Screen name="logbook" options={{ headerTitle: "Logbook" }} />
      <Logbook />
      <Navbar />
    </>
  )
}
