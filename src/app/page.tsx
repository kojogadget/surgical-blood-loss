'use client'
import { useEffect, useState } from 'react'
import { useNavpageContext } from '@/features/NavBar/hooks/useNavpageContext'
import Nav from '@/features/NavBar/NavBar'
import SectionHeader from '@/components/SectionHeader'
import ButtonLink from '@/components/Buttons/ButtonLink'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'

export default function Home() {
    const { setNavPage } = useNavpageContext()
    const [numMeasurements, setNumMeasurements] = useState(0)

    const getNumMeasurements = async () => {
        const querySnap = await getDocs(collection(db, 'showcase'))
        if (querySnap.empty) return
        setNumMeasurements(querySnap.size)
    }

    useEffect(() => {
        getNumMeasurements()
        setNavPage('Startside')
    }, [])

    return (
        <Nav>
            <SectionHeader>Startside</SectionHeader>
            <div className="flex flex-col items-center gap-x-16 lg:flex-row lg:items-start">
                <ButtonLink>Ny pasient</ButtonLink>
                <div className="mt-7 lg:mt-2">
                    <p className="text-sm font-medium leading-6 text-gray-400">
                        Antall målinger
                    </p>
                    <p className="mt-2 flex items-baseline justify-center gap-x-2 lg:justify-start">
                        <span className="text-4xl font-semibold tracking-tight text-white">
                            {numMeasurements}
                        </span>
                    </p>
                </div>
            </div>
        </Nav>
    )
}
