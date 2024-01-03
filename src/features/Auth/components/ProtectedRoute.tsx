'use client'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/config/firebase'
import CheckSignIn from './CheckSignIn'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const [user] = useAuthState(auth)

    return <>{user ? children : <CheckSignIn />}</>
}

export default ProtectedRoute
