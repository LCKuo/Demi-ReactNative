import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import {
    getAuth,
    createUserWithEmailAndPassword
} from 'firebase/auth';


export default function Regist() {
    const _auth = getAuth()
    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [pwd, setPwd] = React.useState("")

    function onSignUp() {
        createUserWithEmailAndPassword(_auth, email, pwd)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <View>
            <h1>Reg</h1>
            <TextInput
                placeholder='Name'
                onChangeText={setName}

            />

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
                onPress={onSignUp}
                title="sign up"
            />

            <h1>{email}</h1>
        </View>
    )

}

