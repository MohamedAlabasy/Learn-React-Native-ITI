import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ButtonComponents from '../Components/ButtonComponents';

export default class Login extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.btnContainer}>
                    <ButtonComponents btnText={'Login'} btnWidth={150} />
                    <ButtonComponents btnText={'Sing up'} btnWidth={150} />
                </View>
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
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    }
})