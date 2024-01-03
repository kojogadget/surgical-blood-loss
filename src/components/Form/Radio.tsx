export default function Radio({
    name,
    label,
    ...props
}: {
    name: string
    label: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>) {
    const { ...rest } = props

    return (
        <div className="flex items-center gap-x-3">
            <input
                {...rest}
                id={name}
                name={name}
                type="radio"
                className="h-4 w-4 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
            />
            <label
                htmlFor={name}
                className="block text-sm font-medium leading-6 text-white"
            >
                {label}
            </label>
        </div>
    )
}
