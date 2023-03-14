import React, { createRef } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Buttons(){

    return (
        <View style={style.conteinerBtns}>
            
            <Button
                title="Cocodrilos"
                color="#3E9741"
                accessibilityLabel="Cocodrilos"
                style={style.btn1}
            />
            <Button
                title="Squamatas"
                color="#3E9741"
                accessibilityLabel="Squamatas"
                style={style.btn2}
            />
            <Button
                title="Rinocefalos"
                color="#3E9741"
                accessibilityLabel="Rinocefalos"
                style={style.btn3}
            />
            <Button
                title="Quelonios"
                color="#3E9741"
                accessibilityLabel="Quelonios"
                style={style.btn4}
            />
        </View>
    )
}

const style = StyleSheet.create({
    conteinerBtns: {
        backgroundColor: '#dad',
        width: '100%',
        height: '77%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});