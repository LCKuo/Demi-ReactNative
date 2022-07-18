import React from 'react'
import { Text, View, Button } from 'react-native'

export default function Landing({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
                title='註冊'
                onPress={() => navigation.navigate("Register")}
            />
            <Button
                title='登入'
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )
}
