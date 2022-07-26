import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { connect } from 'react-redux/es/exports';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//https://oblador.github.io/react-native-vector-icons/
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import FeedScreen from './main/Feed';
import ProfileScreen from './main/Profile';
import AddScreen from './main/Add';


export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        const { currentUser } = this.props;
        console.log(currentUser)
        return (
            <Tab.Navigator>
                <Tab.Screen name="Feed" component={FeedScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                    headerShown: false,
                }} />
                <Tab.Screen name="Add" component={AddScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="camera" color={color} size={26} />
                    ),
                    headerShown: false,
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    ),
                    headerShown: false,
                }} />
            </Tab.Navigator>
        )
    }
}

const mapStateToPorps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch)

export default connect(mapStateToPorps, mapDispatchProps)(Main);