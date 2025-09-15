import React from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

type TiposInput = {
  placeholder: string,
  type?: string,
}

export default function Input({ placeholder, type = 'text' }: TiposInput) {
  return (
    <>
      {type == 'telefone' ? (
        <PhoneInput
          country={'br'}
          enableSearch
          countryCodeEditable={false}
          placeholder='Telefone'
          inputStyle={{
            padding: '0.75rem',
            border:'none',
            backgroundColor: 'white',
            fontSize: 20,
            borderBottom: '1px solid #C8C8C8',
            width: '100%',
            maxWidth: '400px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          }}
          buttonStyle={{
            backgroundColor: 'white',
            width: '50px',
            border: 'none'
          }}
          dropdownClass="bg-white"
        />

      ) : (
        <input placeholder={placeholder} type={type} className='p-3 bg-white border-b border-[#C8C8C8] w-full max-w-[400px] placeholder:text-[#C8C8C8] shadow hover:shadow-xl/5 transition duration-300 focus:bg-neutral-100 focus:shadow-xl/5'>

        </input>
      )}
    </>
  )
}
