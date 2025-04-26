import { Stack } from "expo-router"

import { Text, View } from "react-native"

import Map from "../components/screens/Map"
import Navbar from "../components/Navbar"

export default function MapPage() {
  return (
    <>
      <Stack.Screen name="map" options={{ headerTitle: "Map", headerShown: false }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text style={{ fontSize: 20 }}>Unimplemented</Text>
      </View>
      <Navbar />
    </>
  )
}
    
