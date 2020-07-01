import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  bottomBar: {
    height: 40,
    backgroundColor: "#F4C20D",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    // elevation: 5,
    // flex: 1,
  },
  containerCalendary: {
    marginTop: 15,
    marginLeft: 0,
    marginRight: 0,

  },
  containerDisponibilidade: {
    marginTop: 10,
    // marginLeft: 10,
    // marginRight: 10,
    flex: 1
  },
  textDisponibilidade: {
    fontSize: 20
  },

})


export default styles;
