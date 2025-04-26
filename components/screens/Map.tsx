/**
 * Skylog `components/screens/Map.tsx`
 * Map screen
 */

import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native'

import MapView from 'react-native-maps'

import Button from '../Button'

export default function Map() {
  return (
    <View style={styles.container}>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


