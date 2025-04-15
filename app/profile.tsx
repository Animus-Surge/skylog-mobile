/**
 * Skylog `app/profile.tsx`
 * Profile page
 */

import Profile from '../components/screens/Profile'
import Navbar from '../components/Navbar'

import { Stack } from 'expo-router'

export default function ProfilePage() {
  return (
    <>
      <Stack.Screen name="profile" options={{ headerTitle: "Profile" }} />
      <Profile />
      <Navbar />
    </>
  )
}
