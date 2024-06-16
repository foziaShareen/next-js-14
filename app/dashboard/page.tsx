'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
function dashboard() {
    const router = useRouter()
  return (
    <div>
      <button onClick={() => router.push('/contactUs')}>go to contact us</button>
      dashboard
    </div>
  )
}

export default dashboard
