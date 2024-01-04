import { classNames } from '@/utils/classNames'
export default function Input({
    name,
    span,
    className = '',
    ...props
}: {
    name: string
    span?: React.ReactNode
    className?: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
    const { ...rest } = props

    return (
        <>
            <div className="mt-2">
                {span ? (
                    <div className="focus-within:ring-indigo-500 flex rounded-md bg-white/95 ring-1 ring-inset ring-white focus-within:ring-2 focus-within:ring-inset">
                        <span className="flex select-none items-center pl-3 text-white focus:ring-0 sm:text-sm sm:leading-6">
                            {span}
                        </span>
                        <input
                            {...rest}
                            name={name}
                            id={name}
                            className={classNames(
                                'flex-1 border-0 bg-transparent py-1.5 pl-1 text-black focus:ring-0 sm:text-sm sm:leading-6',
                                className
                            )}
                        />
                    </div>
                ) : (
                    <input
                        {...rest}
                        name={name}
                        id={name}
                        className={classNames(
                            className,
                            'focus:ring-indigo-500 block w-full rounded-md border-0 bg-white/95 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
                        )}
                    />
                )}
            </div>
        </>
    )
}
