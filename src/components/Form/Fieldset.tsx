export default function Fieldset({
    children,
    label,
    desciption,
}: {
    children: React.ReactNode
    label: React.ReactNode
    desciption?: React.ReactNode
}) {
    return (
        <fieldset>
            <legend className="text-sm font-semibold leading-6 text-white">
                {label}
            </legend>
            {desciption && (
                <p className="mt-1 text-sm leading-6 text-gray-400">
                    {desciption}
                </p>
            )}
            <div className="mt-6 space-y-6">{children}</div>
        </fieldset>
    )
}
