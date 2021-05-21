import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components'
import React, { useEffect, useRef, useState } from 'react'

import { mathOperationTitles } from '../../constants/mental-math'
import { getRandomInteger } from '../../utils/get-random-integer'
import VirtualKeyboard from 'react-native-virtual-keyboard'
import { styles } from './styles'
import { getMathResult } from '../../utils/get-math-result'

const MathSection = ({ route }: any) => {
  const [variable, setVariable] = useState(0)
  const [result, setResult] = useState('')
  const [shouldUpdate, setShouldUpdate] = useState(true)
  const [isDanger, setIsDanger] = useState(false)
  const checkmarkIconRef = useRef<any>()

  const ChevronRightIcon = (props: any) => (
    <Icon name="chevron-right-outline" {...props} />
  )

  const TrashIcon = (props: any) => (
    <Icon name="trash-outline" {...props} />
  )

  const CheckmarkIcon = (props: any) => (
    <Icon
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
            size="large"
            />
            <Button
            accessoryLeft={ChevronRightIcon}
            onPress={() => setShouldUpdate(true)}
            style={styles.button}
            size="large"
            />
            <Button
            accessoryLeft={TrashIcon}
            onPress={() => setResult('')}
            style={styles.button}
            size="large"
            />
        </Layout>
      </Layout>
    </>
  )
}

export default MathSection
