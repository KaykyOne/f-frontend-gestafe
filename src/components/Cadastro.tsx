import Image from 'next/image'
import React, { FormEvent } from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Add from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';

type TiposPage = {
    page: boolean,
    setPage: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Cadastro({ page, setPage }: TiposPage) {
    const router = useRouter();
    const cadastrar = (e: FormEvent) => {
        e.preventDefault();
        router.push('dashboard');
    }
    return (
        <div className='relative gap-3 flex w-full h-screen'>

            <div className='flex flex-1 flex-col items-center justify-start p-6 col-span-1 text-textLight w-full lg:max-w-[40%]'>
                <div className='w-full grid grid-cols-3 justify-center items-center'>
                    <div></div>
                    <div className='flex flex-1 items-center justify-center'>
                        <Image src={'/gestafepreto.png'} width={100} height={100} alt='logo' className='opacity-30 mt-5' />

                    </div>
                </div>
                <div className='flex flex-col flex-1 gap-3 items-center justify-center w-full !text-xl max-w-[400px]'>
                    <div className='flex flex-col w-full gap-0 p-0 mb-5'>
                        <h1 className='text-4xl  font-medium text-start w-full mb-4'>Cadastrar-se no <br /> <strong className='font-semibold text-8xl'>GestaFé</strong></h1>
                        <h3 className='text-textLight/80 text-lg'>Já tem uma conta? <strong className='hover:text-primary cursor-pointer transition-all duration-300' onClick={() => setPage(!page)}>Clique aqui!</strong></h3>
                    </div>
                    <form className='gap-2 flex flex-col w-full' action='POST' onSubmit={(e) => cadastrar(e)}>
                        <Input placeholder='Telefone' type='number' />
                        <Input placeholder='E-mail' type='email' />
                        <Input placeholder='CEP' type='number' />
                        <Input placeholder='CNPJ' />

                        <Button icon={<Add />}>
                            Cadastrar-se
                        </Button>
                    </form>

                    <p className="text-sm text-center">
                        Ao se cadastrar, você concorda com nossos{' '}<br />
                        <a className="uppercase font-semibold hover:font-bold transition-all duration-300 cursor-pointer">
                            Termos de Uso
                        </a>
                        .
                    </p>
                </div>
                <p className='text-sm font-light opacity-70'>Feito pela Ministerium</p>
            </div>

            <div className='bg-linear-240 from-[#363636] to-[#1F1F1F] col-span-1 flex-col max-w-[70%] flex-1 items-start justify-center text-textDark p-20 hidden xl:flex '>
                <div className='flex flex-col text-textDark gap-2 ml-10'>
                    <h1 className='text-6xl font-semibold'>A fé move as pessoas</h1>
                    <p className='text-2xl font-extralight'>E estamos aqui para ajudar você à se mover!</p>
                </div>
                <div className='flex flex-1 w-full'>
                    <Image src={'/imgCadastro.svg'} alt='img-login' height={100} width={100} className='flex flex-1 p-20' />
                </div>
            </div>
        </div>
    )
}
