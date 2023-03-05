import React, { Component } from 'react'
import {
    View, Text, StyleSheet,
    TextInput, TouchableOpacity, Image,
    Alert, Button
} from 'react-native'

export default class Welcome extends Component {

    naviagateToVerify = () => {
        this.props.navigation.navigate('Verify')
    }

    naviagateBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.text} >Login</Text>
                <Button style={styles.button} title='navigate' onPress={this.naviagateToVerify} />
                <Button style={styles.button} title='navigate back' onPress={this.naviagateBack} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    text: {
        color: 'black',
    },
    button: {
        marginTop: 20
    }
})