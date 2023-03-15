import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Header({name}) {
    return (
        <>
            <View style={styles.header}> 
                <Text style={styles.title}>{name}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize:55,
        color: '#eee',
        fontWeight: 'bold'
    },
    header: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3E9741',
    },
});


