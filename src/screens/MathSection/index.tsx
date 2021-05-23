import { Button, Card, Input, Layout, Modal, Text, useTheme } from '@ui-kitten/components'
import React, { useEffect, useRef, useState } from 'react'

import { mathOperationTitles } from '../../constants/mental-math'
import { getRandomInteger } from '../../utils/get-random-integer'
import VirtualKeyboard from 'react-native-virtual-keyboard'
import { styles } from './styles'
import { getMathResult } from '../../utils/get-math-result'
import ChevronRightIcon from '../../icons/ChevronRightIcon'
import TrashIcon from '../../icons/TrashIcon'
import CustomIcon from '../../icons/CustomIcon'
import Markdown from 'react-native-markdown-display'

const buttonSize = "medium"

const MathSection = ({ route }: any) => {
  const [variable, setVariable] = useState(0)
  const [result, setResult] = useState('')
  const [shouldUpdate, setShouldUpdate] = useState(true)
  const [isDanger, setIsDanger] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const checkmarkIconRef = useRef<any>()
  const theme = useTheme()

  const CheckmarkIcon = (props?: any) => (
    <CustomIcon
        name="checkmark-outline"
        animation='shake'
        ref={checkmarkIconRef}
        {...props}
    />
  )

  const onFinish = () => {
    if (getMathResult({
      x: route.params.value,
      y: variable,
      operation: route.params.type
    }) === parseInt(result)) {
      setShouldUpdate(true)
      setResult('')
    } else {
      checkmarkIconRef?.current.startAnimation()
      setIsDanger(true)
    }
  }

  const onChange = (val: string) => {
    val !== 'back' ? setResult(result + val) : setResult(result.slice(0, -1))
    if (isDanger) { setIsDanger(false) }
  }

  useEffect(() => {
    if (shouldUpdate) {
      setVariable(getRandomInteger(10, 10000))
      setShouldUpdate(false)
    }
  }, [shouldUpdate])

  return (
    <>
      <Layout level="1" style={styles.container}>
        <Layout style={styles.inputs}>
          <Input
            value={route.params.value.toString()}
            size="large"
            textStyle={styles.textInput}
            disabled={true}
            style={styles.input}
          />
          <Text category="h5" style={{ paddingHorizontal: 10 }}>
            {mathOperationTitles[route.params.type]}
          </Text>
          <Input
            size="large"
            disabled={true}
            value={variable.toString()}
            textStyle={styles.textInput}
            style={styles.input}
          />
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
          <VirtualKeyboard
            color="white"
            pressMode="char"
            onPress={onChange}
          />
        </Layout>
        <Layout
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Button
            accessoryLeft={CheckmarkIcon}
            onPress={() => onFinish()}
            style={styles.button}
            size={buttonSize}
            />
            <Button
            accessoryLeft={(props) => (<CustomIcon {...props} name="info-outline" />)}
            onPress={() => setIsModalVisible(true)}
            style={styles.button}
            size={buttonSize}
            />
            <Button
            accessoryLeft={ChevronRightIcon}
            onPress={() => {
              setShouldUpdate(true)
              setResult("")
            }}
            style={styles.button}
            size={buttonSize}
            />
            <Button
            accessoryLeft={TrashIcon}
            onPress={() => setResult('')}
            style={styles.button}
            size={buttonSize}
            />
        </Layout>
        <Modal visible={isModalVisible} onBackdropPress={() => setIsModalVisible(false)}
        backdropStyle={styles.backdrop}
        style={styles.modal}
        >
        <Card disabled={true}>
        <Markdown 
          style={{
            body: {color: theme['text-basic-color'],},
            code_block: {backgroundColor: "rgba(0,0,0,0)", borderColor: "rgba(0,0,0,0)"},
          }}
        >
            {route.params.body}
          </Markdown>
        </Card>
      </Modal>
      </Layout>
    </>
  )
}


export default MathSection
