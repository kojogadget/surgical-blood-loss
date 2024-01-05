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
import DataType from '@/types/data'

const dataInit: DataType = {
    compressBoardEnabled: false,
    compressBoard: 0,
    compressBlueEnabled: false,
    compressBlue: 0,
    compressOrangeEnabled: false,
    compressOrange: 0,
    tupferBlueEnabled: false,
    tupferBlue: 0,
    tupferOrangeEnabled: false,
    tupferOrange: 0,
    coversEnabled: false,
    covers: 0,
    waterEnabled: false,
    waterStart: 0,
    waterEnd: 0,
    natcloEnabled: false,
    natcloStart: 0,
    natcloEnd: 0,
    suctionAmniotic: 0,
    suctionTotal: 0,
    other: 0,
    estimate: 0,
    weight: 0,
}

export default function DataForm() {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [data, setData] = useState<DataType>(dataInit)

    useEffect(() => {
        console.log(data)
    }, [openModal])

    return (
        <form>
            <div className="space-y-12">
                <DataEquipment data={data} setData={setData} />
                <DataLiquid data={data} setData={setData} />
                <DataSuction data={data} setData={setData} />
                <DataOther data={data} setData={setData} />
                <DataEstimate data={data} setData={setData} />
                <DataWeight data={data} setData={setData} />
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <ButtonTransparent type="button">Cancel</ButtonTransparent>
                <ButtonPrimary onClick={() => setOpenModal(true)} type="button">
                    Save
                </ButtonPrimary>
            </div>
            <Modal data={data} isOpen={openModal} setIsOpen={setOpenModal} />
        </form>
    )
}
