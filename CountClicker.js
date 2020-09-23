import React, { useContext } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {number} from './App' 

export default function CountClicker(){
    const {count, setCount} = useContext(number)
    function Add(){
        setCount(count=>count+1)
    }
    function Deduct(){
        setCount(count=>count-1)
    }
    return (
        <View>
            <Button title='Add' onPress={Add}>Add</Button>
            <Button title='Deduct' onPress={Deduct}>Deduct</Button>
        </View>
    )
}