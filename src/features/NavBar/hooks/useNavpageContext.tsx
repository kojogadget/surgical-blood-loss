'use client'
import React, { createContext, useContext, useState } from 'react'

interface NavpageContextType {
    navPage: string
    setNavPage: (open: string) => void
}

interface NavpageProviderProps {
    children: React.ReactNode
}

const NavpageContext = createContext<NavpageContextType>({
    navPage: '',
    setNavPage: () => {},
})

export const NavpageProvider: React.FC<NavpageProviderProps> = ({
    children,
}) => {
    const [navPage, setNavPage] = useState('')

    return (
        <NavpageContext.Provider value={{ navPage, setNavPage }}>
            {children}
        </NavpageContext.Provider>
    )
}

export const useNavpageContext = () => useContext(NavpageContext)
