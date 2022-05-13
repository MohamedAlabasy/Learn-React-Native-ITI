import React from 'react';
import { StatusBar, View } from 'react-native'

export default class AppStatusBar extends React.Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
            </View>
        )
    }
}