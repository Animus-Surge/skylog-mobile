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

export default function Card({ title, style, bodyStyle, children }: { title?: string; style?: object; bodyStyle?: object; children: React.ReactNode }) {
  return (
    <View style={[styles.card, style]}>
      {title && (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
      )}
      <View style={[{ marginVertical: 10 }, bodyStyle]}>
        {children}
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
    marginHorizontal: 5,
    elevation: 5,
    width: 280,
    borderWidth: 1,
    borderColor: '#ccc',
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
