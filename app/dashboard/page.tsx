'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
function dashboard() {
    const router = useRouter()
    console.log(router)
  return (
    <div>
      <button onClick={() => router.push('/contactUs')}>go to contact us</button>
      dashboard
    </div>
  )
}

export default dashboard
