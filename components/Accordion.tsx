/**
 * Skylog `components/Accordion.tsx`
 * Accordion component
 */

import React, { useState } from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

/**
 * Accordion component
 * @param {string} title - Title of the accordion
 * @param {React.ReactNode} children - Content of the accordion
 */
export default function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.accordionHeader}>
        <Text style={styles.accordionTitle}>{title}</Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.accordionContent}>{children}</View>}
    </View>
  )
}

const styles = StyleSheet.create({
  accordionContainer: {
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  accordionHeader: {
    padding: 15,
    backgroundColor: '#fff',
  },
  accordionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  accordionContent: {
    padding: 15,
  },
})
