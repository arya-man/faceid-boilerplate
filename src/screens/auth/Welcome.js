import React, { Component } from 'react'
import { Button, Text, Image } from '@rneui/themed';
import {
    View, StyleSheet, SafeAreaView,
    ActivityIndicator,
    TextInput, TouchableOpacity,
    Alert
} from 'react-native'

export default class Welcome extends Component {

    naviagateToLogin = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.imagecontainer}>
                    <Image
                        source={require('../../../assets/welcome.png')}
                        style={{width: 365, height: 214}}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>
                <View style={styles.welcometext}>
                    <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: 22, textAlign: 'center' }} >Welcome to FlokX Face ID App!</Text>
                    <Text style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: 14, textAlign: 'center' }}>Your go-to app for all things goats. We’re here to help with your most pressing problems.</Text>
                </View>
                <View style={styles.bottom}>

                    <Button
                        title="Login"
                        buttonStyle={{
                            backgroundColor: '#4A8A0E',
                            borderWidth: 2,
                            borderColor: '#4A8A0E',
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: '90%',
                            height: 50,
                            marginHorizontal: "5%",


                        }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={this.naviagateToLogin}
                    />
                    <Button
                        title="I'm new, sign me up"
                        buttonStyle={{
                            backgroundColor: '#fff',
                            text: '#4A8A0E',
                            borderWidth: 1,
                            borderColor: '#4A8A0E',
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: '90%',
                            height: 50,
                            marginHorizontal: "5%",


                        }}
                        titleStyle={{ fontWeight: 'light', color: "#4A8A0E" }}
                        onPress={this.naviagateToLogin}
                    />
                </View>
                <View style={styles.tnc}>
                    <Text style={{ fontFamily: 'Roboto', fontWeight: 100, fontSize: 12, textAlign: 'center' }}>
                        By logging in or registering, you agree to our Terms of Service and Privacy Policy.
                    </Text>

                </View>
                {/* <Button style={styles.button} title='Login' onPress={this.naviagateToLogin} /> */}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    tnc: {
        alignContent: 'center',
        paddingHorizontal: 54,
        paddingBottom: 10,
        marginTop: 20
    },
    imagecontainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 13
    },
    welcometext: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingBottom: 10
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    text: {
        color: 'black',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',

    }
})