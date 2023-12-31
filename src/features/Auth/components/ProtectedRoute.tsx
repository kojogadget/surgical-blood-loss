'use client'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/config/firebase'
import NotSignedIn from '@/components/NotSignedIn'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const [user] = useAuthState(auth)

    return <>{user ? children : <NotSignedIn />}</>
}

export default ProtectedRoute
