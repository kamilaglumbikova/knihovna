
import { auth } from '@/auth';
import Header from '@/components/admin/Header';
import Sidebar from '@/components/admin/Sidebar';
import '@/styles/admin.css';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
    const session = await auth();

    if(!session?.user?.id) redirect('/admin/sign-in');
    return (
        <main className='flex min-h-screen w-full flex-row'>
            <Sidebar />

            <div className='admin-container'>
                <Header session={session} />
                <div className='mt-8'> 
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Layout