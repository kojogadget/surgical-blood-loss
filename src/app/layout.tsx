import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './Providers'
import ProtectedRoute from '@/features/Auth/components/ProtectedRoute'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Kirurgisk Blodtap',
    description: 'Enkel kalkulator for å beregne blodtap under operasjon',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className="h-full bg-background text-white" lang="no">
            <body className={inter.className + ' h-full'}>
                <Providers>
                    <ProtectedRoute>{children}</ProtectedRoute>
                </Providers>
            </body>
        </html>
    )
}
