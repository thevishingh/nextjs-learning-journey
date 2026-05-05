import React from 'react'

export default function page() {
  return (
    <div>
      <nav className='flex py-10 mx-auto container items-center justify-between'>
        <h1 className='text-xl font-semibold'>Home</h1>
        <div className='flex cursor-pointer gap-2'>
          <h1>Performance</h1>
          <h1>Reliability</h1>
        </div>
      </nav>
    </div>
  )
}
