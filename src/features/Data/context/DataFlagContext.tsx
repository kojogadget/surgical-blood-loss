'use client'
import React, { createContext, useContext, useState } from 'react'
import { DataFlagTypes } from '@/types'
import { initDataFlag } from '@/data'

type DataFlagContextType = {
    dataFlag: DataFlagTypes
    setDataFlag: (open: DataFlagTypes) => void
}

type DataFlagProviderProps = {
    children: React.ReactNode
}

const DataFlagContext = createContext<DataFlagContextType>({
    dataFlag: initDataFlag,
    setDataFlag: () => {},
})

export const DataFlagProvider: React.FC<DataFlagProviderProps> = ({
    children,
}) => {
    const [dataFlag, setDataFlag] = useState(initDataFlag)

    return (
        <DataFlagContext.Provider value={{ dataFlag, setDataFlag }}>
            {children}
        </DataFlagContext.Provider>
    )
}

export const useDataFlagContext = () => useContext(DataFlagContext)
