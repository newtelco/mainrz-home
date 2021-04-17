import React, { useState } from 'react'
import Alert from './Alert'

const Contact = () => {
  const [agbAgree, setAgbAgree] = useState(false)
  const [openSentAlert, setOpenSentAlert] = useState(false)
  const [alert, setAlert] = useState({
    title: '',
    body: '',
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    msg: '',
  })

  const showAlert = (title, body) => {
    setAlert({
      title,
      body,
    })
    setOpenSentAlert(true)
    setTimeout(() => {
      setOpenSentAlert(false)
    }, 5000)
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (agbAgree) {
      fetch('/api/contact', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          formData,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.code === 200) {
            setFormData({
              name: '',
              email: '',
              phone: '',
              msg: '',
            })
            showAlert('Success', 'Info successfully sent!')
          } else {
            showAlert('Error', 'Info unsuccessfully sent')
          }
        })
    } else {
      showAlert('AGB', "Sie muessen zuerst die AGB's annehmen.")
    }
  }

  return (
    <section className='body-font relative text-gray-500'>
      <div className='sm:flex-no-wrap container flex flex-wrap mx-auto pb-24 pt-12 px-5 md:py-24'>
        <div className='relative flex items-end justify-start p-10 bg-gray-900 rounded-lg overflow-hidden md:w-1/2 lg:w-2/3'>
          <iframe
            width='100%'
            height='100%'
            title='map'
            className='absolute inset-0'
            frameBorder='0'
            marginHeight='0'
            marginWidth='0'
            scrolling='no'
            loading='lazy'
            // src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=NewTelco+GmbH+Frankfurt&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=Moenchhofstr24+Frankfurt+am+Main+60326`}
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.16)' }}
          ></iframe>
          <div className='relative flex flex-wrap py-6 bg-gray-900 rounded-md lg:w-2/3'>
            <div className='px-6 lg:w-1/2'>
              <h2 className='title-font text-white text-sm font-medium tracking-widest'>
                ADDRESS
              </h2>
              <a
                href='https://g.page/Newtelco?share'
                target='_blank'
                rel='noopener noreferrer'
                className='rounded focus:outline-none focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
              >
                <p className='font-thin leading-relaxed'>
                  Moenchhofstr. 24
                  <br />
                  60326 Frankfurt am Main
                  <br />
                  Germany
                </p>
              </a>
            </div>
            <div className='mt-4 px-6 lg:mt-0 lg:w-1/2'>
              <h2 className='title-font text-white text-sm font-medium tracking-widest'>
                EMAIL
              </h2>
              <a
                href='mailto:marketing@newtelco.de'
                className='text-newtelco-500 font-thin leading-relaxed rounded focus:outline-none focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
                target='_blank'
                rel='noopener noreferrer'
              >
                marketing@mainrz.de
              </a>
              <h2 className='title-font mt-4 text-white text-sm font-medium tracking-widest'>
                PHONE
              </h2>
              <p className='leading-relaxed'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='tel:0049697500270'
                  className='font-thin rounded focus:outline-none focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
                >
                  +49 69 75 00 27 20
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-8 w-full md:ml-auto md:mt-0 md:pl-8 md:py-4 md:w-1/2 lg:w-1/3'>
          <p className='mb-5 text-center text-gray-400 text-xl font-bold leading-relaxed'>
            Receive a free consultation from one of our expert sales engineers!
          </p>
          <p className='mb-5 text-center text-gray-400 font-thin'>
            Call us at{' '}
            <a
              alt='Call Jens Leuchters'
              href='tel:00496975002770'
              className='text-newtelco-500 font-bold'
            >
              069 75 00 27 20
            </a>{' '}
            or fill out the contact form below and we will get back to you as
            soon as possible!
          </p>
          <form action='/api/contact' method='post'>
            <div className='relative mb-4'>
              <label htmlFor='name' className='text-gray-400 text-sm leading-7'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='px-3 py-1 w-full text-gray-100 text-base font-thin leading-8 bg-gray-900 border border-gray-700 focus:border-newtelco-500 rounded outline-none transition-colors'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='email'
                className='text-gray-400 text-sm leading-7'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='px-3 py-1 w-full text-gray-100 text-base font-thin leading-8 bg-gray-900 border border-gray-700 focus:border-newtelco-500 rounded outline-none transition-colors'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='phone'
                className='text-gray-400 text-sm leading-7'
              >
                Phone
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='px-3 py-1 w-full text-gray-100 text-base font-thin leading-8 bg-gray-900 border border-gray-700 focus:border-newtelco-500 rounded outline-none transition-colors'
              />
            </div>
            <div className='relative mb-4'>
              <label htmlFor='msg' className='text-gray-400 text-sm leading-7'>
                Message
              </label>
              <textarea
                id='msg'
                name='msg'
                value={formData.msg}
                onChange={handleChange}
                className='px-3 py-1 w-full h-32 text-gray-100 text-base font-thin leading-6 bg-gray-900 border border-gray-700 focus:border-newtelco-500 rounded outline-none resize-none transition-colors'
              ></textarea>
            </div>
            <div className='relative flex flex-wrap justify-between'>
              <label htmlFor='agb' className='text-gray-500 text-xs'>
                <input
                  type='checkbox'
                  id='agb'
                  checked={agbAgree}
                  onChange={() => setAgbAgree(!agbAgree)}
                  className='form-checkbox focus:ring-offset mr-1 w-4 h-4 text-newtelco-500 bg-gray-400 border-gray-300 rounded focus:outline-none focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring'
                />
                I hereby allow Main RZ to save and use the above entered
                personal data for marketing purposes and agree to the{' '}
                <a
                  href='https://newtelco.com/data-privacy-policy/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline-none transitions-all text-newtelco-500 hover:underline rounded focus:outline-none focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring'
                >
                  data privacy policy
                </a>
                .
              </label>
              <div className='flex justify-between mt-4 w-full'>
                <button
                  action='submit'
                  onClick={e => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                  className='px-6 py-3 w-full text-white text-lg bg-newtelco-500 hover:bg-newtelco-600 border-0 rounded focus:outline-none transition-colors focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {openSentAlert && <Alert title={alert.title} body={alert.body} />}
    </section>
  )
}

export default Contact
