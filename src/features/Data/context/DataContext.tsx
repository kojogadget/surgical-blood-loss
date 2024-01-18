'use client'
import React, { createContext, useContext, useState } from 'react'
import { DataTypes } from '@/types'
import { initData } from '@/data'
import { calcBloodLoss } from '@/utils/calcBloodLoss'

type DataContextType = {
    data: DataTypes
    updateData: (key: keyof DataTypes, value: number) => void
}

type DataProviderProps = {
    children: React.ReactNode
}

const DataContext = createContext<DataContextType>({
    data: initData,
    updateData: () => {},
})

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [data, setData] = useState(initData)

    const updateData = (key: keyof DataTypes, value: number) => {
        setData({
            ...data,
            [key]: value,
            bloodLoss: calcBloodLoss({ ...data, [key]: value }),
        })
    }

    return (
        <DataContext.Provider value={{ data, updateData }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)
