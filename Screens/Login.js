import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'

export default function Login() {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);


    return (
        <View style={style.container}>
            <View style={style.inputContainer}>

                <Image
                    style={style.image}
                    source={require('../assets/mainImage.png')}
                />
                <TextInput
                    style={style.input}
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <TextInput
                    style={style.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>
            <View style={style.btnContainer}>
                <TouchableOpacity
                    onPress={() => {
                        // props.navigation.replace("Home");
                    }}
                    style={style.btn}
                >
                    <Text style={style.text}>Login</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
                    // onPress={() => {
                        //     this.props.navigation.navigate("SingUp");
                        // }}
                        style={style.btn}
                        >
                        <Text style={style.text}>Sing Up</Text>
                    </TouchableOpacity> */}
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
    },
    input: {
        width: '90%',
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingStart: 20,
        paddingEnd: 20,
        borderRadius: 10,
        borderColor: '#4a5cD0'

    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 30,
    },
    btnContainer: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 30,
    },
    btn: {
        backgroundColor: '#4a5cD0',
        borderRadius: 15,
        width: '90%',
        height: 50,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20
    }
})