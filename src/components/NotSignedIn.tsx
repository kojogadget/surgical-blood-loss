import LoginForm from '@/features/Auth/components/LoginForm'
import { useState, useEffect } from 'react'

export default function NotSignedIn() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <>
            {loading ? (
                <div className="px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Loading...
                        </h2>
                    </div>
                </div>
            ) : (
                <LoginForm />
            )}
        </>
    )
}
