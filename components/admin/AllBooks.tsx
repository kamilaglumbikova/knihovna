import { columns } from '@/app/admin/(dashboard)/books/columns'
import { DataTable } from '@/app/admin/(dashboard)/books/data-table'
import React from 'react'

interface Props { }

const AllBooks = ({ books,pagination }: { books: Book[], pagination?: boolean }) => {
    
    return <DataTable columns={columns} data={books} pagination={pagination} />
}

export default AllBooks