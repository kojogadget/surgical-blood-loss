'use client'
import { useEffect } from 'react'
import { useNavpageContext } from '@/features/NavBar/hooks/useNavpageContext'
import Nav from '@/features/NavBar/NavBar'

export default function Home() {
    const { setNavPage } = useNavpageContext()

    useEffect(() => {
        setNavPage('Dashboard')
    }, [])

    return (
        <Nav>
            <h1>Kirurgisk Blodtap</h1>
            <h2>Dashboard</h2>
        </Nav>
    )
}
