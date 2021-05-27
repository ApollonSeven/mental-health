import {
  Card,
  Input,
  Layout,
  Modal,
  Text,
  useTheme
} from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import { mathOperationTitles } from '../../constants/mental-math'
import { getRandomInteger } from '../../utils/get-random-integer'
import { styles } from './styles'
import { getMathResult } from '../../utils/get-math-result'
import Markdown from 'react-native-markdown-display'
import NumPad from '../../components/NumPad'
import { pallette } from '../../constants/pallette'
import CustomIcon from '../../icons/CustomIcon'
import { Pressable, View } from 'react-native'

const MathSection = ({ route }: any) => {
  const [variable, setVariable] = useState(0)
  const [result, setResult] = useState('')
  const [shouldUpdate, setShouldUpdate] = useState(true)
  const [isDanger, setIsDanger] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [score, setScore] = useState(0)
  const theme = useTheme()

  const onFinish = () => {
    if (
      getMathResult({
        x: route.params.value,
        y: variable,
        operation: route.params.type
      }) === parseInt(result)
    ) {
      setShouldUpdate(true)
      setScore(score + 1)
      setResult('')
    } else {
      setIsDanger(true)
    }
  }

  const onChange = (val: string) => {
    switch (val) {
      case 'back':
        setResult(result.slice(0, -1))
        break
      case 'ok':
        onFinish()
        break
      default:
        setResult(result + val)
        break
    }
    if (isDanger) {
      setIsDanger(false)
    }
  }

  const onClear = () => {
    setShouldUpdate(true)
    setScore(0)
  }

  useEffect(() => {
    if (shouldUpdate) {
      setVariable(getRandomInteger(10, 10000))
      setShouldUpdate(false)
    }
  }, [shouldUpdate])

  return (
    <Layout level="1" style={styles.container}>
      <View style={styles.header}>
      <Pressable
          android_ripple={{
            color: '#000',
            radius: 20
          }}
          style={styles.roundButton}
          onPress={() => onClear()}
          >
          <CustomIcon
            name="trash-outline"
            style={{ height: 20, tintColor: '#FFFFFF', width: 20 }}
          />
        </Pressable>
        <View style={styles.scoreBlock}>
          <Text category="h4">{score}</Text>
        </View>
        <Pressable
          android_ripple={{
            color: '#000',
            radius: 20
          }}
          style={styles.roundButton}
          onPress={() => { setIsModalVisible(true) }}
          >
          <CustomIcon
            name="question-mark-outline"
            style={{ height: 20, tintColor: '#FFFFFF', width: 20 }}
          />
        </Pressable>
      </View>
      <Layout style={styles.inputs}>
        <Text category="h5">{route.params.value.toString()}</Text>
        <Text category="h5" style={{ paddingHorizontal: 10 }}>
          {mathOperationTitles[route.params.type]}
        </Text>
        <Text category="h5">{variable.toString()}</Text>
        <Text category="h5" style={{ paddingHorizontal: 10 }}>
          =
        </Text>
        <Input
          size="large"
          value={result}
          textStyle={styles.textInput}
          disabled
          style={!isDanger ? styles.input : styles.inputDanger}
        />
      </Layout>
      <Layout style={styles.keyboard}>
        <NumPad onPress={onChange} />
      </Layout>
      <Modal
        visible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        backdropStyle={styles.backdrop}
        style={styles.modal}>
        <Card disabled={true}>
          <Markdown
            style={{
              body: { color: theme['text-basic-color'] },
              code_block: {
                backgroundColor: pallette.transparent,
                borderColor: pallette.transparent
              }
            }}>
            {route.params.body}
          </Markdown>
        </Card>
      </Modal>
    </Layout>
  )
}

export default MathSection
