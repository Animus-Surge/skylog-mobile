/**
 * Skylog `components/BorderlessAccordion.tsx`
 * Borderless accordion component
 */

import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

/**
 * BorderlessAccordion component
 * @param {string} title - Accordion title
 * @param {React.ReactNode} children - Accordion content
 */
export default function BorderlessAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <FontAwesome name={isOpen ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    elevation: 5,
    width: '90%'
  },
  header: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
  },
})
