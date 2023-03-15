import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BUTTONS = [
    "Cocodrilos",
    "Quelonios",
    "Squamatas",
    "Rinocefalos",
]

export default function Buttons() {
    const navigation = useNavigation();
    return (
        <View style={style.conteinerBtns}>

            {BUTTONS.map((item, index) => {
                return (
                    <TouchableOpacity
                        style={style.btn}
                        onPress={() => {
                            navigation.navigate(item)
                        }}
                        key={index}
                    >
                        <Text
                            style={style.btnTxt}
                        >{item}</Text>
                        {/* <Image
                    source={{ uri: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQaDJDdR5Pi4h9HboqLUsK8KDmXVYjP-GCDMShQxDJ5lLUql0n6v0ghLxNxt17BPrnx" }}
                    style={{ width: 200, height: 200, resizeMode: "contain" }}
                /> */}
                    </TouchableOpacity>
                )
            })}
        </View>

    )
}

const style = StyleSheet.create({
    conteinerBtns: {
        backgroundColor: '#C9FFC1',
        width: '100%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: "green",
        padding: 30,
        borderRadius: 50,
        marginVertical: 15
    },
    btnTxt: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    bottom:{
        width:'100%',
        height: '8%',
        backgroundColor: '#eee'
    }
});