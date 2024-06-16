'use client'
import Link from 'next/link'
import React from 'react'
function Links() {
    const links=[
        {
name:"Home",
href:"/",
        },
        {
name:"About",
href:"/about",
        },
        {
name:"Contact Us",
href:"/contactUs",
        }
        

    ]
  return (
    <div>
      {links.map((link)=>(
        <Link key={link.name} href={link.href}>{link.name}</Link>

      ))}   
    </div>
  )
}

export default Links
