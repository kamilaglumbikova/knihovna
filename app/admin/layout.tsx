
import '@/styles/admin.css';
import { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <div>
                {children}
            </div>
        </main>
    )
}

export default Layout