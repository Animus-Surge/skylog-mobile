/**
 * Skylog `components/screens/Logbook.tsx`
 * Logbook page
 */

import { StyleSheet, Text, View } from 'react-native'

import Panel from '../Panel'
import ListEntry from '../logbook/ListEntry'
import Button from '../Button'

export default function Logbook() {
  return (
    <View style={styles.container}>
      <Panel>
        <Text style={styles.header}>Recent Entries</Text>
        <ListEntry type="Solo" date="2023-10-01" hours={1.5} plane="Cessna 172" />
        <ListEntry type="Solo Night" date="2023-10-02" hours={2.0} plane="Cessna 172" />
        <ListEntry type="Solo" date="2023-10-03" hours={0.5} plane="Cessna 172" />
        <ListEntry type="Solo" date="2023-10-04" hours={1.0} plane="Cessna 172" />
        <Button text="More Details" onPress={() => {}} />
      </Panel>

      <Panel>
        <Text style={styles.header}>Total Hours</Text>
        <Text style={styles.detailText}>Flight Hours: 150.0</Text>
        <Text style={styles.detailText}>Simulator Hours: 10.0</Text>
        <Button text="Add Entry" onPress={() => {}} />
      </Panel>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
  },
})
