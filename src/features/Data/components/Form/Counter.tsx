import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import Input from '@/components/Form/Input'
import Checkbox from '@/components/Form/Checkbox'
import { useDataContext } from '@/features/Data/context/DataContext'
import { useDataFlagContext } from '@/features/Data/context/DataFlagContext'
import { DataTypes, DataFlagTypes } from '@/types'

export default function Counter({
    keyValue,
    keyFlag,
    name,
}: {
    keyValue: keyof DataTypes
    keyFlag: keyof DataFlagTypes
    name: string
}) {
    const { data, setData } = useDataContext()
    const { dataFlag, setDataFlag } = useDataFlagContext()

    const updateData = (key: string, value: number) => {
        setData({
            ...data,
            [key]: value,
        })
    }

    const updateDataFlag = (key: string, value: boolean) => {
        setDataFlag({
            ...dataFlag,
            [key]: value,
        })
    }

    const handleIncrement = () => {
        if (!dataFlag[keyFlag]) updateDataFlag(keyFlag, true)
        updateData(keyValue, data[keyValue] + 1)
    }
    const handleDecrement = () => {
        if (data[keyValue] > 0) {
            if (data[keyValue] === 1) updateDataFlag(keyFlag, false)
            updateData(keyValue, data[keyValue] - 1)
        }
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateData(keyValue, Number(e.target.value))
    }

    return (
        <>
            <Checkbox
                name="kompress-brett"
                label="Kompressbrett"
                checked={dataFlag[keyFlag] || data[keyValue] > 0}
                onChange={() => {
                    if (dataFlag[keyFlag]) {
                        updateData(keyValue, 0)
                    }
                    updateDataFlag(keyFlag, !dataFlag[keyFlag])
                }}
            />
            <div className="relative flex max-w-32 items-center">
                <button
                    type="button"
                    onClick={handleDecrement}
                    id="decrement-button"
                    className="h-8 rounded-s-lg border-0 bg-white/5 p-3 shadow-sm ring-1 ring-inset ring-white/10 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                    <MinusIcon className="h-3 w-3" aria-hidden="true" />
                </button>
                <Input
                    name={name}
                    onChange={handleInput}
                    data-input-counter
                    aria-describedby={name}
                    required
                    value={data[keyValue]}
                    className="-mt-2 block h-8 rounded-none text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    type="number"
                />
                <button
                    type="button"
                    onClick={handleIncrement}
                    id="increment-button"
                    className="h-8 rounded-e-lg border-0 bg-white/5 p-3 shadow-sm ring-1 ring-inset ring-white/10 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                    <PlusIcon className="h-3 w-3" aria-hidden="true" />
                </button>
            </div>
        </>
    )
}
