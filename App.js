import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import ClickCount from './clickCount';
import CountClicker from './CountClicker'

export const number = React.createContext();
export default function App() {
  const [count,setCount]=useState(0);
  return (
    <View style={styles.container}>
      <number.Provider value={{count,setCount}}>
        <ClickCount></ClickCount>
        <CountClicker></CountClicker>
      </number.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



