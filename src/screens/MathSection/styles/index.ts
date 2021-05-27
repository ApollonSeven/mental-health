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
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  },
  roundButton: {
    padding: 8,
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 2,
    marginHorizontal: 20
  },
  scoreBlock: {
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 60,
    height: 60,
    borderColor: '#fff',
    borderWidth: 2,
    marginHorizontal: 20
  },
  textInput: {
    fontSize: 19,
    color: '#fff'
  },
  keyboard: {
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 0
  },
  button: {
    marginTop: 20,
    marginHorizontal: 5
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modal: {
    width: '80%'
  }
})
