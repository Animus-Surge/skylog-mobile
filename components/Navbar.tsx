/**
 * Skylog `components/Navbar.tsx`
 * Navbar component
 */

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { usePathname, useRouter } from 'expo-router'

import { FontAwesome } from '@expo/vector-icons'

const activeColor = "#000"
const inactiveColor = "#666"

export default function Navbar({callback}): {callback?: any} {
  const path = usePathname()
  const router = useRouter()

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onPress={() => callback ? callback(0) : router.replace('/')}>
        <FontAwesome name="home" size={24} color={path==='/'? activeColor : inactiveColor} />
        <Text style={{ fontSize: 14, color: path==='/'? activeColor : inactiveColor }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onPress={() => callback ? callback(1) : router.replace('/map')}>
        <FontAwesome name="map" size={24} color={path==='/map'? activeColor : inactiveColor}/>
        <Text style={{ fontSize: 14, color: path==='/map'? activeColor : inactiveColor }}>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onPress={() => callback ? callback(2) : router.replace('/logbook')}>
        <FontAwesome name="pencil" size={24} color={path==='/logbook'? activeColor : inactiveColor}/>
        <Text style={{ fontSize: 14, color: path==='/logbook'? activeColor : inactiveColor }}>Logbook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onPress={() => callback ? callback(3) : router.replace('/profile')}>
        <FontAwesome name="user" size={24} color={path==='/profile'? activeColor : inactiveColor} />
        <Text style={{ fontSize: 14, color: path==='/profile'? activeColor : inactiveColor }}>Profile</Text>
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
