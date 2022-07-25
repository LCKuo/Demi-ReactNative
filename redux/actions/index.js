import { doc, getFirestore, getDoc } from 'firebase/firestore'

export function fetchUser() {
    async function getUser() {
        const firestore = getFirestore();
        const docRef = doc(firestore, "users", _auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    }
}