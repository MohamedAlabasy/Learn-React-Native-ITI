import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator, ActivityIndicatorProps } from 'react-native'

export default class Splash extends React.Component {

    goToHomeScreen() {
        setTimeout(() => {
            // To prevent back to splash again
            // this.props.navigation.replace("Home");
            this.props.navigation.replace("Onboard");
        }, 5000);
    }
    render() {
        return (
            <View style={style.container}>
                {/* to control in Control StatusBar */}
                <Image
                    style={style.splashIcon}
                    source={require('../assets/splash.png')}
                />
                <ActivityIndicator size="large" color="#0000ff" />
                {this.goToHomeScreen()}
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    splashIcon: {
        width: 250,
        height: 250
    }
})