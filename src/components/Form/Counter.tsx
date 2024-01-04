import { useState } from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

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
                    className="h-8 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                    <MinusIcon className="h-3 w-3" aria-hidden="true" />
                </button>
                <input
                    type="number"
                    id={name}
                    onChange={handleInput}
                    data-input-counter
                    aria-describedby={name}
                    className="block h-8 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 [appearance:textfield] focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    required
                    value={count}
                />
                <button
                    type="button"
                    onClick={handleIncrement}
                    id="increment-button"
                    className="h-8 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                    <PlusIcon className="h-3 w-3" aria-hidden="true" />
                </button>
            </div>
        </>
    )
}
