export default function CounterWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-12/12 flex justify-between sm:flex-col sm:gap-y-4 lg:w-10/12 lg:flex-row">
            {children}
        </div>
    )
}
