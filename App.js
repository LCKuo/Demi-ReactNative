import { StatusBar } from 'expo-status-bar';
import { Component, React } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import LoginScreen from './components/auth/Login';
import RegisScreen from './components/auth/Register';


import { initializeApp } from 'firebase/app';

import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA8oLbM7gZhmfcrvBkaH3veddoVRR2w278",
  authDomain: "instagramtest-c5658.firebaseapp.com",
  projectId: "instagramtest-c5658",
  storageBucket: "instagramtest-c5658.appspot.com",
  messagingSenderId: "425803755133",
  appId: "1:425803755133:web:5df9c786250970deb04b14",
  measurementId: "G-DRCP34HC8Q"
};
initializeApp(firebaseConfig);

const Stack = createStackNavigator();


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loggedIn: false,
    }
  }

  componentDidMount() {
    const _auth = getAuth()
    onAuthStateChanged(_auth, user => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }




  render() {
    if (!this.state.loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading...</Text>
        </View>
      )
    }

    if (!this.state.loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    } else {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>User loggined</Text>
        </View>
      )
    }


  }
}

export default App
