import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import {
    getAuth,
    createUserWithEmailAndPassword
} from 'firebase/auth';

import { doc, setDoc, getFirestore, getDoc } from 'firebase/firestore'


export default function Regist() {
    const _auth = getAuth()
    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [pwd, setPwd] = React.useState("")

    function onSignUp() {
        const firestore = getFirestore();

        createUserWithEmailAndPassword(_auth, email, pwd)
            .then((result) => {
                setDoc(doc(firestore, "users", _auth.currentUser.uid), {
                    email,
                    name
                });
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <View>
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
        </View>
    )

}

