import React from 'react'
import { View, Text, Button } from 'react-native'
import { getAuth } from 'firebase/auth';
export default function Profile() {
    function onLogout() {
        getAuth().signOut()
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile</Text>
            <Button
                onPress={onLogout}
                title="Logout"
            />
        </View>
    )
}
