import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import styles from '../assets/style';
const axios = require('axios');
import addresses from '../assets/addressMapping';

export default class ResultScreen extends Component {
    constructor(){
        super();
        this.state={
            data: undefined,
            ctaMessage: undefined
        }
    }

    componentWillMount(){
        const navigation = this.props.navigation;
        // const data = navigation.getParam('data', undefined);
        const data = 1020;
        this.fetchBatchData(data)
    }

    fetchBatchData = (data) => {
        const postData = {
            "batchId": data,
            "sender": addresses["Suraj Kohli"]
        };
        // making API call
        axios({
            method: "post",
            url: "http://13.232.83.101:3000/getBatch",
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
                this.setState({'data':response.data});
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

    handleClickReceived() {
        const postData = {
            "batchId": 1020,
            "destinationCountry": "DUBAI",
            "sender": "0x3cae210bd930c608ce7dc6c2aad0c81cc6e03372"
        };
        // making API call
        axios({
            method: "post",
            url: "http://13.232.83.101:3000/updateBatchStatusToReceived",
            headers: {
              "Content-Type": "application/json",
            },
            data: postData
          })
          .then (response => {
            console.log(" API Success")
            if (response.status === 200 ){
                console.log(response);
                console.log(response.data);
                this.setState({'ctaMessage': "Received status has been updated in the batch"});
            }
            else{
              throw "Request resulted in NOT 200";
              this.setState({'ctaMessage': "Received status has been updated in the batch"});
            }
          })
          .catch(error => {
            console.log(" API Failed")
            console.log(error);
            this.setState({'ctaMessage': "Problem in batch"});
          });
    }

    handleClickDispatched() {
        const postData = {
            "batchId": 1020,
            "destinationCountry": "DUBAI",
            "sender": "0x3cae210bd930c608ce7dc6c2aad0c81cc6e03372"
        };
        // making API call
        axios({
            method: "post",
            url: "http://13.232.83.101:3000/updateBatchStatusToDispatched",
            headers: {
              "Content-Type": "application/json",
            },
            data: postData
          })
          .then (response => {
            console.log(" API Success")
            if (response.status === 200 ){
                console.log(response);
                console.log(response.data);
                this.setState({'ctaMessage': "Dispatch status has been updated in the batch"});
            }
            else{
              throw "Request resulted in NOT 200";
            this.setState({'ctaMessage': "Problem in batch"});
            }
          })
          .catch(error => {
            console.log(" API Failed")
            console.log(error);
            this.setState({'ctaMessage': "Problem in batch"});
          });
    }

    render() {
        return (
            <View>
            {
            this.state.data
            ?
                this.state.data && this.state.data.batchId!=0
                ?
                <View>
                    <Text>Please find details for batch with ID:  {this.state.data.batchId} </Text>
                    <View>
                    {
                            Object.keys(this.state.data).map((element) => {
                                return (
                                    <View key={element} style={styles.dataRow}>
                                        <Text style={styles.dataText}>{element}</Text>
                                        <Text style={styles.dataTextRight}>{this.state.data[element]}</Text>
                                    </View>
                                );
                            })
                    }
                    </View>
                    <View>
                    {
                    this.state.data.status == 0 || this.state.data.status == 2
                    ?
                        <TouchableOpacity onPress={() => this.handleClickReceived()}>
                            <Text style = {styles.buttonText}>
                                Received in good condition
                            </Text>
                        </TouchableOpacity>
                    :
                        <TouchableOpacity onPress={() => this.handleClickDispatched()}>
                            <Text style = {styles.buttonText}>
                                Dispatch 
                            </Text>
                        </TouchableOpacity>
                    }
                        <Text>{this.state.ctaMessage}</Text>
                    </View>
                </View>
                :
                <View>
                    <Text style={styles.error}>Batch Id DOES NOT exist in the system</Text>
                </View>                
            :
            <View>
                <Text style={styles.headline}>Batch Data is being fetched...</Text>
            </View>
            }
            </View>
        );
    }
}