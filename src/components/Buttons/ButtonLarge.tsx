export default function ButtonLarge({
    children,
    ...props
}: {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="hover:bg-indigo-400 focus-visible:outline-indigo-500 flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            {...props}
        >
            {children}
        </button>
    )
}
