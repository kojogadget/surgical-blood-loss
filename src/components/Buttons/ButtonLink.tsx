import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/24/solid'

export default function ButtonLink({
    children,
    ...props
}: {
    children: React.ReactNode
} & React.ComponentPropsWithoutRef<'a'>) {
    return (
        <Link href="/skjema" {...props}>
            <div className="flex h-28 w-28 flex-col items-center justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
                <span className="justify-self-start">{children}</span>
                <span className="flex-1">
                    <PlusIcon className="my-auto h-full w-5" />
                </span>
            </div>
        </Link>
    )
}
