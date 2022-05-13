import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { StyleSheet, Image } from 'react-native'

export default class Onboard extends React.Component {
    state = {

    }
    render() {
        return (
            <Onboarding
                onSkip={() => {
                    this.props.navigation.replace("Home");
                }}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image style={style.image} source={{ uri: 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' }} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image style={style.image} source={{ uri: 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' }} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image style={style.image} source={{ uri: 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' }} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
        )
    }
}

const style = StyleSheet.create({

    image: {
        width: '80%',
        height: 300,
        borderRadius: 25
    }
})