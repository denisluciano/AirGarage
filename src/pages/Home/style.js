import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  adressInfo:{
    alignItems: "center",
    flex: 1,
  },
  bottomInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnDetalhes: {
    backgroundColor: "#f4c20d",
    borderRadius: 4,
    paddingBottom: 2,

    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
  },
  cardGaragem: {
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 5,
    flex: 1,
    flexDirection:"row", //Indica a direção dos items, se é vertical ou horizontal
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    paddingLeft: 10,
    paddingRight:10,
    paddingBottom: 15,
    paddingTop: 15,
  },
  containerImageGarage:{

  },
  containerInfo:{
    flex:1,
    // backgroundColor: 'red',
    justifyContent: "space-between",
  },
  headerInfo:{
    flexDirection:"row",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingTop: 5,
    paddingRight: 5,

  },
  rateInfo:{
    flexDirection:'row',

  },
  scrollViewHome: {
    marginTop: 10,
  },
  screen: {
    flex: 1,
    marginTop:7,
  },
  searchBar: {
    flex: 1,
    height: 40,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  searchContainer:{
    backgroundColor:'#fff',
    borderRadius: 7,
    elevation: 2,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight:10,
  },
  searchIcon: {
    padding: 10,
  },
  textAdress:{
    color:'#666',
    fontSize:14
  },
  textDetalhes: {},
  textTitle: {
    fontSize: 16,
  },
  textValue:{
    fontSize: 18,
  },

  valueInfo:{
    flex: 1,
    alignItems: "center",


  },

});

export default styles;
