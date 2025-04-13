/**
 * Skylog `components/Navbar.tsx`
 * Navbar component
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useRouter } from 'expo-router'

import { FontAwesome } from '@expo/vector-icons'

export default function Navbar() {
  const router = useRouter()

  return (
    <View style={styles.navbar}>
      <FontAwesome name="home" size={24} color="black" onPress={() => router.push('/')} />
      <FontAwesome name="user" size={24} color="black" onPress={() => router.push('/')} />
      <FontAwesome name="cog" size={24} color="black" onPress={() => router.push('/')} />
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingBottom: 30,
  },
})
