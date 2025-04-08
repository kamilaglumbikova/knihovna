import React from 'react';
import SidebarNavigation from './SidebarNavigation';
import { Session } from 'next-auth';
import Logout from './Logout';

const Sidebar = () => {
    return (
        <div className='admin-sidebar'>
            <div>
                <div className='logo text-center justify-center'>
                    <h1>Knihovna</h1>
                </div>
                <SidebarNavigation />
            </div>

            <Logout />
        </div>
    )
}

export default Sidebar