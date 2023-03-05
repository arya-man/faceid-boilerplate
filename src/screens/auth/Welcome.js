import React, { Component } from 'react'
import {
    View, Text, StyleSheet,
    TextInput, TouchableOpacity, Image,
    Alert, Button
} from 'react-native'

export default class Welcome extends Component {

    naviagateToLogin = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.text} >Welcome</Text>
                <Button style={styles.button} title='navigate' onPress={this.naviagateToLogin} />
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