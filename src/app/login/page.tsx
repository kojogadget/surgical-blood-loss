'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { useNavpageContext } from '@/features/NavBar/hooks/useNavpageContext'
import Nav from '@/features/NavBar/NavBar'
import logo from '@/assets/logo.png'
import LoginForm from '@/features/Auth/components/LoginForm'

export default function Login() {
    const { setNavPage } = useNavpageContext()

    useEffect(() => {
        setNavPage('')
    }, [])

    return (
        <Nav>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        className="mx-auto h-auto w-auto"
                        width={40}
                        height={40}
                        src={logo}
                        alt="Project logo"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Logg inn på din konto
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <LoginForm />
                </div>
            </div>
        </Nav>
    )
}
