import StackScreen from '../components/StackScreen'
import { mentalMathScreens } from '../constants/navigation'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackScreen
        screens={mentalMathScreens}
      />
    </NavigationContainer>
  )
}

export default Navigation
