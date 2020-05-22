import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

function CardGaragem() {
  return(
    <View style={styles.cardGaragem}>
      <Text>Home!</Text>
    </View>
  );
}


function Home({ navigation }) {
  return (
    <ScrollView style={styles.scrollViewHome}>
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
    flex: 0.5,
    padding: 30,
    backgroundColor: "#fff",
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    //android
    elevation: 5
  },
  scrollViewHome: {
    marginTop: 10,
  }
});
