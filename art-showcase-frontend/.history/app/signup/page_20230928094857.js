"use client"
import React from 'react'

function signup() {
  return (
    <>
        <form>
            <label for="email">Email</label>
            <input type = "email" name = "email"/>
            <label for="password">Password</label>
            <input type="password" name="password"/>
            <label for="confirmPassword">Confirm Passwr</label>
        </form>
    </>
  )
}

export default signup