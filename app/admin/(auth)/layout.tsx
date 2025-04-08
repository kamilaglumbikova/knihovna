
import '@/styles/admin.css';
import { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
    return (
        <main className='flex min-h-screen w-full flex-row bg-light-300 justify-center items-center'>
            <div className='bg-white p-7 rounded-sm max-w-[500px] w-full'>
                {children}
            </div>
        </main>
    )
}

export default Layout