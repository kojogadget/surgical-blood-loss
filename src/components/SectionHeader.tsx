export default function SectionHeader({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mb-10 mt-4 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
                Kirurgisk Blodtap Kalkulator
            </h2>
            <h3 className="mt-3 text-base font-semibold leading-6">
                {children}
            </h3>
        </div>
    )
}
