import React, {useContext} from 'react';
import {number} from './App';
import { View,Text } from 'react-native';

export default function ClickCount(){
const {count} = useContext(number)
    return (
        <View>
            <Text>{count}</Text>
        </View>
    )
}
