import NavDesktop from './components/NavDesktop'
import NavMobile from './components/NavMobile'
import Footer from '@/components/Footer'

export default function Nav({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>
                <NavMobile />
                <NavDesktop />
                <main className="pt-10 lg:pl-72">
                    <div className="min-h-screen px-4 pb-10 sm:px-6 lg:px-8">
                        {children}
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    )
}
