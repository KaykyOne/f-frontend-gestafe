import React, { ReactNode } from 'react'

type TiposButton = {
    children: ReactNode,
}

export default function Button({ children }: TiposButton) {
    return (
        <>
            <button className='bg-primary rounded-md text-2xl p-5 w-full max-w-[400px] text-white hover:opacity-80 transition-all duration-300 cursor-pointer shadow hover:shadow-xl/5'>
                {children}
            </button>
        </>
    )
}
