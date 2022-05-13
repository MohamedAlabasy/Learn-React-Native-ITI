import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
// import { Card } from 'react-native-paper';

export default class Home extends React.Component {
    state = {

    }
    render() {
        return (
            <View style={style.mainContainer}>
                <View style={style.ImgContainer}>
                    <Image
                        style={style.splashIcon} source={{ uri: 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' }}
                    />
                </View>
                <View style={style.TextContainer}>
                    <Text style={style.title}>Title</Text>
                    <Text style={style.description}>Description</Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
    },
    ImgContainer: {
        width: 150,
        height: 150,
        backgroundColor: 'red'
    },
    TextContainer: {

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    description: {

    }
})