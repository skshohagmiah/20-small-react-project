'use client';
import React, { useState } from 'react'

const MultiSelect = () => {
    const [multipleInput, setMultipleInput] = useState<string[]>([])



    const handleMultipleSelect = (e:any) => {
        const newMultipleInput = [...multipleInput];
        const alreadyExistId = newMultipleInput.findIndex(item => item === e?.target.value)

        if(alreadyExistId !== -1) return

        if(e.target.value === '') return

        newMultipleInput.push(e.target.value)
        setMultipleInput(newMultipleInput)

    }

    const deleteInput = (input:string) => {
        const newMultipleInput = multipleInput.filter(item => item !== input)
        setMultipleInput(newMultipleInput)
    }

  return (
    <div className='h-full flex items-center justify-center flex-col gap-2'>
        <h2>Input Multi Selection</h2>
        <div className='min-w-[20rem] w-auto flex items-center justify-start gap-2  p-4 rounded-md bg-white'>
            {multipleInput.map((item,index) => (
                <p className='p-2 rounded-md bg-slate-400 flex items-center justify-between gap-2' key={index}>{item} <span onClick={() => deleteInput(item)} className='p-2 text-white bg-red-500 rounded-md'>X</span></p>
            ))}
            <select onChange={handleMultipleSelect} name="" id="" className='w-full p-4 rounded-md'>
                <option value="">Select an Option</option>
                <option value="value1">value1</option>
                <option value="value2">value2</option>
                <option value="value3">value3</option>
                <option value="value4">value4</option>
            </select>
        </div>
    </div>
  )
}

export default MultiSelect