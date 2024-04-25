'use client'
import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch('api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          message
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
      if (res.status === 200) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
        }
          , 5000)
      }
    } catch (err: any) {
      console.error('Err', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitting) {
    return (
      <motion.div
        className='text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Submitting...
      </motion.div>
    )
  }
  return submitted ? (
    <motion.div
        className='text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <h1
        className="text-center font-semibold text-3xl
      "
      >
        Thank you for your message!
      </h1>
    </motion.div>
  ) : (
    <motion.form
    onSubmit={onSubmit}
    className='sm:grid md:grid-cols-2 gap-8 items-start'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <div>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className='focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block  w-full rounded-lg border border-gray-500 p-5 text-sm placeholder-gray-400 shadow-sm'
          placeholder='Name*'
        />
      </div>
      <div>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className='focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block  w-full rounded-lg border  border-gray-500 p-5 text-sm placeholder-gray-400 shadow-sm'
          placeholder='Email*'
        />
      </div>
      <div>
        <input
          type='tel'
          className='focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block  w-full rounded-lg border  border-gray-500 p-5 text-sm placeholder-gray-400 shadow-sm'
          placeholder='Phone*'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          className='focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block  w-full rounded-lg border  border-gray-500 p-5 text-sm placeholder-gray-400 shadow-sm'
          placeholder='Company'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className='sm:col-span-2'>
        <textarea
          className='focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block  w-full rounded-lg border  border-gray-500 p-5 text-sm placeholder-gray-400 shadow-sm'
          placeholder='Message*'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={10}
        ></textarea>

      </div>
      <button
        type='submit'
        className='font-semibold text-lg block transform rounded-full border-2 border-stone-900 bg-stone-900 px-8 py-4 text-white shadow transition duration-300 hover:scale-105'
      >
        Send Message
      </button>
    </motion.form>
  )
}

export default ContactForm
