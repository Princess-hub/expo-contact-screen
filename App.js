import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import Contact from './Components/Contact';

const App = () => {
  const contacts = [
    {name: "kofi Ofo",number: "024115931"},
    {name: "kofi ri",number: "024115930"},
    {name: "kofi Ofor",number: "024119301"},
    {name: "kofi i",number: "024159301"},
    {name: "kofi O",number: "02419301"},
    {name: "kofi ",number: "9-088909"},
    {name: "kofi s",number: "0241159300"}
  ]
  return (
    <View>
      <FlatList 
        data = {contacts}
        renderItem = {(item)=>{
          return <Text>{<Contact name={item.name} phone={item.number} />}</Text>
        }}
        keyExtractor = {(item) => item.number}
      />
    </View>
  );
}


export default App;
