export default function ButtonSeconodary({
    children,
    ...props
}: {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
            {...props}
        >
            {children}
        </button>
    )
}
