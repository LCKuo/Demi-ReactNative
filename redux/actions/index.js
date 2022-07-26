import { USER_STATE_CHANGE } from '../constants';
import { doc, getFirestore, getDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

export function fetchUser() {
    return ((dispatch) => {
        const _auth = getAuth()
        const firestore = getFirestore();
        const docRef = doc(firestore, "users", _auth.currentUser.uid);
        getDoc(docRef)
            .then((snapShot) => {
                if (snapShot.exists) {
                    dispatch({ type: USER_STATE_CHANGE, currentUser: snapShot.data() })
                } else {
                    console.log('Snap not exit')
                }
            });

    })
}