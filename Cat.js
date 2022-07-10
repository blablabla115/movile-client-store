import React, { useState } from 'react'; // es para poder usar JSX
import { Text, TextInput, View, Image, Button } from 'react-native';

const getFullName = (firstName, lastName, surnames) => {
  return firstName + " " + lastName + " " + surnames;
}
const Cat = (props) => {

  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        Hello, I am {route.params.name}, And I am { isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={ () => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={ isHungry ? "Pour me some milk, please!" : "Thank You!"}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat name="Maru"/>
      <Cat name="Chumusque"/>
      <Cat name="Garfield"/>
      <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
      <Text>I'm your cat</Text>
    </View>
  );
};

const pizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        placeholder="Type text here"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text>
        { text.split(" ").map((word) => word && "🍕").join(" ")}
      </Text>
    </View>
  )
}

const Cat2 = ({ navigation, route }, props) => {
  return (
    <View>
      <Text>I'm a cat, My name is {route.params.name}</Text>
      <Text>{props.color}</Text>
    </View>
  )
}

export default Cat2; 




