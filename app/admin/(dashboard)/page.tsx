import AllBooks from '@/components/admin/AllBooks';
import { geBooksCount, getLatestBooks } from '@/lib/admin/actions/book'
import React from 'react'


const Page = async () => {
  const lastBooks = await getLatestBooks();
  const countBooks = await geBooksCount();
  
  return <div>
    <h1 className='text-2xl font-semibold'>Dashboard</h1>
    <span className='text-gray-500 text-sm'>{`celkový počet knih je ${countBooks}`}</span>
    <div className='mt-7 w-full rounded-2xl bg-white p-7'>
      <h2 className='mb-4 font-semibold'>Posledních 5 přidaných knih</h2>
      <AllBooks books={lastBooks} pagination={false} />
    </div>
  </div>
}

export default Page