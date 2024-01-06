import { Dialog } from '@headlessui/react'
import { DataTypes, DataFlagTypes } from '@/types'

export default function ModalContent({
    data,
    dataFlag,
    setIsOpen,
    cancelButtonRef,
}: {
    data: DataTypes
    dataFlag: DataFlagTypes
    setIsOpen: (open: boolean) => void
    cancelButtonRef: any
}) {
    return (
        <>
            <div>
                <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                    >
                        Oppsummering
                    </Dialog.Title>
                    <div className="mt-2">
                        <p className="flex flex-col items-start text-sm text-gray-500">
                            {dataFlag.compressBoardEnabled && (
                                <span>Kompressbrett: {data.compressBoard}</span>
                            )}
                            {dataFlag.compressBlueEnabled && (
                                <span>Kompress (Blå): {data.compressBlue}</span>
                            )}
                            {dataFlag.compressOrangeEnabled && (
                                <span>
                                    Kompress (Orange): {data.compressOrange}
                                </span>
                            )}
                            {dataFlag.tupferBlueEnabled && (
                                <span>Tupfer (Blå): {data.tupferBlue}</span>
                            )}
                            {dataFlag.tupferOrangeEnabled && (
                                <span>
                                    Tupfer (Orange): {data.tupferOrange}
                                </span>
                            )}
                            {dataFlag.coversEnabled && (
                                <span>Duk: {data.covers}</span>
                            )}
                            <span>Forstervann: {data.suctionAmniotic}</span>
                            <span>Total mengde sug: {data.suctionTotal}</span>
                            <span>Annet: {data.other}</span>
                            <span>Visuelt estimat: {data.estimate}</span>
                            <span>Vekt: {data.weight}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryDark sm:col-start-2"
                    onClick={() => setIsOpen(false)}
                >
                    Bekreft
                </button>
                <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={() => setIsOpen(false)}
                    ref={cancelButtonRef}
                >
                    Avbryt
                </button>
            </div>
        </>
    )
}
