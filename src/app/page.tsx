import Image from 'next/image'
import React from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'

export default function page() {
  return (
    <div className='grid gap-3 grid-cols-1 xl:grid-cols-7 h-screen'>
      <div className='bg-linear-240 from-[#363636] to-[#1F1F1F] col-span-4 flex-col flex-1 items-start justify-center text-textDark p-20 hidden xl:flex'>
        <div className='flex flex-col text-textDark gap-2 ml-10'>
          <h1 className='text-6xl font-semibold'>A fé move as pessoas</h1>
          <p className='text-2xl font-extralight'>E estamos aqui para ajudar você à se mover!</p>
        </div>
        <div className='flex flex-1 w-full'>
          <Image src={'/imgLogin.svg'} alt='img-login' height={100} width={100} className='flex flex-1 p-20' />
        </div>
      </div>

      <div className='flex flex-1 flex-col items-center justify-start p-4 col-span-3 text-textLight'>
        <Image src={'/gestafepreto.png'} width={60} height={60} alt='logo' className='opacity-30' />
        <div className='flex flex-col flex-1 gap-3 items-center justify-center w-full'>
          <h1 className='text-5xl uppercase font-semibold mb-5'>Login</h1>
          <Input placeholder='Telefone / CNPJ' />
          <Input placeholder='Senha' />
          <Button>
            Confirmar
          </Button>
          <div className='group flex flex-col mt-5 opacity-70 hover:opacity-100 transition-all duration-300'>
            <p className='cursor-pointer'>Esqueceu a senha? <strong>Clique aqui!</strong></p>
            <div className='w-0 group-hover:w-full bg-textLight h-[1px] transition-all duration-300'></div>
          </div>
        </div>
        <p className='text-sm font-light opacity-70'>Feito pela Ministerium</p>
      </div>
    </div>
  )
}
