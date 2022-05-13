import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

export default class ButtonComponents extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={[style.btn, { width: this.props.btnWidth }]}
            >
                <Text style={style.text}>{this.props.btnText}</Text>
            </TouchableOpacity>
        )
    }
}
const style = StyleSheet.create({
    btn: {
        backgroundColor: 'red',
        borderRadius: 15,
        width: 200,
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