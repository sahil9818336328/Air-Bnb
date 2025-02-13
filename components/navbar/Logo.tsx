import React from 'react'
import { SiAirbnb } from 'react-icons/si'
import Link from 'next/link'
import { Button } from '../ui/button'

const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <SiAirbnb className='w-6 h-6' />
      </Link>
    </Button>
  )
}

export default Logo
