import React from 'react'
import Link from 'next/link'

function nav() {
  return (
    <nav>
        <Link href="/home">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/admin">Admin</Link>
    </nav>
  )
}

export default nav