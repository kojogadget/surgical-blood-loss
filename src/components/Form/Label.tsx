export default function Label({
    label,
    ...props
}: {
    label: React.ReactNode
} & React.LabelHTMLAttributes<HTMLLabelElement>) {
    const { ...rest } = props

    return (
        <label
            className="block text-sm font-medium leading-6 text-white"
            {...rest}
        >
            {label}
        </label>
    )
}
