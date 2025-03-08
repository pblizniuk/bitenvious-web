'use client'
import { signOut } from 'next-auth/react'
import clsx from 'clsx'

export default function SignOutButton({ classes }: { classes?: string }) {
  const classnames = clsx(classes)
  return (
    <button onClick={() => signOut()} className={classnames}>
      Sign out
    </button>
  )
}
