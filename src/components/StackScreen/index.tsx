import { createStackNavigator } from '@react-navigation/stack'
import { StackSreenProps } from './types'
import React from 'react'
import { useTheme } from '@ui-kitten/components'

const Stack = createStackNavigator()

const StackScreen = ({ screens }: StackSreenProps) => {
  const theme = useTheme()

  return (
    <Stack.Navigator>
      {
        Object.entries(screens).map(([name, screen]: any) => (
          <Stack.Screen
            key={name}
            name={screen.name}
            component={screen.component}
            options={{
              headerStyle: {
                backgroundColor: theme['background-basic-color-1']
              },
              headerTintColor: theme['text-basic-color'],
              ...screen.options
            }}
          />
        ))
      }
    </Stack.Navigator>
  )
}

export default StackScreen
