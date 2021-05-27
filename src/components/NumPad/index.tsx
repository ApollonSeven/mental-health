import React from 'react'
import { Card, Layout, Text } from '@ui-kitten/components'
import { numPadComponents } from '../../constants/common'
import { View } from 'react-native'
import { styles } from './styles'
import { NumPadProps } from './types'
import CustomIcon from '../../icons/CustomIcon'

const NumPad = ({
  onPress
}: NumPadProps) => {
  const Pads = numPadComponents.map(({ title, value, icon }, index) => {
    return (<View style={styles.item} key={`${title}-${index}`}>
            <Card appearance="filled" style={styles.card} onPress={() => onPress(value)}>
                {!icon
                  ? <Text category="h4" style={styles.title}>
                    {title}
                </Text>
                  : <CustomIcon name={icon} style={{ height: 35, tintColor: '#FFFFFF', width: 30 }} />
                }
            </Card>
        </View>)
  })

  return (
        <Layout style={styles.container}>
            {Pads}
        </Layout>
  )
}

export default NumPad
