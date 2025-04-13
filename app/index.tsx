import { Text, View } from "react-native"
import { Stack } from "expo-router"

import Dashboard from "../components/screens/Dashboard"

import Navbar from "../components/Navbar"

export default function Index() {

  return (
    <>
      <Stack.Screen name="index" options={{ headerTitle: "Dashboard" }} />
      <Dashboard />
      <Navbar />
    </>
  )
}
