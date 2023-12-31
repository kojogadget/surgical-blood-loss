'use client'
import { UserCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebase'

export default function NavProfile({ isMobile }: { isMobile?: boolean }) {
    const [user] = useAuthState(auth)

    return (
        <>
            <a
                href="#"
                onClick={() => signOut(auth)}
                className={
                    isMobile
                        ? ''
                        : 'flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800'
                }
            >
                {user ? (
                    <CheckCircleIcon
                        className="h-7 w-7 shrink-0"
                        aria-hidden="true"
                    />
                ) : (
                    <UserCircleIcon
                        className="h-7 w-7 shrink-0"
                        aria-hidden="true"
                    />
                )}
                <span className="sr-only">Your profile</span>
                {isMobile ? null : (
                    <span aria-hidden="true">
                        {user ? user?.email : 'Logg inn'}
                    </span>
                )}
            </a>
        </>
    )
}
