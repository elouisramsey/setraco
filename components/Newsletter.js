import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Newsletter = () => {
  const initialValues = {
    email: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is Required')
  })

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    async onSubmit(values, { resetForm }) {
      resetForm({ values: '' })
    }
  })
  return (
    <div className='lg:px-28 px-8 py-28 bg-gray-50 flex flex-col justify-center'>
      <h1 className='text-sm text-pri uppercase font-medium md:text-4xl md:px-20 text-center'>
        get updates
      </h1>
      <p className='text-lg my-2 font-light text-gray-300 text-center'>
        Subscribe to our newsletter and stay up to date with the latest news!
      </p>
      <form
        onSubmit={handleSubmit}
        className='w-full flex justify-center my-16'
        autoComplete='off'
        method='post'
        id='form'
      >
        <div className='w-3/5'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-bg  capitalize'
          />
          <div className='flex border border-solid rounded-xl'>
            <input
              type='email'
              placeholder='Enter your email'
              onChange={handleChange}
              name='email'
              id='email'
              values={values.email}
              autoComplete='given-email'
              className='block w-full focus:ring-black md:text-sm text-tiny text-bg  bg-white focus:outline-none px-7'
            />
            <button
              type='submit'
              className='focus:outline-none text-white text-sm py-4 px-7 rounded-sm bg-pri hover:text-sec flex justify-between hover:bg-white justify-center items-center transition duration-150 ease-in-out capitalize'
            >
              subscribe
            </button>
          </div>
          <p className='text-red-600 text-xs my-2 text-light'>
            {errors.email && touched.email ? errors.email : null}
          </p>
        </div>
      </form>
    </div>
  )
}

export default Newsletter
