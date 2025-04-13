import { Stack } from "expo-router"

export default function RootLayout() {
  return <Stack 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ffaa00'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        textAlign: 'begin',
        fontWeight: 'bold'
      },
    }}
  />
}
