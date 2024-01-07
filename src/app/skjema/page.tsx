'use client'
import { useEffect } from 'react'
import { useNavpageContext } from '@/features/NavBar/hooks/useNavpageContext'
import Nav from '@/features/NavBar/NavBar'
import SectionHeader from '@/components/SectionHeader'
import Form from '@/features/Data/Form'

export default function SkjermPage() {
    const { setNavPage } = useNavpageContext()

    useEffect(() => {
        setNavPage('Skjema')
    }, [])

    return (
        <Nav>
            <SectionHeader>Skjema</SectionHeader>
            <Form />
        </Nav>
    )
}
