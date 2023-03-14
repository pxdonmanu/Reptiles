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
            {/* <Button
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
            /> */}
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
    btn: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 50,
        marginVertical: 15
    },
    btnTxt: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
});