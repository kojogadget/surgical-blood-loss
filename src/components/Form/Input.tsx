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
                    <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                        <span className="flex select-none items-center pl-3 text-white focus:ring-0 sm:text-sm sm:leading-6">
                            {span}
                        </span>
                        <input
                            {...rest}
                            name={name}
                            id={name}
                            className={classNames(
                                className,
                                'flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6'
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
                            'block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                        )}
                    />
                )}
            </div>
        </>
    )
}
