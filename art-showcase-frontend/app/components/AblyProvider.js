"use client"
import React from 'react'
import SearchSection from './SearchSection';
import * as Ably from 'ably'
import { AblyProvider } from 'ably/react'

export default function AblyProviderSearch({ABLY_API_KEY}) {
    console.log("this is backend ", process.env.NEXT_PUBLIC_BACKEND_URL)
    const client = Ably.Realtime.Promise({ authUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/ably`})

return (
  <AblyProvider client={ client } >
    <SearchSection></SearchSection>
  </AblyProvider>
)
  
}
