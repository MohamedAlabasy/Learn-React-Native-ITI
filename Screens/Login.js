import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Login extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <View>

                </View>
                <View style={style.btnContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("SignUp");
                        }}
                        style={style.btn}
                    >
                        <Text style={style.text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Login");
                        }}
                        style={style.btn}
                    >
                        <Text style={style.text}>Sing Up</Text>
                    </TouchableOpacity>
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
    },
    btn: {
        backgroundColor: 'red',
        borderRadius: 15,
        width: 150,
        height: 50,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    }
})