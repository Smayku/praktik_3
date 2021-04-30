import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Select} from 'react-native';
import Constants from 'expo-constants';

import Calculate from './compute';

export default function App() {

  const [A, setApoint] = useState(" ");
  const [B, setBpoint] = useState(" ");
  const [answer, setAnswer] = useState(" ");

  const [result, setResult] = useState();

  const [text, setText] = useState("Выберите треугольник");
  const [text1, setText1] = useState(" ");
  const [a, setA] = useState("?=");
  const [b, setB] = useState("?=");

  const [switchText, setSwitchText] = useState(false);

  function SwitchText(){
      setSwitchText(!switchText);
  }

  function ChangeText(){

if (!switchText)
{
      setText("Узнать прощадь прямоугольного");
      setText1("Введите стороны равностороннего △:");
      setA('a=');
      setB('h=');
      setSwitchText(true)
      SwitchText();
}else{
  setText("Узнать прощадь равностороннего");
      setText1("Введите стороны прямоугольного △:");
      setA('a=');
      setB('b=');
      SwitchText();
}   
  }

  function SendNum() {
      setResult(Calculate(A, B, answer, switchText));
  }
  return (
  <View style={styles.container}>
  <View>
  <Text> Выбор решения треугольника:</Text>
  <Button title={text} onPress={ChangeText}/>
  <Text>{text1}</Text>
  <View style={styles.inpitContainer}>
  <Text>{a}</Text>
  <TextInput style={styles.textInput} onChangeText={setApoint}/>
  <Text>{b}</Text>
  <TextInput style={styles.textInput} onChangeText={setBpoint}/>
  </View>
  <Button title="Решить" onPress={SendNum}/>
  <Text> Площадь треугольника: {result}</Text>
  </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    backgroundColor: '#3cd6cc',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  wrap: {
    justifyContent: 'space-evenly'
  },
  inpitContainer: {
    flexDirection: 'row',
    padding: 9,
    margin: 4,
  },
  textInput: {
    borderWidth: 1,
    width: '38%',
    marginHorizontal: 4,
  },
});