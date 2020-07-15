import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  btnDetalhes:{
    backgroundColor:"#F4C20D",
    padding: 10,
    margin: 15,
    elevation: 3,
    borderRadius: 5,
    alignItems: "center"
  },
  containerAllInformation: {
    marginRight: 10,
    marginLeft: 10,
  },
  containerAvaliacao:{
    marginTop: 20,
    alignItems:"center"
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
  containerDescricao: {
    marginTop: 10
  },
  containerEndereco:{
    marginTop: 10
  },
  containerGarage:{
    flex: 1,
    backgroundColor:"#fff"
  },
  containerImageGarage: {
    alignItems: 'center',
    flex: 1,
  },
  containerInformation:{
    marginTop: 15,
  },
  containerInformationItems: {
    marginLeft: 5,
  },
  containerMaps:{
    flex:1,
    alignItems: "center",
    marginTop: 10
  },
  containerTitulo:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  headerCardComentary:{
    flex:1,
    flexDirection:"row",
    justifyContent: "space-between"

  },
  itemInformation:{
    flexDirection:"row",
    marginTop: 5,
  },
  Maps:{
    flex:1,
    width: 380,
    height:100
  },
  rateText: {

    fontSize: 50
  },
  textComentary:{
    marginLeft:9,
    marginTop:5
  },
  textEndereco: {
    fontSize: 15
  },
  textInformation:{
    fontSize: 15,
  },
  textItemInformation:{
    marginLeft: 8,

  },
  textTitle: {
    fontSize: 18,
    fontWeight:"bold",
  },
  tituloInformacoes:{
    fontWeight: "bold",
    fontSize:16,
    marginTop: 20,
  },
})

export default styles;
