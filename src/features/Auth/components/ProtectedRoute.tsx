'use client'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/config/firebase'
import SignIn from './SignIn'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const [user] = useAuthState(auth)

    return <>{user ? children : <SignIn />}</>
}

export default ProtectedRoute
