import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import AppStatusBar from '../Components/AppStatusBar ';

export default class SingleNews extends React.Component {
    state = {

    }
    render() {
        return (
            <ScrollView>
                <AppStatusBar />
                <View View style={style.mainContainer} >
                    <Image
                        style={style.image}
                        source={{ uri: 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' }}
                    />
                    <Text style={style.title}>What is Lorem Ipsum?</Text>
                    <Text style={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View>
            </ScrollView >
        )
    }
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
        margin: 10
    },
    description: {
        textAlign: 'center',
        width: '100%',
    }
})