import React from 'react';

export default function Field(props) {
  return (
    <div className='rounded w-1/12 h-3/6 flex flex-row justify-center items-center bg-emerald-500'>
        <input
        className='w-1/2 text-5xl pl-2 rounded bg-emerald-500 outline-none caret-emerald-500 text-white z-10'
        type={'text'}
        maxLength={1}
        ref={props.inputRef}
        value={props.value}
        onChange={props.onChange}
        />
    </div>
  );
}


// w-full h-full text-5xl px-14 bg-slate-100 border border-slate-100 rounded caret-slate-100 outline-none