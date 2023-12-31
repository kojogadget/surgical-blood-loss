import { NavpageProvider } from '@/features/NavBar/hooks/useNavpageContext'

export default function Providers({ children }: { children: React.ReactNode }) {
    return <NavpageProvider>{children}</NavpageProvider>
}
