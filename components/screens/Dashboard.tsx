/**
 * SkyLog `components/screens/Dashboard.tsx`
 * Dashboard screen component
 * Main screen of the application
 */

import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
})
