/**
 * SkyLog `components/snackSpecific/header.tsx`
 * Snack-specific header component
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header({title}): {title?: string} {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  ) 
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffaa00',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
})
