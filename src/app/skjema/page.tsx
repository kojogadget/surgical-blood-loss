'use client'
import { useEffect } from 'react'
import { useNavpageContext } from '@/features/NavBar/hooks/useNavpageContext'
import Nav from '@/features/NavBar/NavBar'
import DataForm from '@/components/DataForm'
import SectionHeader from '@/components/SectionHeader'

export default function SkjermPage() {
    const { setNavPage } = useNavpageContext()

    useEffect(() => {
        setNavPage('Skjema')
    }, [])

    return (
        <Nav>
            <SectionHeader> </SectionHeader>
            <DataForm />
        </Nav>
    )
}
