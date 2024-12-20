import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
    <Button><Link href="/signin">Log in</Link></Button>
    <Button><Link href="/dashboard">dashboard</Link></Button>
    <h1 className="text-lg font-medium">Welcome home!</h1>
    </div>
  )
}

export default page