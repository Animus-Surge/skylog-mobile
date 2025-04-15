/**
 * Skylog `components/Form.tsx`
 * Form component
 */

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './Button'

export default function Form({children, title, onSubmit}): {children: React.ReactNode, title: string, onSubmit: () => void} {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.form}>
        {children}
      </View>
      <Button title="Submit" onPress={onSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
})
