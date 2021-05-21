/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components'
import React from 'react'
import * as eva from '@eva-design/eva'
import Navigation from './src/navigation'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

const App = () => {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={{ flex: 1, justifyContent: 'center' }}>
       <Navigation />
      </Layout>
    </ApplicationProvider>
    </>
  )
}

export default App
