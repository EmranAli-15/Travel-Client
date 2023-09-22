import app from '../../firebase/firebase.config'
import {
    signOut,
    getAuth,
    updateProfile,
    signInWithPopup,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app);

export {
    auth,
    signOut,
    updateProfile,
    signInWithPopup,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
}