/**
 * Skylog `components/AccordionLink.tsx`
 * Accordion link component
 */

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

/**
 * AccordionLink component
 * @param {string} text - Link text
 * @param {string} icon - Icon name (FontAwesome)
 * @param {function} onPress - Press handler
 */
export default function AccordionLink({ text, icon, onPress }: { text: string; icon?: string; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.link}>
      {icon && <FontAwesome name={icon} size={24} color="black" />}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
})


