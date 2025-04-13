/**
 * SkyLog `components/screens/Dashboard.tsx`
 * Dashboard screen component
 * Main screen of the application
 */

import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Accordion from '../Accordion'
import Button from '../Button'
import Card from '../Card'

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <ScrollView vertical style={{ width: '100%' }}>
        <ScrollView horizontal style={styles.horizontalScroll}>
          <Card title="Card 1">
            <Text>Content of Card 1</Text>
          </Card>
          <Card title="Card 2">
            <Text>Content of Card 2</Text>
          </Card>

        </ScrollView>
        <Text style={styles.text}>Some text here, don't mind me</Text>
        <Accordion title="Accordion 1">
          <Text>Content of Accordion 1</Text>
        </Accordion>
        <Accordion title="Accordion 2">
          <Text>Content of Accordion 2</Text>
        </Accordion>
        <Button title="Click Me" onPress={() => alert('Button clicked!')} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  horizontalScroll: {
    flexDirection: 'row',
    padding: 10
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
})
