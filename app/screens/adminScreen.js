import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import styles from '../assets/style';
import addresses from '../assets/addressMapping';
const axios = require('axios');

export default class AdminScreen extends Component {
    constructor(){
        super();
        this.state={
            data: undefined
        }
    }
    createNewBatch = (data) => {
        const postData = {
            "batchId": data,
            "sourceCountry": "India",
            "destinationCountry": "DUBAI",
            "numberOfMedicines": 50,
            "startdate": "13/10/2018",
            "enddate": "15/10/2018",
            "sender": "0xd8cdc7ef29e7c7912d04742359e4bc02806e9629"
        };
        // making API call
        axios({
            method: "post",
            url: "http://13.232.83.101:3000/createBatch",
            headers: {
              "Content-Type": "application/json",
            },
            data: postData
          })
          .then (response => {
            console.log("Get Batch API Success")
            if (response.status === 200 ){
                console.log(response);
                console.log(response.data);
                this.setState({'data':response.data.tx});
            }
            else{
              throw "Request resulted in NOT 200";
            }
          })
          .catch(error => {
            console.log("Get Batch API Failed")
            console.log(error);
          });
    }

    handleClick(scanEvent) {
        // change this logic to create a new batch ID number
        const data = 1020;
        this.createNewBatch(data)
    }

    render() {
        return (
            <View>
                <Text style={styles.headline}>Welcome, Mylan Admin!</Text>
                <TouchableOpacity onPress={() => this.handleClick()}>
                    <Text style = {styles.buttonText}>
                        Create a new Batch
                    </Text>
                </TouchableOpacity>
                <View>
                {
                !this.state.data
                ?
                <Text></Text>
                :
                <Text> A new batch is created in the blockchain with ID : {this.state.data}</Text>
                }
                </View>
            </View>
        );
    }
}