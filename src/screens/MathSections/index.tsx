import { useNavigation } from '@react-navigation/native'
import { Card, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { mathSections } from '../../constants/mental-math'
import { styles } from './styles'

const MathSections = () => {
  const navigation = useNavigation()

  const List = mathSections.map(({ title, text, type, value, body }, index) => (
    <View style={styles.item} key={`${title}+${index}`}>
      <Card style={styles.card} onPress={() => navigation.navigate('MathSection', { type, value, body })}>
        <Text category="h1" style={styles.title}>
          {title}
        </Text>
        <Text style={styles.text}>{text}</Text>
      </Card>
    </View>
  ))

  return (
    <ScrollView style={styles.wrapper}>
      <Layout style={styles.container} level="1">
        {List}
      </Layout>
    </ScrollView>
  )
}

export default MathSections
