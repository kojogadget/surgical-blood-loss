'use client'
import React, { createContext, useContext, useState } from 'react'
import { DataFlagTypes } from '@/types'
import { initDataFlag } from '@/data'

type DataFlagContextType = {
    dataFlag: DataFlagTypes
    updateDataFlag: (key: string, value: boolean) => void
}

type DataFlagProviderProps = {
    children: React.ReactNode
}

const DataFlagContext = createContext<DataFlagContextType>({
    dataFlag: initDataFlag,
    updateDataFlag: () => {},
})

export const DataFlagProvider: React.FC<DataFlagProviderProps> = ({
    children,
}) => {
    const [dataFlag, setDataFlag] = useState(initDataFlag)

    const updateDataFlag = (key: string, value: boolean) => {
        setDataFlag({
            ...dataFlag,
            [key]: value,
        })
    }

    return (
        <DataFlagContext.Provider value={{ dataFlag, updateDataFlag }}>
            {children}
        </DataFlagContext.Provider>
    )
}

export const useDataFlagContext = () => useContext(DataFlagContext)
