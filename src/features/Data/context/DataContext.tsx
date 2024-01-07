'use client'
import React, { createContext, useContext, useState } from 'react'
import { DataTypes } from '@/types'
import { initData } from '@/data'

type DataContextType = {
    data: DataTypes
    setData: (open: DataTypes) => void
}

type DataProviderProps = {
    children: React.ReactNode
}

const DataContext = createContext<DataContextType>({
    data: initData,
    setData: () => {},
})

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [data, setData] = useState(initData)

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)
