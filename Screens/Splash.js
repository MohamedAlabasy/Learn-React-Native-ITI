import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator, StatusBar } from 'react-native'

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
                <StatusBar backgroundColor={'#000'} barStyle="dark-content" />
                {/* to control in Control StatusBar */}
                <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true} />
                <Image style={style.splashIcon} source={{ uri: 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' }}
                />
                <ActivityIndicator size={'large'} color={'#fff'} />
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
        backgroundColor: '#000'
    },
    splashIcon: {
        width: 250,
        height: 250
    }
})