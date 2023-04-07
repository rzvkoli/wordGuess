import React from 'react';
import Button from '@mui/material/Button';
import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function StartPage() {

    const navigate = useNavigate();

    window.addEventListener('keypress' , (e) => {
        if(e.key === 'Enter'){
            navigate('/game', { replace: true });
        }
    })
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center font-Fredoka uppercase bg-cyan-950'>
        <div className='flex flex-col justify-center items-center w-1/2 h-1/2 gap-1 text-white'>
            <div className='flex flex-row justify-center items-center gap-1 w-full h-2/6'>
                <div className='rounded w-2/12 h-full flex flex-row justify-center items-center bg-emerald-500'>
                    <p className='text-5xl'>
                        w
                    </p>
                </div>
                <div className='rounded w-2/12 h-full flex flex-row justify-center items-center backdrop-blur bg-white/10'>
                    <p className='text-5xl'>
                        o
                    </p>
                </div>
                <div className='rounded w-2/12 h-full flex flex-row justify-center items-center backdrop-blur bg-white/10'>
                    <p className='text-5xl'>
                        r
                    </p>
                </div>
                <div className='rounded w-2/12 h-full flex flex-row justify-center items-center bg-emerald-500'>
                    <p className='text-5xl'>
                        d
                    </p>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-1 w-full h-2/6'>
                <div className='rounded w-2/12 h-full flex flex-row justify-center items-center bg-amber-400'>
                    <p className='text-5xl'>
                        g
                    </p>
                </div>
                <div className='rounded w-2/12 h-full flex flex-row justify-center items-center backdrop-blur bg-white/10'>
                    <p className='text-5xl'>
                        u
                    </p>
                </div>
                <div className='rounded w-2/12 h-full flex flex-row justify-center items-center backdrop-blur bg-white/10'>
                    <p className='text-5xl'>
                        e
                    </p>
                </div>
                <div className='rounded w-2/12 h-full flex flex-row justify-center items-center bg-amber-400'>
                    <p className='text-5xl'>
                        s
                    </p>
                </div>
                <div className='rounded w-2/12 h-full flex flex-row justify-center items-center bg-amber-400'>
                    <p className='text-5xl'>
                        s
                    </p>
                </div>
            </div>   
        </div>
        <div className='w-1/2 h-1/6 flex flex-row justify-center items-center'>
            <Stack spacing={2} direction="row" className='!w-3/12'>
                <Button variant="outlined" className='!w-full !h-full !text-xl !p-2 !border-hidden !bg-emerald-500 !font-Fredoka'>
                    <Link to={'/game'} className='!w-full !h-full !text-white text-2xl'>
                        Play
                    </Link>
                </Button>
            </Stack>
        </div>
    </div>
  );
}
