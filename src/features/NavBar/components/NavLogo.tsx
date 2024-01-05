import Image from 'next/image'
import logo from '@/assets/logo.svg'

export default function NavLogo() {
    return (
        <div className="flex h-16 shrink-0 items-center">
            <Image
                className="h-10 w-auto"
                width={32}
                height={32}
                src={logo}
                alt="Project Logo"
            />
        </div>
    )
}
