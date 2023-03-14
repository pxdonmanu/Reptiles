import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <>
            <View style={styles.top}></View>

            <View style={styles.header}> 
                <Text style={styles.title}>REPTILES</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize:55,
    },
    top: {
        width: '100%',
        height: '5%',
        backgroundColor: '#3E9741',
    },
    header: {
        width: '100%',
        height: '13%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3E9741',
    },
});


