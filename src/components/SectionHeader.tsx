export default function SectionHeader({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mb-10 mt-4 border-b border-white/10 pb-7">
            <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
                {children}
            </h2>
        </div>
    )
}
