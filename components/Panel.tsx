/**
 * Skylog `components/Panel.tsx`
 * Panel component
 */

import { StyleSheet, View } from 'react-native'

export default function Panel({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000',
    elevation: 5,
    width: '90%',
  },
})
