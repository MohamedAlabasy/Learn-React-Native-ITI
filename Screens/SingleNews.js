import React from 'react';
import { View, Image, StyleSheet } from 'react-native'

export default class Splash extends React.Component {

    render() {
        return (
            <View style={style.container}>

            </View>
        )
    }

}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    splashIcon: {
        width: 250,
        height: 250
    }
})