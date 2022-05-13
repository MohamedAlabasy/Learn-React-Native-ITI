import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { StyleSheet, Image } from 'react-native'
import AppStatusBar from '../Components/AppStatusBar ';

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
                        image: <Image style={style.image} source={require('../assets/onboard1.png')} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image style={style.image} source={require('../assets/onboard2.png')} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image style={style.image} source={require('../assets/onboard3.png')} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    }
                ]}
            />
        )
    }
}

const style = StyleSheet.create({

    image: {
        width: '80%',
        height: 250,
        borderRadius: 25
    }
})