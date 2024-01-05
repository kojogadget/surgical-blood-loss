export default function Checkbox({
    name,
    label,
    description,
    ...props
}: {
    name: string
    label: string
    description?: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
    const { ...rest } = props

    return (
        <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
                <input
                    {...rest}
                    name={name}
                    id={name}
                    type="checkbox"
                    className="focus:ring-indigo-600 focus:ring-offset-gray-900 h-4 w-4 rounded border-white bg-white/95 text-primary"
                />
            </div>
            <div className="text-sm leading-6">
                <label htmlFor={name} className="font-medium text-white">
                    {label}
                </label>
                {description && <p className="text-gray-400">{description}</p>}
            </div>
        </div>
    )
}
