import React from 'react'
import {Text, View, Button} from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Ver los gatos"
        onPress={() => {
          console.log("viendo a los gatos")
          navigation.navigate('Cat', { name: 'Chumusque'})
        }}
      />
      <Button 
        title="lista de productos"
        onPress={() => {
          navigation.navigate('listProducts')
        }}
      />
    </View>
  );
};

export default HomeScreen;
