'use client'
import { useEffect, useState } from 'react'
import { useNavpageContext } from '@/features/NavBar/hooks/useNavpageContext'
import Nav from '@/features/NavBar/NavBar'
import SectionHeader from '@/components/SectionHeader'
import { doc, collection, getDocs, deleteDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'
import ButtonPrimary from '@/components/Buttons/ButtonPrimary'

export default function RapportPage() {
    const { setNavPage } = useNavpageContext()
    const [query, setQuery] = useState([])

    const getReport = async () => {
        const querySnap = await getDocs(collection(db, 'data-v1.1'))
        let data: any = []
        querySnap.forEach((doc) => data.push(doc))
        setQuery(data)
    }

    const deleteReport = async (id: string) => {
        await deleteDoc(doc(db, 'data-v1.1', id))
        getReport()
    }

    useEffect(() => {
        setNavPage('Rapport')
        getReport()
    }, [])

    return (
        <Nav>
            <SectionHeader>Rapport</SectionHeader>
            <ul role="list" className="divide-y divide-gray-200">
                {query.map((item: any, index: number) => (
                    <li key={index} className="py-4">
                        <div className="flex items-center gap-x-16">
                            <div className="mt-7 lg:mt-2">
                                <p className="text-sm font-medium leading-6 text-gray-400">
                                    {item
                                        .data()
                                        .createdAt.toDate()
                                        .toLocaleDateString('nb-NO')}
                                    ,&nbsp;
                                    {item
                                        .data()
                                        .createdAt.toDate()
                                        .toLocaleTimeString('nb-NO')}
                                </p>
                            </div>
                            <p className="mt-2 flex items-baseline justify-center gap-x-2 lg:justify-start">
                                <span className="font-semibold tracking-tight text-white">
                                    Vekt: {item.data().weight}
                                </span>
                            </p>
                            <p className="mt-2 flex items-baseline justify-center gap-x-2 lg:justify-start">
                                <span className="font-semibold tracking-tight text-white">
                                    Estimat: {item.data().estimate}
                                </span>
                            </p>
                            <p className="mt-2 flex items-baseline justify-center gap-x-2 lg:justify-start">
                                <span className="font-semibold tracking-tight text-white">
                                    Blodtap: {item.data().bloodLoss}
                                </span>
                            </p>
                            <div className="mr-6 flex flex-1 justify-end">
                                <ButtonPrimary
                                    onClick={() => {
                                        deleteReport(item.id)
                                    }}
                                >
                                    Slett
                                </ButtonPrimary>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </Nav>
    )
}
