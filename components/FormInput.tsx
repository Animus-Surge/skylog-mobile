/**
 * Skylog `components/FormInput.tsx`
 * Form input component
 */

import React from 'react'

import { StyleSheet, TextInput, View, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'

export default function FormInput({
  label, type, initialValue, onUpdate, placeholder, style}): {label?: string, type: string, initialValue?: string, onUpdate?: any, placeholder?: string, style?: object} {
  const [value, setValue] = React.useState(initialValue || '')
  const [isFocused, setIsFocused] = React.useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleChange = (text: string) => {
    setValue(text)
    if (onUpdate) {
      onUpdate(text)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, isFocused && styles.focused, style]}>
        <KeyboardAvoidingView behavior={ platform === 'ios' ? 'padding':'height' } >
        {label && <Text style={styles.label}>{label}</Text>}
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            secureTextEntry={type === 'password'}
          />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  focused: {
    borderColor: '#ffaa00',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    fontSize: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
})
