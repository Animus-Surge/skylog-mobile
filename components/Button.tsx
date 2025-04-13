/**
 * Skylog `components/Button.tsx`
 * Button component
 */

import React from 'react'

import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

/**
 * Button component
 * @param {string} text - Button text
 * @param {function} onPress - Button press handler
 * @param {string} icon - Icon name (FontAwesome)
 * @param {object} style - Additional styles
 */
export default function Button({ text, onPress, icon, style }: { text: string; onPress: () => void; icon?: string; style?: object }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {icon && <FontAwesome name={icon} size={24} color="white" />}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})
