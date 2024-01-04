'use client'
import { useEffect } from 'react'
import { useNavpageContext } from '@/features/NavBar/hooks/useNavpageContext'
import Nav from '@/features/NavBar/NavBar'
import SectionHeader from '@/components/SectionHeader'
import ButtonLink from '@/components/Buttons/ButtonLink'

export default function Home() {
    const { setNavPage } = useNavpageContext()

    useEffect(() => {
        setNavPage('Startside')
    }, [])

    return (
        <Nav>
            <SectionHeader>Startside</SectionHeader>
            <ButtonLink>Ny pasient</ButtonLink>
        </Nav>
    )
}
