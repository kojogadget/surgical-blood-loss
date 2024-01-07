'use client'
import { useState } from 'react'
import ButtonPrimary from '@/components/Buttons/ButtonPrimary'
import ButtonTransparent from '@/components/Buttons/ButtonTransparent'
import Equipment from '@/features/Data/components/Equipment'
import Liquid from '@/features/Data/components/Liquid'
import Suction from '@/features/Data/components/Suction'
import Other from '@/features/Data/components/Other'
import Estimate from '@/features/Data/components/Estimate'
import Weight from '@/features/Data/components/Weight'
import Modal from '@/features/Modal/Modal'
import { DataProvider } from '@/features/Data/context/DataContext'
import { DataFlagProvider } from '@/features/Data/context/DataFlagContext'

export default function Form() {
    const [openModal, setOpenModal] = useState<boolean>(false)

    return (
        <DataProvider>
            <DataFlagProvider>
                <form id="form">
                    <div className="space-y-12">
                        <Equipment />
                        <Liquid />
                        <Suction />
                        <Other />
                        <Estimate />
                        <Weight />
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <ButtonTransparent type="reset">
                            Cancel
                        </ButtonTransparent>
                        <ButtonPrimary
                            onClick={() => setOpenModal(true)}
                            type="button"
                        >
                            Save
                        </ButtonPrimary>
                    </div>
                    <Modal isOpen={openModal} setIsOpen={setOpenModal} />
                </form>
            </DataFlagProvider>
        </DataProvider>
    )
}
