import React from 'react'

type TiposInput = {
    placeholder: string,
}

export default function Input({placeholder} : TiposInput) {
  return (
    <>
        <input placeholder={placeholder} className='rounded-md p-5 bg-white border border-[#C8C8C8] w-full max-w-[400px] placeholder:text-[#C8C8C8] shadow hover:shadow-xl/5 transition duration-300'>

        </input>
    </>
  )
}
