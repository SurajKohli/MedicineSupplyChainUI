import React, { Component } from 'react';
import {
    Text
} from 'react-native';
import styles from '../assets/style';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScanScreen extends Component {

    onSuccess(scanEvent) {
        const navigation = this.props.navigation;
        const data = scanEvent.data;
        navigation.navigate("Result", {'data': data});
    }

    render() {
        return (
          <QRCodeScanner
            reactivate={true}
            reactivateTimeout={3000}
            onRead={this.onSuccess.bind(this)}
            topContent={
                <Text style={styles.headline}>
                  Scan Batch QR code
                </Text>
              }
          />
        );
    }
}