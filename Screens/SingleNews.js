import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import AppStatusBarComponents from '../Components/AppStatusBarComponents';

export default function SingleNews({ navigation, route }) {
    const { image, title, desc } = route.params;

    return (
        <ScrollView>
            <StatusBar backgroundColor={'#3b5998'} barStyle="light-content" />
            <AppStatusBarComponents />
            <View View style={style.mainContainer} >
                <Image
                    style={style.image}
                    source={{ uri: image }}
                />
                <Text style={style.title}>{title}</Text>
                <Text style={style.description}>{desc}</Text>
            </View>
        </ScrollView >

    )
}

const style = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        padding: 10,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 25
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        margin: 10,
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        width: '100%',
    }
})