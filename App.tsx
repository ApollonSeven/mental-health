/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { ApplicationProvider, Layout } from '@ui-kitten/components'
import React from 'react'
import MentalMath from './src/screens/MentalMath'
import * as eva from '@eva-design/eva'

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={{ flex: 1, justifyContent: 'center' }}>
        <MentalMath />
      </Layout>
    </ApplicationProvider>
  )
}

export default App
