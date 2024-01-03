export default function ButtonLarge({
    children,
    ...props
}: {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            {...props}
        >
            {children}
        </button>
    )
}
