export default function ButtonPrimary({
    children,
    ...props
}: {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="hover:bg-indigo-400 focus-visible:outline-indigo-500 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            {...props}
        >
            {children}
        </button>
    )
}
