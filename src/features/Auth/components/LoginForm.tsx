import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/config/firebase'
import { useRouter } from 'next/navigation'
import logo from '@/assets/logo.svg'
import ButtonLarge from '@/components/Buttons/ButtonLarge'
import Label from '@/components/Form/Label'
import Input from '@/components/Form/Input'

export default function LoginForm() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)

    const router = useRouter()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(email, password)
            setEmail('')
            setPassword('')
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image
                    className="mx-auto h-20 w-auto"
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
                <form
                    className="space-y-6"
                    onSubmit={handleLogin}
                    action="#"
                    method="POST"
                >
                    <div>
                        <Label htmlFor="email" label="E-post" />
                        <Input
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password" label="Passord" />
                            <div className="text-sm">
                                <Link
                                    href="#"
                                    className="font-semibold text-primary hover:text-primaryDark"
                                >
                                    Glemt passord?
                                </Link>
                            </div>
                        </div>
                        <Input
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <ButtonLarge type="submit">Logg inn</ButtonLarge>
                    </div>
                </form>
            </div>
        </div>
    )
}
