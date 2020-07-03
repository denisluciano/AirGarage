import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  btnSubmit: {
    backgroundColor: '#F4C20D',
    width: 330,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  containerButton: {
    alignItems: "center",
  },
  containerInputs:{
    alignItems: "center",
  },
  containerSignUp:{
    backgroundColor: "#fff",
    justifyContent: "space-around",
    // alignContent: "center",
    flex: 1,
  },
  containerTextHeader:{
    alignItems: "center"
  },
  input: {
    backgroundColor: '#D5DDE0',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  textHeader:{
    fontSize: 18
  },
});

export default styles;

