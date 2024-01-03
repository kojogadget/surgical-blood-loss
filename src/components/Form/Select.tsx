export default function Select({
    name,
    options,
    ...props
}: {
    name: string
    options: string[]
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
    const { ...rest } = props

    return (
        <div className="mt-2">
            <select
                {...rest}
                id={name}
                name={name}
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
            >
                {options.map((option, index) => (
                    <option key={`${index}-${option}`}>{option}</option>
                ))}
            </select>
        </div>
    )
}
