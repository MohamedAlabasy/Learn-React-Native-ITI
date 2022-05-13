import React from 'react';
import { WebView } from 'react-native-webview';

export default class Google extends React.Component {


    render() {
        return <WebView source={{ uri: 'https://www.google.com/' }} />;
    }
}
