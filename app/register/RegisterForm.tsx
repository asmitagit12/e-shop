'use client'

import { useState } from 'react'
import Heading from '../components/Heading'
import Input from '../components/inputs/Input'
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form'
import Button from '../components/Button'
import Link from 'next/link'
import { AiOutlineGoogle } from 'react-icons/ai'

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true)
    console.log(data)
  }

  return (
    <>
      <div className='flex flex-col gap-3 w-[90%] p-8 items-center'>
        <Heading title='Sign up for E-Shop' />
        <Button
          label='Sign up with Google'
          icon={AiOutlineGoogle}
          onClick={() => {}}
        />
        <hr className='bg-slate-300 w-full h-px' />
        <Input
          id='name'
          label='Name'
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id='email'
          label='Email'
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id='password'
          label='Password'
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          type='password'
        />
        <Button
          label={isLoading ? 'Loading..' : 'Sign Up'}
          onClick={handleSubmit(onSubmit)}
        />
        <p className='text-sm p-3'>
          Already have an account?{' '}
          <Link className='underline' href={'/login'}>
            Log in
          </Link>
        </p>
      </div>
    </>
  )
}

export default RegisterForm
