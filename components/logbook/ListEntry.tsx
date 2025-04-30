/**
 * Skylog `components/logbook/ListEntry.tsx`
 * List entry component for the logbook
 */

import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { FontAwesome } from '@expo/vector-icons'

export default function ListEntry({ type, date, hours, plane }: { type: string, date: string, hours: number, plane: string }) {
  return (
    <View style={styles.entry}>
      <View style={styles.icon}>
        <FontAwesome name="plane" size={24} color="black" />
      </View>
      <View style={styles.details}>
        <View style={styles.row}>
          <Text style={styles.type}>{type}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.hours}>{hours} hours</Text>
          <Text style={styles.plane}>{plane}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  entry: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  type: {
    fontWeight: 'bold',
  },
  date: {
    color: '#888',
  },
  hours: {
    color: '#888',
  },
  plane: {
    fontStyle: 'italic',
  },
})
