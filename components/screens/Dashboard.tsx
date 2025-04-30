/**
 * SkyLog `components/screens/Dashboard.tsx`
 * Dashboard screen component
 * Main screen of the application
 */

import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import Accordion from '../Accordion'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import Card from '../Card'

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <ScrollView vertical style={{ width: '100%', padding: 20 }}>
        <Text style={styles.text}>Welcome, User!</Text>
        <ScrollView horizontal style={styles.horizontalScroll}>
          <Card bodyStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome name="clock-o" size={64} color="black" />
            <Text style={styles.text}>150</Text>
            <Text style={{ fontSize: 20 }}>Hours Logged</Text>
            <Button text="View Details" style={{ marginTop: 15 }} onPress={() => alert('View Details clicked!')} />
          </Card>
          <Card bodyStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome name="plane" size={64} color="black" />
            <Text style={styles.text}>5</Text>
            <Text style={{ fontSize: 20 }}>Flights this week</Text>
            <Button text="View Details" style={{ marginTop: 15 }} onPress={() => alert('View Details clicked!')} />
          </Card>
        </ScrollView>
        <Accordion title="Create New...">
          <ButtonGroup
            buttons={[
              { text: 'New Entry', onPress: () => alert('Button 1 clicked!') },
              { text: 'New Flight', onPress: () => alert('Button 2 clicked!') },
            ]}
              />
          <ButtonGroup
            buttons={[
              { text: 'New Aircraft', onPress: () => alert('Button 3 clicked!') },
              { text: 'New Checklist', onPress: () => alert('Button 4 clicked!') },
            ]}
              />
        </Accordion>
        <Accordion title="Checklists">
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>N67890 (Piper Cherokee)</Text>
          <ButtonGroup buttons={[
            { text: 'Preflight', onPress: () => alert('Button 1 clicked!') },
            { text: 'Postflight', onPress: () => alert('Button 2 clicked!') }
          ]} />

          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>N12345 (Cessna 172)</Text>
          <ButtonGroup buttons={[
            { text: 'Preflight', onPress: () => alert('Button 1 clicked!') },
            { text: 'Postflight', onPress: () => alert('Button 2 clicked!') }
          ]} />
        </Accordion>
        <Accordion title="Recent Airports">
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>KATL (Hartsfield-Jackson Atlanta International Airport)</Text>
          <ButtonGroup buttons={[
            { text: 'View Details', onPress: () => alert('Button 1 clicked!') },
            { text: 'Add to Favorites', onPress: () => alert('Button 2 clicked!') }
          ]} />

          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>KJFK (John F. Kennedy International Airport)</Text>
          <ButtonGroup buttons={[
            { text: 'View Details', onPress: () => alert('Button 1 clicked!') },
            { text: 'Add to Favorites', onPress: () => alert('Button 2 clicked!') }
          ]} />
        </Accordion>
        <Accordion title="Your Aircraft">
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>N12345 (Cessna 172)</Text>
          <ButtonGroup buttons={[
            { text: 'View Details', onPress: () => alert('Button 1 clicked!') },
            { text: 'Add to Favorites', onPress: () => alert('Button 2 clicked!') }
          ]} />

          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>N67890 (Piper Cherokee)</Text>
          <ButtonGroup buttons={[
            { text: 'View Details', onPress: () => alert('Button 1 clicked!') },
            { text: 'Add to Favorites', onPress: () => alert('Button 2 clicked!') }
          ]} />
        </Accordion>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  
  horizontalScroll: {
    flexDirection: 'row',
    padding: 10
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
})
