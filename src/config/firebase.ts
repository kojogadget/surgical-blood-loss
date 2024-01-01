// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCZJ7KKh4U3QCw3dBH0u7n9_l4mIto62_A',
    authDomain: 'surgical-bloodloss.firebaseapp.com',
    projectId: 'surgical-bloodloss',
    storageBucket: 'surgical-bloodloss.appspot.com',
    messagingSenderId: '998952415209',
    appId: '1:998952415209:web:5d09c05f3eba33be216578',
    measurementId: 'G-H1SDYXF3EB',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const auth = getAuth(app)
