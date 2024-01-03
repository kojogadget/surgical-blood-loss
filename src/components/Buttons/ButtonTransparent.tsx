export default function ButtonTransparent({
    children,
    ...props
}: {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="py-2 text-sm font-semibold leading-6 text-white"
            {...props}
        >
            {children}
        </button>
    )
}
