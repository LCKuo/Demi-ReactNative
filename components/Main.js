import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { connect } from 'react-redux/es/exports';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions';

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        const { currentUser } = this.props;
        console.log(currentUser)
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>User loggined</Text>
            </View>
        )
    }
}

const mapStateToPorps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch)

export default connect(mapStateToPorps, mapDispatchProps)(Main);