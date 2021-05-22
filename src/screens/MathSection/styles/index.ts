import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  inputs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
    paddingHorizontal: 20
  },
  input: {
    marginVertical: 5,
    minWidth: 80
  },
  inputDanger: {
    marginVertical: 5,
    minWidth: 80,
    borderColor: 'red'
  },
  textInput: {
    fontSize: 18,
    color: "#fff"
  },
  keyboard: {
    marginTop: 40
  },
  button: {
    marginTop: 20,
    marginHorizontal: 15
  }
})
