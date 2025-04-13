import { Stack } from "expo-router"

import Map from "../components/screens/Map"
import Navbar from "../components/Navbar"

export default function MapPage() {
  return (
    <>
      <Stack.Screen name="map" options={{ headerTitle: "Map", headerShown: false }} />
      <Map />
      <Navbar />
    </>
  )
}
    
