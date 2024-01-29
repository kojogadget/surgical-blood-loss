import { Dialog } from '@headlessui/react'
import { useDataContext } from '@/features/Data/context/DataContext'
import { useDataFlagContext } from '@/features/Data/context/DataFlagContext'

export default function Content({
    setIsOpen,
    cancelButtonRef,
}: {
    setIsOpen: (open: boolean) => void
    cancelButtonRef: any
}) {
    const { data } = useDataContext()
    const { dataFlag } = useDataFlagContext()

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
                        <table className="min-w-full">
                            <colgroup>
                                <col className="w-1/2" />
                                <col className="w-1/2" />
                            </colgroup>
                            <tbody className="font-medium text-gray-900">
                                {dataFlag.compressBoardEnabled && (
                                    <tr className="border-b border-gray-200">
                                        <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                            Kompressbrett:
                                        </td>
                                        <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                            {data.compressBoard}
                                        </td>
                                    </tr>
                                )}
                                {dataFlag.compressBlueEnabled && (
                                    <tr className="border-b border-gray-200">
                                        <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                            Kompress (Blå):
                                        </td>
                                        <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                            {data.compressBlue}
                                        </td>
                                    </tr>
                                )}
                                {dataFlag.compressOrangeEnabled && (
                                    <tr className="border-b border-gray-200">
                                        <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                            Kompress (Orange):
                                        </td>
                                        <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                            {data.compressOrange}
                                        </td>
                                    </tr>
                                )}
                                {dataFlag.tupferBlueEnabled && (
                                    <tr className="border-b border-gray-200">
                                        <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                            Tupfer (Blå):
                                        </td>
                                        <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                            {data.tupferBlue}
                                        </td>
                                    </tr>
                                )}
                                {dataFlag.tupferOrangeEnabled && (
                                    <tr className="border-b border-gray-200">
                                        <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                            Tupfer (Orange):
                                        </td>
                                        <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                            {data.tupferOrange}
                                        </td>
                                    </tr>
                                )}
                                {dataFlag.coversEnabled && (
                                    <tr className="border-b border-gray-200">
                                        <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                            Duk:
                                        </td>
                                        <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                            {data.covers}
                                        </td>
                                    </tr>
                                )}
                                {dataFlag.waterEnabled && (
                                    <tr className="border-b border-gray-200">
                                        <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                            Sterilt vann:
                                        </td>
                                        <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                            {data.waterStart - data.waterEnd}
                                        </td>
                                    </tr>
                                )}
                                {dataFlag.natcloEnabled && (
                                    <tr className="border-b border-gray-200">
                                        <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                            NaCl 0.9%:
                                        </td>
                                        <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                            {data.natcloStart - data.natcloEnd}
                                        </td>
                                    </tr>
                                )}
                                {dataFlag.ringerAcetatEnabled && (
                                    <tr className="border-b border-gray-200">
                                        <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                            Ringer Acetat:
                                        </td>
                                        <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                            {data.ringerAcetatStart -
                                                data.ringerAcetatEnd}
                                        </td>
                                    </tr>
                                )}
                                <tr className="border-b border-gray-200">
                                    <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                        Forstervann:
                                    </td>
                                    <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                        {data.suctionAmniotic !== 0
                                            ? data.suctionAmniotic
                                            : 'Ikke oppgitt'}
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                        Total mengde sug:
                                    </td>
                                    <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                        {data.suctionTotal !== 0
                                            ? data.suctionTotal
                                            : 'Ikke oppgitt'}
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                        Annet:
                                    </td>
                                    <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                        {data.other !== 0
                                            ? data.other
                                            : 'Ikke oppgitt'}
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                        Visuelt estimat:
                                    </td>
                                    <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                        {data.estimate !== 0
                                            ? data.estimate
                                            : 'Ikke oppgitt'}
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                        Vekt:
                                    </td>
                                    <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                        {data.weight !== 0
                                            ? data.weight
                                            : 'Ikke oppgitt'}
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="max-w-0 py-5 pl-4 pr-3 text-left text-sm sm:pl-0">
                                        Blodtap:
                                    </td>
                                    <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                                        {data.bloodLoss <= 0
                                            ? data.bloodLoss
                                            : 'UGYLDIG VERDIER'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
