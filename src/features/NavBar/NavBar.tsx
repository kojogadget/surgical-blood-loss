import NavDesktop from './components/NavDesktop'
import NavMobile from './components/NavMobile'

export default function Nav({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>
                <NavMobile />
                <NavDesktop />
                <main className="py-10 lg:pl-72">
                    <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                </main>
            </div>
        </>
    )
}
