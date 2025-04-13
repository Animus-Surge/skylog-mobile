/**
 * Skylog `components/Navbar.tsx`
 * Navbar component
 */

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useRouter } from 'expo-router'

import { FontAwesome } from '@expo/vector-icons'

export default function Navbar({callback}): {callback?: any} {
  const router = useRouter()

  return (
    <View style={styles.navbar}>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onPress={() => callback ? callback(0) : router.replace('/')}>
        <FontAwesome name="home" size={24} color="black"/>
        <Text style={{ fontSize: 14, color: 'black' }}>Home</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onPress={() => callback ? callback(1) : router.replace('/map')}>
        <FontAwesome name="map" size={24} color="#333"/>
        <Text style={{ fontSize: 14, color: '#333' }}>Map</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onPress={() => callback ? callback(2) : router.replace('/logbook')}>
        <FontAwesome name="pencil" size={24} color="#333"/>
        <Text style={{ fontSize: 14, color: '#333' }}>Logbook</Text>
      </View>
      <TouchableOpacity style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onPress={() => callback ? callback(3) : router.replace('/profile')}>
        <FontAwesome name="user" size={24} color="#333" />
        <Text style={{ fontSize: 14, color: '#333' }}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffaa00',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingBottom: 40,
  },
})
