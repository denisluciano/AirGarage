import React from 'react';
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';


function Profile({ navigation }) {
  return (
    <ScrollView >
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Garage')}
        >
          <Text> Editar dados </Text>
        </TouchableOpacity>
      </View>


    </ScrollView>
  )
}

export default Profile;
