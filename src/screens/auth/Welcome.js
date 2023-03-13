/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Button, Text, Image} from '@rneui/themed';
import RadioButton from 'react-native-radio-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      selectedLaunguage: 'English',
      languages: [
        {title: 'English'},
        {title: 'Tamil'},
        {title: 'Telugu'},
        {title: 'Kanadda'},
      ],
    };
  }
  toggle = () => {
    this.setState({isModalVisible: false});
  };
  generatePopUP = () => {
    return (
      <View style={styles.isModalVisibleBackground}>
        <View style={styles.isModalVisible}>
          <View style={styles.closeIconContainer}>
            <TouchableOpacity
              onPress={() => {
                this.setState({isModalVisible: false});
              }}>
              <Icon name="close-outline" size={30} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.isModalVisibleHeading}> Change Language</Text>
            <Text style={styles.isModalVisibleSubheading}>
              Which language do you prefer?
            </Text>
          </View>
          <View style={styles.languageContainer}>
            {this.state.languages.map(language => {
              return (
                <View key={language.title}>
                  <View style={styles.language}>
                    <Text style={styles.languageText}>{language.title}</Text>
                    <RadioButton
                      isSelected={
                        this.state.selectedLaunguage === language.title
                      }
                      onPress={() =>
                        this.setState({
                          selectedLaunguage: language.title,
                        })
                      }
                      innerColor={'#4A8A0E'}
                      outerColor={'#4A8A0E'}
                    />
                  </View>
                  <View style={styles.line} />
                </View>
              );
            })}
          </View>
          <Button
            title={`Continue in ${this.state.selectedLaunguage}`}
            buttonStyle={{
              backgroundColor: '#4A8A0E',
              borderWidth: 2,
              borderColor: '#4A8A0E',
              borderRadius: 30,
            }}
            containerStyle={{
              width: '90%',
              height: 50,
              marginHorizontal: '5%',
            }}
            titleStyle={{fontWeight: 'bold'}}
            onPress={this.toggle}
          />
        </View>
      </View>
    );
  };
  naviagateToLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.headcontainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../../assets/faceid-logo.png')}
                style={{width: 30, height: 30, borderRadius: 15}}
                PlaceholderContent={<ActivityIndicator />}
              />
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  fontSize: 16,
                  padding: 8,
                }}>
                FACE ID
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                borderWidth: 1,
                borderColor: '#EFEEEF',
                paddingHorizontal: 13,
                paddingVertical: 8,
              }}
              activeOpacity={0.9}
              onPress={() => {
                this.setState({isModalVisible: true});
              }}>
              <Image
                source={require('../../../assets/translate.png')}
                style={{
                  width: 13,
                  height: 12,
                  marginRight: 7,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: 'grey',
                }}>
                {this.state.selectedLaunguage}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}

        <View style={styles.imagecontainer}>
          <Image
            source={require('../../../assets/welcome.png')}
            style={{width: 365, height: 214, alignContent: 'center'}}
            PlaceholderContent={<ActivityIndicator />}
          />
          <View style={styles.welcometext}>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontWeight: '700',
                fontSize: 22,
                textAlign: 'center',
              }}>
              Welcome to FlokX Face ID App!
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontWeight: '400',
                fontSize: 14,
                textAlign: 'center',
              }}>
              Your go-to app for all things goats. We’re here to help with your
              most pressing problems.
            </Text>
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
              marginHorizontal: '5%',
            }}
            titleStyle={{fontWeight: 'bold'}}
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
              marginHorizontal: '5%',
            }}
            titleStyle={{fontWeight: 'light', color: '#4A8A0E'}}
            onPress={this.naviagateToLogin}
          />
        </View>
        <View style={styles.tnc}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontWeight: 100,
              fontSize: 12,
              textAlign: 'center',
            }}>
            By logging in or registering, you agree to our Terms of Service and
            Privacy Policy.
          </Text>
        </View>
        {this.state.isModalVisible && this.generatePopUP()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  tnc: {
    alignContent: 'center',
    paddingHorizontal: 54,
    paddingBottom: 10,
    marginTop: 20,
  },
  headcontainer: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagecontainer: {
    flex: 1,
    alignSelf: 'center',
    paddingTop: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  welcometext: {
    paddingHorizontal: 30,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  isModalVisibleBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  isModalVisible: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },
  languageContainer: {
    width: '90%',
    marginLeft: 20,
  },
  language: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    height: 1,
    backgroundColor: 'black',
  },
  isModalVisibleBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  isModalVisible: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  languageContainer: {
    width: '90%',
    marginLeft: 20,
  },
  language: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  languageText: {
    fontSize: 16,
    fontWeight: 600,
    color: 'black',
    marginBottom: 18,
    marginTop: 15,
  },
  line: {
    height: 1,
    backgroundColor: '#BDBDBC',
  },
  isModalVisibleHeading: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 27,
    color: 'black',
    fontWeight: 700,
    marginBottom: 5,
  },
  isModalVisibleSubheading: {
    fontSize: 14,
    fontWeight: 400,
    marginLeft: 20,
    marginBottom: 47,
    color: '#545454',
  },
  closeIconContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    top: -74,
    right: 25,
    height: 53,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  closeIcon: {color: 'black'},
  translateLogo: {width: 13, height: 12, marginRight: 7},
});
