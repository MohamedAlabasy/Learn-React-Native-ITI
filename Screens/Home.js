import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper';

export default class Home extends React.Component {
    state = {

    }
    render() {
        return (
            <ScrollView style={{ paddingBottom: 5, paddingTop: 5 }}>
                <TouchableOpacity
                    style={style.mainContainer}
                    onPress={() => {
                        this.props.navigation.navigate("SingleNews");
                    }}
                >
                    <View>
                        <Image
                            style={style.image} source={{ uri: 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' }}
                        />
                    </View>
                    <View style={style.TextContainer}>
                        <Text style={style.title}>What is Lorem Ipsum?</Text>
                        <Text style={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        margin: 5,
        padding: 5,
        backgroundColor: '#6542',
        borderRadius: 25
    },
    image: {
        width: 140,
        height: 190,
        borderRadius: 25
    },
    TextContainer: {
        marginStart: 10,
        marginEnd: 10,
        justifyContent: 'center'

    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5
    },
    description: {
        overflow: 'hidden',
        width: 185,
        height: 150
    }
})