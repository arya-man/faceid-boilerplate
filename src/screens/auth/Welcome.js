import React, { Component } from 'react'
import { Button, Text, Image } from '@rneui/themed';
import { mdiTranslate } from '@mdi/js';
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
                <View>
                    <View style={styles.headcontainer}>
                        <Image
                            source={require('../../../assets/faceid-logo.png')}
                            style={{ width: 30, height: 30, borderRadius: 15 }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 16, padding: 8 }}>FACE ID</Text>
                        {/* <View style={{alignItems: 'flex-end'}}> */}

                        <Button
                            title="HOME"
                            icon={{
                                name: 'g-translate',
                                size: 11,
                                color: '#545454',

                            }}
                            iconContainerStyle={{ marginRight: 10 }}
                            buttonStyle={{
                                backgroundColor: '#fff',
                                text: '#545454',
                                borderWidth: 1,
                                borderColor: '#545454',
                                borderRadius: 30,
                            }}
                            containerStyle={{
                                marginLeft: 'auto',
                                width: 90,
                                height: 35,
                            }}
                            titleStyle={{ fontSize: 12, fontWeight: '300', color: "#545454" }}
                        />
                    </View>
                </View>
                {/* </View> */}

                <View style={styles.imagecontainer}>
                    <Image
                        source={require('../../../assets/welcome.png')}
                        style={{ width: 365, height: 214, alignContent: 'center' }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <View style={styles.welcometext}>
                        <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: 22, textAlign: 'center' }} >Welcome to FlokX Face ID App!</Text>
                        <Text style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: 14, textAlign: 'center' }}>Your go-to app for all things goats. We’re here to help with your most pressing problems.</Text>
                    </View>
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
    headcontainer: {
        padding: 12,
        flexDirection: 'row'
    },
    imagecontainer: {
        flex: 1,
        alignSelf: 'center',
        paddingTop: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'

    },
    welcometext: {
        // flex: 1,
        // alignContent: 'center',
        // justifyContent: 'center',
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