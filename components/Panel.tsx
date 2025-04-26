/**
 * Skylog `components/Panel.tsx`
 * Panel component
 */

import {StyleSheet, Text, View} from "react-native"

export default function Panel({title, children}): {title?: string; children: React.ReactNode} {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
})


