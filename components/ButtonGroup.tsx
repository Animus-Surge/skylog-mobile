/**
 * Skylog `components/ButtonGroup.tsx`
 * ButtonGroup component
 */

import React from 'react'

import { View, StyleSheet } from 'react-native'

import Button from './Button'

/**
 * ButtonGroup component
 * @param {Array} buttons - Array of button objects with text and onPress function
 * @param {object} style - Additional styles
 */
export default function ButtonGroup({ buttons, style }: { buttons: { text: string; onPress: () => void }[]; style?: object }) {
  return (
    <View style={[styles.buttonGroup, style]}>
      {buttons.map((button, index) => (
        <View key={index} style={styles.buttonWrapper}>
          <Button text={button.text} onPress={button.onPress} />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    gap: 10
  },
  buttonWrapper: {
    flex: 1
  },
})

