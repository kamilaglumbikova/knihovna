// @typescript-eslint/no-empty-object-type
import { Session } from 'next-auth';
import React from 'react'

const Header = ({ session }: { session: Session }) => {
  return (
    <div className='flex justify-end'>
      <div className='user'>
        <div className='flex flex-col max-md:hidden'>
          <p className='font-semibold text-dark-200'>{session.user?.name}</p>
          <p className='text-light-500 text-xs'>{session.user?.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Header