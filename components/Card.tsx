/**
 * Skylog `components/Card.tsx`
 * Card component
 */

import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

/**
 * Card component
 * @param {string} title - Card title
 * @param {string} description - Card description
 * @param {string} icon - Icon name (FontAwesome)
 * @param {object} style - Additional styles
 */

export default function Card({ title, style, content }: { title?: string; style?: object; content: React.ReactNode }) {
  return (
    <View style={[styles.card, style]}>
      {title && (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
      )}
      <View style={{ marginTop: 10 }}>
        {content}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
})
