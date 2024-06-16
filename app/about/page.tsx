import Link from 'next/link'
import React from 'react'
const person = {
    name: "aimon",
    age: 22
  }
function About() {
  return (
    <div>
    About
    <Link href="/" className="text-blue-500" >go to home</Link>
    <Link href={{ pathname: "/contactUs", query: { person:JSON.stringify(person) }}}>go to contact us</Link>
    <Link href="/dashboard" scroll>
      Dashboard
    </Link>

    </div>
  )
}

export default About
