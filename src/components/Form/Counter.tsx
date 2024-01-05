import { useState, useEffect } from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import Input from './Input'
import DataType from '@/types/data'

export default function Counter({
    name,
    initialCount,
    data,
    setData,
}: {
    name: string
    initialCount: number
    data: DataType
    setData: (open: DataType) => void
}) {
    const [count, setCount] = useState(initialCount)

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCount(Number(e.target.value))
    }

    useEffect(() => {
        setData({ ...data })
    }, [count])

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
                    value={count}
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
