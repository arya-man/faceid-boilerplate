
import React, { Component,useState } from 'react'
import {
    View, Text, StyleSheet,
    TextInput, TouchableOpacity, Image,
    Alert
} from 'react-native'
import { Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Welcome extends Component {
    

   
    handleNumberChange = (text) => {
        this.setState({ number: text });
      }

    handleSaveNumber = async() => {
        const { number } = this.state;
        console.log(number);
        fetch('http://192.168.1.4:8000/api/phone', {
            method: 'post',
            headers: {
            'Content-Type': 'application/json'
            },
           
            body: JSON.stringify({ number: number })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
            console.log("YESS");
        });

        this.props.navigation.navigate('Verify')

    }
    naviagateToVerify = () => {

        this.props.navigation.navigate('Verify')
    }

    naviagateBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container} >
            <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                    <Icon style={styles.ArrowButton} name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
                <Text style={styles.Heading} >Enter your phone number</Text>
                <Text style={styles.SubHeading} >You can log in or make an account if you’re new to the FlokX Face ID App.</Text>

                <Text style={styles.text}>Phone Number <Text style={{ color: 'red' }}>*</Text></Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType="phone-pad"
                    placeholder="+9123456789"
                    onChangeText={this.handleNumberChange}
                />
                <Button
                title="Continue"
                buttonStyle={{
                    fontSize:50,
                    backgroundColor: '#4A8A0E',
                    borderWidth: 2,
                    borderColor: '#4A8A0E',
                    borderRadius: 30,
                    position: 'absolute',
                    bottom: 15,
                    width:"90%"
                }}
                containerStyle={{
                    flex:1,
                    width: '90%',
                    height: 30,
                    marginHorizontal: "10%",
                    padding: 10,

                    // alignItems:'center'


                }}
                titleStyle={{ fontWeight: 'bold' }}
                onPress={this.handleSaveNumber}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        backgroundColor: 'white',
        
    },
    Heading: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 35,
        marginLeft: 25

    },
    text:{
        marginTop:20,
        marginLeft: 25,
        fontWeight: 'bold',
        fontSize: 16,

    },
    SubHeading:{
        marginLeft: 25,
        fontSize: 16,
        marginRight:10
    },
    ArrowButton:{
        marginLeft: 20,
        color:'grey'

    },
    textInput:{
        marginTop:10,
        marginLeft: 105,
        fontWeight:'bold',
        borderBottomColor:'black',
        borderBottomWidth : 1.0,
        padding:0,
        width:250
    }
    
})