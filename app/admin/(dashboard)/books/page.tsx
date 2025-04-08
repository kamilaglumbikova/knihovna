import AllBooks from '@/components/admin/AllBooks'
import { Button } from '@/components/ui/button'
import { db } from '@/database/drizzle'
import { books } from '@/database/schema'
import Link from 'next/link'
import React from 'react'
import { desc } from "drizzle-orm";
import { getAllBooks } from '@/lib/admin/actions/book'

interface Props { }

const Page = async () => {
    const booksAll = await getAllBooks() as Book[];
    
    return (
        <section className='w-full rounded-2xl bg-white p-7'>
            <div className='flex flex-wrap items-center justify-between gap-2'>
                <h2 className='text-xl font-semibold'>Všechny knihy</h2>
                <Button className='bg-primary-admin' asChild>
                    <Link href='/admin/books/new' className='text-white'>
                        + Přidat novou knihu
                    </Link>
                </Button>
            </div>
            <div className='mt-7 w-full overflow-hidden'>
                <AllBooks books={booksAll} pagination={true} />
            </div>
        </section>
    )
}

export default Page