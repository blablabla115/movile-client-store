import React from 'react';
import {Image, Text, View} from 'react-native';

const VistaProdcuto = (props) => {
  return (
    <View>
      <Text>{props.name}</Text>
      <Image 
        source={props.image}
        style={{ width: 200, height: 200}}
      />
      <Text>S/. {props.precio}</Text>
      <Text>{props.descripcion}</Text>
    </View>
  )
}

export default VistaProdcuto;
