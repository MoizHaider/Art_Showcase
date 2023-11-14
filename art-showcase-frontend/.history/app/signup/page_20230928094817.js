"use client"
import React from 'react'

function signup() {
  return (
    <>
        <form>
            <label for="email">Email</label>
            <input type = "email" name = "email"/>
            <label for="password">Password</label>
        </form>
    </>
  )
}

export default signup