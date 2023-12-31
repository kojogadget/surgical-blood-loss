'use client'
import { useEffect } from 'react'
import { useNavpageContext } from '@/features/NavBar/hooks/useNavpageContext'
import Nav from '@/features/NavBar/NavBar'

export default function Rapport() {
    const { setNavPage } = useNavpageContext()

    useEffect(() => {
        setNavPage('Rapport')
    }, [])

    return (
        <Nav>
            <h1>Kirurgisk Blodtap</h1>
            <h2>Rapport</h2>
        </Nav>
    )
}
