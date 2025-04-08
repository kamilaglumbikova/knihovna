import AllBooks from '@/components/admin/AllBooks'
import { Button } from '@/components/ui/button'
import { db } from '@/database/drizzle'
import { users } from '@/database/schema'
import Link from 'next/link'
import React from 'react'
import { desc } from "drizzle-orm";
import { columns } from './columns'
import { DataTable } from './data-table'

interface Props { }

const Page = async () => {
    const usersAll = await db.select().from(users).orderBy(desc(users.id)) as User[];
    
    return (
        <section className='w-full rounded-2xl bg-white p-7'>
            <div className='flex flex-wrap items-center justify-between gap-2'>
                <h2 className='text-xl font-semibold'>Uživatelé</h2>
            </div>
            <div className='mt-7 w-full overflow-hidden'>
                <DataTable columns={columns} data={usersAll} />
            </div>
        </section>
    )
}

export default Page