/**
 * Skylog `components/screens/Map.tsx`
 * Map screen
 */

import { StyleSheet, Text, View } from 'react-native'

import MapViewComponent from '../MapView'

export default function Map() {
  return (
    <View style={styles.container}>
      <MapViewComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


