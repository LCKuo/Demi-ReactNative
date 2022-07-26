import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';


export default function Login() {
    const _auth = getAuth()
    const [email, setEmail] = React.useState("")
    const [pwd, setPwd] = React.useState("")

    function onLogin() {
        signInWithEmailAndPassword(_auth, email, pwd)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <View>
            <TextInput
                placeholder='email'
                onChangeText={setEmail}
            />

            <TextInput
                placeholder='password'
                secureTextEntry={true}
                onChangeText={setPwd}
            />

            <Button
                onPress={onLogin}
                title="Login"
            />
        </View>
    )

}

