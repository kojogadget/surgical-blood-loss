'use client'
import { useEffect } from 'react'
import { useNavpageContext } from '@/features/NavBar/hooks/useNavpageContext'
import Nav from '@/features/NavBar/NavBar'
import SectionHeader from '@/components/SectionHeader'

export default function RapportPage() {
    const { setNavPage } = useNavpageContext()

    useEffect(() => {
        setNavPage('Rapport')
    }, [])

    return (
        <Nav>
            <SectionHeader>Rapport</SectionHeader>
        </Nav>
    )
}
