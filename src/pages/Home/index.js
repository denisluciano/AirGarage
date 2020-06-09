import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

function CardGaragem() {
  return(
    <View style={styles.cardGaragem}>
      <View style={ styles.containerImageGarage }>
        <Image
        source={require('../../assets/garagem.png')}
        />
      </View>
      <View style={styles.containerInfoCard}>
        <View style={styles.headerInfoCard}>
          <Text>Garagem completa</Text>

          <Text>s2</Text>
        </View>
      </View>
    </View>
  );
}


function Home({ navigation }) {
  return (
    <ScrollView
      style={styles.scrollViewHome}
      showsVerticalScrollIndicator={false}
    >
      <CardGaragem />
      <CardGaragem />
      <CardGaragem />
      <CardGaragem />
      <CardGaragem />
      <CardGaragem />
      <CardGaragem />
      <CardGaragem />
      <CardGaragem />
      <CardGaragem />
      <CardGaragem />
      <CardGaragem />
      <CardGaragem />
      <CardGaragem />
    </ScrollView>
  );
}

export default Home;


const styles = StyleSheet.create({
  cardGaragem: {
    flex: 1,
    flexDirection:"row", //Indica a direção dos items, se é vertical ou horizontal
    // justifyContent: "space-between",

    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight:10,
    backgroundColor: "#fff",
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    elevation: 5
  },
  scrollViewHome: {
    marginTop: 10,
  },
  containerInfoCard:{
    flex:1,

    backgroundColor: 'red',
  },
  containerImageGarage:{


    // backgroundColor: 'red',
  },
  headerInfoCard:{
    flexDirection:"row",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingRight: 5,
    paddingLeft: 5.
  },
});
