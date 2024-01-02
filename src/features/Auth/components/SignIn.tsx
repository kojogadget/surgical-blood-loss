import Image from 'next/image'
import LoginForm from '@/features/Auth/components/LoginForm'
import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'
import logo from '@/assets/logo.svg'

export default function SignIn() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            {loading ? (
                <Transition
                    appear={true}
                    show={true}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="flex h-screen items-center justify-center">
                        <Image
                            className="mx-auto h-auto w-auto"
                            width={40}
                            height={40}
                            src={logo}
                            alt="Project logo"
                        />
                    </div>
                </Transition>
            ) : (
                <LoginForm />
            )}
        </>
    )
}
