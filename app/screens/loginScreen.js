const axios = require('axios');
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from '../assets/style';

export default class LoginScreen extends Component {
    constructor() {
        super()
        this.state = {
          username: "Suraj Kohli",
          password: "done",
          authorizationError: false
        }
    }

    handleClick = (navigate) => {
        console.log("Handling login API function");
        if( this.state.username === "Mylan Admin"){
            navigate("Admin");
        }
        else{
            navigate("Scan");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='username'
                    placeholderTextColor="gray"
                    value={this.state.username}
                    onChangeText={(value) => 
                    this.setState({username: value})
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder='password'
                    placeholderTextColor="gray"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(value) => 
                    this.setState({password: value})
                    }
                />
                <TouchableOpacity onPress={() => this.handleClick(this.props.navigation.navigate)}>
                    <Text style = {styles.buttonText}>
                        Sign In
                    </Text>
                </TouchableOpacity>
                { this.state.authorizationError ?
                <Text style={styles.error}>
                    Authorization Failed. Please try again!
                </Text>
                :<Text></Text>
                }
            </View>

        )
    }
}