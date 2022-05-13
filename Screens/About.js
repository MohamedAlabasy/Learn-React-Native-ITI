import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native'

export default class About extends React.Component {
    render() {
        return (
            <View style={style.container}>
                {/* to control in Control StatusBar */}
                <Image
                    style={style.splashIcon}
                    source={require('../assets/splash.png')}
                />
                <ActivityIndicator size="large" color="#fff" style={{ marginTop: 30 }} />
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4a5cD0'
    },
    splashIcon: {
        width: 250,
        height: 250
    }
})