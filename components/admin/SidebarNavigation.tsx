"use client";

import { adminSideBarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const SidebarNavigation = () => {
    const pathname = usePathname();
    return (
        <div className='mt-10 flex flex-col gap-3'>
            {adminSideBarLinks.map((link) => {
                const isSelected = (link.route !== '/admin' && pathname.includes(link.route) && link.route.length > 1 || pathname === link.route);
                return (
                    <Link href={link.route} key={link.route}>
                        <div className={cn("link", isSelected && "bg-primary-admin shadow-sm")}>
                            <div className='relative size-5'>
                                <Image src={link.img} alt='icon' fill className={`${isSelected ? 'brightness-0 invert' : ''}`} />
                            </div>
                            <p className={cn(isSelected ? 'text-white' : 'text-dark-100')}>{link.text}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default SidebarNavigation