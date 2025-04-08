import BookForm from '@/components/admin/BookForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

interface Props { }

const Page = () => {
    return (
        <>
            <Button asChild className='back-btn'>
                <Link href='/admin/books'>
                    Zpět
                </Link>
            </Button>
            <section className='w-full rounded-2xl bg-white p-7'>
                <BookForm />
            </section>
        </>
    )
}

export default Page