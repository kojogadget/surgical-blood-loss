import { classNames } from '@/utils/classNames'

export default function FormSection({
    children,
    title,
    description,
    className = '',
}: {
    children: React.ReactNode
    title: string
    description: string
    className?: string
}) {
    return (
        <div className="border-b border-white/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white">
                {title}
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
                {description}
            </p>
            <div className={classNames('mt-10', className)}>{children}</div>
        </div>
    )
}
