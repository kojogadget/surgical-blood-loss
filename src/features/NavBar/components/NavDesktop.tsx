import NavLogo from './NavLogo'
import NavNavigation from './NavNavigation'
import NavProfile from './NavProfile'

export default function NavDesktop() {
    return (
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
                <NavLogo />
                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <NavNavigation />
                        </li>
                        <li className="-mx-6 mt-auto">
                            <NavProfile />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
