'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
interface Person{
  name: string
}

function ContactUs() {
  const searchParams = useSearchParams();
  const personString = searchParams.get('person');
  
  if (personString !== null) {
    const result = JSON.parse(personString) as Person;
    console.log(result);
  }

  return (
    <div>
      ContactUs
    </div>
  );
}
  

export default ContactUs
