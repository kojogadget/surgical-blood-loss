import { classNames } from '@/utils/classNames'

export default function Button({
    children,
    size = 'small',
    secondary = false,
    ...props
}: {
    children: React.ReactNode
    size?: 'small' | 'large'
    secondary?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    let sizeClass
    switch (size) {
        case 'small':
            sizeClass = 'py-2'
            break
        case 'large':
            sizeClass = 'flex w-full justify-center py-1.5 leading-6'
            break
    }

    const primaryClass =
        'rounded-md bg-indigo-500 px-3 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
    const secondaryClass = 'leading-6'

    return (
        <button
            className={classNames(
                sizeClass,
                'text-sm font-semibold text-white',
                secondary ? secondaryClass : primaryClass
            )}
            {...props}
        >
            {children}
        </button>
    )
}
