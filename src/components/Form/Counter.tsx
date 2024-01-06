import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import Input from './Input'
import { DataTypes } from '@/types'

export default function Counter({
    name,
    data,
    updateData,
    keyValue,
}: {
    name: string
    initialCount: number
    data: DataTypes
    updateData: (key: keyof DataTypes, value: number) => void
    keyValue: keyof DataTypes
}) {
    const handleIncrement = () => {
        if (typeof data[keyValue] === 'number') {
            updateData(keyValue, data[keyValue] + 1)
        } else null
    }
    const handleDecrement = () => {
        if (data[keyValue] > 0) {
            updateData(keyValue, data[keyValue] - 1)
        }
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateData(keyValue, Number(e.target.value))
    }

    return (
        <>
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
