import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native'
// import auth from '@react-native-firebase/auth';
import FooterComponents from '../Components/FooterComponents';


export default class Home extends React.Component {

    state = { news: [], resReady: 0 }

    componentDidMount() {
        fetch('https://egyptian-antiquities.com/en/wp-json/wp/v2/posts?per_page=5')
            .then((r) =>
                r.json()
            ).then((res) => {
                this.setState({ news: res, resReady: 1 })
            })

    }
    render() {
        return (
            <View>

                <ScrollView style={{ paddingBottom: 5, paddingTop: 5, marginBottom: 50 }}>
                    <StatusBar backgroundColor={'#3b5998'} barStyle="light-content" />
                    {/* <Button title="logout"
                    onPress={() => auth().signOut()} /> */}
                    {this.renderNews()}
                </ScrollView >
                <View style={style.btnContainer}>
                    <FooterComponents />
                </View>
            </View>
        )
    }

    renderNews() {
        if (this.state.resReady === 1) {
            return (
                this.state.news.map((news, i) => {
                    return (
                        <TouchableOpacity
                            key={i}
                            style={style.mainContainer}
                            onPress={() => {
                                this.props.navigation.navigate("SingleNews", { image: news.better_featured_image.source_url, title: news.title.rendered, desc: news.excerpt.rendered });
                            }}
                        >
                            <View>
                                <Image
                                    style={style.image} source={{ uri: news.better_featured_image.source_url }}
                                />
                            </View>
                            <View style={style.TextContainer}>
                                <Text style={style.title}>{news.title.rendered.substring(0, 20)}</Text>
                                <Text style={style.description}>{news.excerpt.rendered.substring(0, 200)}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }))
        } else {
            return (
                //                 <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
                <View style={{ justifyContent: 'center', alignItems: 'center', height: 600 }}>
                    <ActivityIndicator size="large" color="#4a5cD0" />
                </View>
            )
        }
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
    },
    btnContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
})