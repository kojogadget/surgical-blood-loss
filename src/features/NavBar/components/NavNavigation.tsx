import Link from 'next/link'
import { useNavpageContext } from '@/features/NavBar/hooks/useNavpageContext'
import { classNames } from '@/utils/classNames'
import { ChartPieIcon, FolderIcon, HomeIcon } from '@heroicons/react/24/outline'

export default function NavNavigation() {
    const { navPage, setNavPage } = useNavpageContext()

    const navigation = [
        {
            name: 'Dashboard',
            href: '/',
            icon: HomeIcon,
            current: navPage === 'Dashboard',
        },
        {
            name: 'Skjema',
            href: '/skjema',
            icon: FolderIcon,
            current: navPage === 'Skjema',
        },
        {
            name: 'Rapport',
            href: '/rapport',
            icon: ChartPieIcon,
            current: navPage === 'Rapport',
        },
    ]

    return (
        <ul role="list" className="-mx-2 space-y-1" key={navPage}>
            {navigation.map((item) => (
                <li key={item.name}>
                    <Link
                        href={item.href}
                        onClick={() => {
                            setNavPage(item.name)
                        }}
                        className={classNames(
                            item.current
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                        )}
                    >
                        <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                        />
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
