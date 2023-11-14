import React from 'react'
import Link from 'next/link'

function nav() {
  return (
    <nav>
        <Link>Home</Link>
        <Link href="/profile">Profile</Link>

    </nav>
  )
}

export default nav