/**
 * Skylog `components/screens/Profile.tsx`
 * Profile page
 */

import { StyleSheet, Text, View } from 'react-native'

import Card from '../Card'
import Button from '../Button'
import AccordionLink from '../AccordionLink'
import BorderlessAccordion from '../BorderlessAccordion'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>John Doe</Text>
        <Text style={{ fontSize: 18, color: '#666' }}>Pilot ID: 123456</Text>
        <Text style={{ fontSize: 18, color: '#666' }}>Total Flight Hours: 150.0</Text>
        <Text style={{ fontSize: 18, color: '#666' }}>Join date: 2023-01-01</Text>
      </Card>
      <BorderlessAccordion title="Profile Settings">
        <AccordionLink text="Edit Profile" icon="user" onPress={() => {}} />
        <AccordionLink text="Change Password" icon="lock" onPress={() => {}} />
        <AccordionLink text="Privacy Settings" icon="shield" onPress={() => {}} />
      </BorderlessAccordion>
      <BorderlessAccordion title="Flight Preferences">
        <AccordionLink text="Preferred Aircraft" icon="plane" onPress={() => {}} />
        <AccordionLink text="Flight Hours Goal" icon="clock" onPress={() => {}} />
        <AccordionLink text="Notifications" icon="bell" onPress={() => {}} />
      </BorderlessAccordion>
      <BorderlessAccordion title="Account Settings">
        <AccordionLink text="Linked Accounts" icon="link" onPress={() => {}} />
        <AccordionLink text="Subscription Plan" icon="credit-card" onPress={() => {}} />
        <AccordionLink text="Delete Account" icon="trash" onPress={() => {}} />
      </BorderlessAccordion>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
