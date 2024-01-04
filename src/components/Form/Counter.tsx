import { useState } from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import Input from './Input'

export default function Counter({
    name,
    initialCount,
}: {
    name: string
    initialCount: number
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

    return (
        <>
            <div className="relative flex max-w-32 items-center">
                <button
                    type="button"
                    onClick={handleDecrement}
                    id="decrement-button"
                    className="hover:bg-gray-200 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 h-8 rounded-s-lg border-0 bg-white/5 p-3 shadow-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-inset"
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
                    className="hover:bg-gray-200 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 h-8 rounded-e-lg border-0 bg-white/5 p-3 shadow-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-inset"
                >
                    <PlusIcon className="h-3 w-3" aria-hidden="true" />
                </button>
            </div>
        </>
    )
}
