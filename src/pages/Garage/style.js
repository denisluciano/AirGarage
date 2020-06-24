import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerImageGarage: {
    alignItems: 'center',
    flex: 1,
  },
  headerCardComentary:{
    flex:1,
    flexDirection:"row",
    justifyContent: "space-between"

  },
  containerCardComentary:{
    flex:1,
    padding:10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#fff",
    elevation: 3
  },
  textComentary:{
    marginLeft:9,
    marginTop:5
  }
})

export default styles;
