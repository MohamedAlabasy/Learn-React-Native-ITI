import React from 'react';
import { StatusBar, View } from 'react-native'

export default function AppStatusBarComponents() {
    return (
        <View>
            <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
        </View>
    )
}