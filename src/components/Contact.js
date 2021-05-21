import React, { useRef, useEffect } from 'react'
import { run } from 'tripetto-runner-autoscroll'
import { Export } from 'tripetto-runner-foundation'

const Contact = ({ content }) => {
  const container = useRef()

  useEffect(() => {
    run({
      element: container.current,
      definition: {
        name: 'MainRZ',
        language: 'en',
        epilogue: {
          title:
            'Thanks for taking the time to fill out this form, one of our expert sales managers will be in touch shortly!',
          image: 'https://imgur.com/FM9VabR.png',
        },
        clusters: [
          {
            id:
              'ebef07c003034dace7a6e904e9444302dbcdaa92435018f6268e00292048f884',
            name: '👋 Hi there! Click the block below to start',
            nodes: [
              {
                id:
                  'f03a572dbdada5317e43d9be46a65e80a0fb2e71872c0fa48c5ef2fc3746dfb2',
                name:
                  'Want to talk with one of our sales experts about how we can help you and your business? Lets start here!',
                nameVisible: true,
              },
            ],
          },
          {
            id:
              'd506644321bf1cf83b226a6eb76c4c46a7d22edd6608dc900db112d1e79a5d68',
            name: 'Name',
            nodes: [
              {
                id:
                  'ff9f302c776aa5742e2684fad3f4238868129977fede18e1af8a625b46bea434',
                name: "What's your name?",
                nameVisible: true,
                slots: [
                  {
                    id:
                      '5c4faf8953d13a5a8189f35620b9adea345e04b0515a86dbdf6317b2f6421657',
                    type: 'text',
                    kind: 'static',
                    reference: 'value',
                    label: 'Text',
                  },
                ],
                block: {
                  type: 'tripetto-block-text',
                  version: '5.0.0',
                  autoComplete: 'name',
                },
              },
            ],
          },
          {
            id:
              '954b75d1e523de6f71927d2544ccdcf1fc5792ac0da457fe8a4ce5dda7e8babd',
            name: 'Feature',
            nodes: [
              {
                id:
                  'f04f5f83b57388422f868e7d2281c43cc5a746a363676ca6eeaae53f21797318',
                name:
                  'Nice to meet you, @5c4faf8953d13a5a8189f35620b9adea345e04b0515a86dbdf6317b2f6421657 !\n\nHow can MainRZ help you?',
                nameVisible: true,
                slots: [
                  {
                    id:
                      'aca9d7112087724d88a1bd5300074179a40856ec1c57b7ad7d74a7f44aba1024',
                    type: 'string',
                    kind: 'static',
                    reference: 'choice',
                    label: 'Image',
                  },
                ],
                block: {
                  type: 'tripetto-block-picture-choice',
                  version: '3.0.0',
                  choices: [
                    {
                      id:
                        '535d41dabd222f032f7855a44de6771a7f274e22f4f39017a4d918b4ba4b9cf5',
                      name: 'Network Hardware',
                      nameVisible: true,
                      image:
                        'https://www.networking-hardware.com/assets/img/seriesImages/product_data_sheet0900aecd806b0bd8_0.jpg',
                    },
                    {
                      id:
                        'a424b9e499f5d9d0d4dbf59e030fed692d09cdfc64b2f00a94ec9a500edbe2ce',
                      name: 'Servers',
                      nameVisible: true,
                      image:
                        'https://www.cisco.com/c/dam/en/us/support/web/images/series/servers-unified-computing-ucs-c-series-rack-servers.jpg',
                    },
                    {
                      id:
                        'c81a59ff12f92ed258d333faeacae2fbd7584158ab2bd88a41eef2e6c8e07998',
                      name: 'Connectivity',
                      nameVisible: true,
                      image:
                        'https://www.imago-images.de/bild/st/0087358737/w.jpg',
                    },
                    {
                      id:
                        '8e720f52be9f46f0d59df58527ec86494d54799fc9492c9e94d42e30cd7bdabe',
                      name: 'Other',
                      nameVisible: true,
                      image:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsBafSIJMB3E9ogXjZZDX0Q4w0nTIP_jaZQ&usqp=CAU',
                    },
                  ],
                },
              },
            ],
          },
          {
            id:
              '321d508ce50cba8332e73242c59b75f9c34ce006b76f4f32e044b7e1dcbfc40a',
            name: 'ContactMethod',
            nodes: [
              {
                id:
                  'f6815dbc648f4572672a290cc343b4ac0e813b341960f0735341f629a1a916dd',
                name: 'How can we get a hold of you?',
                nameVisible: true,
                description: 'Phone number or email address please',
                slots: [
                  {
                    id:
                      '3b7b444e747733e75e56e25bcefbfe9dc2ff4845e31ad093cd07e0e9f5e190d8',
                    type: 'text',
                    kind: 'static',
                    reference: 'value',
                    label: 'Text',
                  },
                ],
                block: { type: 'tripetto-block-text', version: '5.0.0' },
              },
            ],
          },
        ],
        builder: { name: 'tripetto', version: '4.0.0' },
      },
      styles: {
        direction: 'vertical',
        verticalAlignment: 'middle',
        hidePast: false,
        hideUpcoming: false,
        showNavigation: 'auto',
        showProgressbar: true,
        showEnumerators: true,
        autoFocus: false,
        showSeparateSubmit: false,
        showPreviousButton: true,
        showScrollbar: false,
        disableScrolling: false,
        noBranding: true,
        contract: { name: 'tripetto-runner-autoscroll', version: '5.0.0' },
        buttons: {
          mode: 'fill',
          roundness: 8,
          baseColor: '#67b246',
          textColor: '#ffffff',
        },
        font: { size: 14 },
        color: '#ccc',
        inputs: {
          borderSize: 1,
          roundness: 8,
          textColor: '#fff',
          errorColor: 'red',
          agreeColor: 'green',
          declineColor: 'red',
        },
      },
      onSubmit: instance => {
        const fields = Export.fields(instance)
        const name = fields.fields[0].string
        const service = fields.fields[1].string
        const contact = fields.fields[2].string
        fetch('/api/notion', {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            name,
            service,
            contact,
          }),
        })
      },
    })
  }, [])

  return (
    <section className='body-font relative text-gray-500 lg:mt-36'>
      <div className='sm:flex-no-wrap container flex flex-wrap mx-auto pb-24 pt-12 px-5 md:py-24'>
        <div className='relative flex items-end justify-start mx-8 p-10 w-full h-96 bg-gray-900 rounded-lg overflow-hidden md:mx-0 md:w-1/2 md:h-auto lg:w-2/3'>
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
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=Am+Kieswerk+12+63791+Karlstein+am+Main`}
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
                className='rounded focus:outline-none outline-none transition-shadow duration-500 focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
              >
                <p
                  className='font-thin leading-relaxed'
                  dangerouslySetInnerHTML={{
                    __html: content?.StreetAddress.replace('\n', '<br />'),
                  }}
                />
              </a>
            </div>
            <div className='mt-4 px-6 lg:mt-0 lg:w-1/2'>
              <h2 className='title-font text-white text-sm font-medium tracking-widest'>
                EMAIL
              </h2>
              <a
                href={`mailto:${content?.EmailAddress}`}
                className='text-newtelco-500 font-thin leading-relaxed rounded focus:outline-none transition-shadow duration-500 focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
                target='_blank'
                rel='noopener noreferrer'
              >
                {content?.EmailAddress}
              </a>
              <h2 className='title-font mt-4 text-white text-sm font-medium tracking-widest'>
                PHONE
              </h2>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={`tel:${content?.PhoneNumber.split(' ').join('')}`}
                className='font-thin rounded focus:outline-none outline-none transition-shadow duration-500 focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
              >
                {content?.PhoneNumber}
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col align-bottom mt-8 px-8 w-full md:ml-auto md:mt-0 md:pl-8 md:px-0 md:w-1/2 lg:w-1/3'>
          <div
            ref={container}
            style={{ height: '800px', width: '400px' }}
            className='p-12 bg-gray-800 bg-opacity-40 rounded-xl overflow-hidden'
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
