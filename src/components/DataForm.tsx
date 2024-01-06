'use client'
import { useState, useEffect } from 'react'
import ButtonPrimary from '@/components/Buttons/ButtonPrimary'
import ButtonTransparent from '@/components/Buttons/ButtonTransparent'
import DataEquipment from './Data/DataEquipment'
import DataLiquid from './Data/DataLiquid'
import DataSuction from './Data/DataSuction'
import DataOther from './Data/DataOther'
import DataEstimate from './Data/DataEstimate'
import DataWeight from './Data/DataWeight'
import Modal from './Modal'
import { DataTypes, DataFlagTypes } from '@/types'
import { initData } from '@/data/initData'
import { initDataFlag } from '@/data/initDataFlag'

export default function DataForm() {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [data, setData] = useState<DataTypes>(initData)
    const [dataFlag, setDataFlag] = useState<DataFlagTypes>(initDataFlag)

    const updateData = (key: keyof DataTypes, value: number): void => {
        setData((prev) => ({ ...prev, [key]: value }))
    }

    const updateDataFlag = (key: keyof DataFlagTypes, value: boolean): void => {
        setDataFlag((prev) => ({ ...prev, [key]: value }))
    }

    useEffect(() => {
        console.log(data)
    }, [openModal])

    return (
        <form>
            <div className="space-y-12">
                <DataEquipment
                    data={data}
                    dataFlag={dataFlag}
                    updateDataFlag={updateDataFlag}
                    updateData={updateData}
                />
                <DataLiquid
                    dataFlag={dataFlag}
                    updateDataFlag={updateDataFlag}
                    updateData={updateData}
                />
                <DataSuction updateData={updateData} />
                <DataOther updateData={updateData} />
                <DataEstimate updateData={updateData} />
                <DataWeight updateData={updateData} />
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <ButtonTransparent type="button">Cancel</ButtonTransparent>
                <ButtonPrimary onClick={() => setOpenModal(true)} type="button">
                    Save
                </ButtonPrimary>
            </div>
            <Modal
                data={data}
                dataFlag={dataFlag}
                isOpen={openModal}
                setIsOpen={setOpenModal}
            />
        </form>
    )
}
