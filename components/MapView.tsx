/**
 * Skylog `components/MapView.tsx`
 * MapView component
 */

//FIXME

import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import MapView from 'react-native-maps'

export default function MapViewComponent() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}/>
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
})
