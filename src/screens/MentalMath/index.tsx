import { Card, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import { mathSections } from '../../constants/mental-math'
import { styles } from './styles'

const MentalMath = () => {
  const List = mathSections.map(({ title, text }, index) => (
    <View style={styles.item} key={`${title}+${index}`}>
      <Card style={styles.card}>
        <Text category="h1" style={styles.title}>
          {title}
        </Text>
        <Text style={styles.text}>{text}</Text>
      </Card>
    </View>
  ))

  return <Layout style={styles.container}>{List}</Layout>
}

export default MentalMath
