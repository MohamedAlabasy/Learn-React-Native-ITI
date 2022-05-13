import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class FooterComponents extends React.Component {


    render() {
        return (
            <View style={style.container}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("Google")
                    }}
                >
                    <Image
                        source={require('../assets/information.png')}
                        style={{ width: 28, height: 28 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL('whatsapp://send?text=hello this is Mohamed Alabasy From React Native App &phone=+201013066560');

                    }}
                >
                    <Icon
                        name='whatsapp'
                        color='#fff'
                        size={30}
                        style={{
                            marginEnd: 40,
                            marginStart: 40
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        alert('hel')
                    }}
                >
                    <Icon
                        name='home'
                        color='#fff'
                        size={30}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#4a5cD0',
        width: '100%',
        height: 50,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
})