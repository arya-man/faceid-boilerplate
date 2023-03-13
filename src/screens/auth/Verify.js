import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button} from '@rneui/themed';;
import {
    View, Text, StyleSheet,
    TextInput, TouchableOpacity, Image,
    Alert
} from 'react-native'
import { mdiBorderBottom } from '@mdi/js';
export default class Welcome extends Component {

    naviagateBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container} >
            <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                    <Icon style={styles.ArrowButton} name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles.Heading} >Enter OTP code</Text>
            <Text style={styles.SubHeading} >Enter the OTP code we sent via SMS to your registered phone number.</Text>
            <Text style={styles.text}>OTP <Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput
                    style={styles.textInput}
                    keyboardType="phone-pad"
                    onChangeText={this.handleNumberChange}
                />
                <Button
                title="Verify"
                buttonStyle={{
                    marginTop:30,
                    backgroundColor: '#4A8A0E',
                    borderWidth: 2,
                    borderColor: '#4A8A0E',
                    borderRadius: 30,
                }}
                containerStyle={{
                    flex:1,
                    width: '90%',
                    height: 50,
                    marginHorizontal: "5%",
                }}
                titleStyle={{ fontWeight: 'bold' }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    text: {
        color: 'black',
    },
    button: {
        marginTop: 20

    },
    ArrowButton:{
        marginLeft: 20,
       color:'grey'
    },
    Heading: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 35,
        marginLeft: 25

    },
    SubHeading:{
        marginLeft: 25,
        fontSize: 16,
        marginRight:10
    },
    text:{
        marginTop:20,
        marginLeft: 25,
        fontSize: 14,
        fontWeight:'bold'

    },
    textInput:{

        fontWeight:'bold',
        borderBottomColor:'black',
        borderBottomWidth : 1.0,
        justifyContent:'center',
        width:"70%",
        alignItems: 'center',
        marginLeft:50
    }

})