'use client'
import { useEffect } from 'react'
import { useNavpageContext } from '@/features/NavBar/hooks/useNavpageContext'
import Nav from '@/features/NavBar/NavBar'
import SectionHeader from '@/components/SectionHeader'

export default function Home() {
    const { setNavPage } = useNavpageContext()

    useEffect(() => {
        setNavPage('Dashboard')
    }, [])

    return (
        <Nav>
            <SectionHeader>Dashboard</SectionHeader>
        </Nav>
    )
}
