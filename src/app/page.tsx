"use client"
import Cadastro from '@/components/Cadastro'
import Login from '@/components/Login'
import React, { useState } from 'react'

export default function page() {
  const [page, setPage] = useState<boolean>(false)

  return (
    <div className='flex flex-1 h-full'>
      {!page ? (
        <div className={`${!page && "sumir"} flex-1`}>
          <Login page={page} setPage={setPage}/>
        </div>
      ) :
        (
          <div className={`${page && "sumir"} flex-1`}>
            <Cadastro page={page} setPage={setPage}/>
          </div>
        )}

    </div>
  )
}
