import React from 'react'
import NextHead from 'next/head'

const Head = () => (
  <NextHead>
    <meta charSet='UTF-8' />
    {/* <!-- HTML Meta Tags --> */}
    <title>SETRACO</title>
    <meta
      name='description'
      content='Setraco Nigeria Limited is a leading engineering construction company with over 35 years of working experience in delivering value-added civil and infrastructural projects. With projects executed successfully in over 20 states, and its current presence in 15 states, Setraco has played a key role in developing Nigeria’s infrastructure.'
    />

    {/* <!-- Google / Search Engine Tags --> */}
    <meta itemProp='name' content='SETRACO' />
    <meta
      itemProp='description'
      content='Setraco Nigeria Limited is a leading engineering construction company with over 35 years of working experience in delivering value-added civil and infrastructural projects. With projects executed successfully in over 20 states, and its current presence in 15 states, Setraco has played a key role in developing Nigeria’s infrastructure.'
    />
    <meta
      itemProp='image'
      content='https://res.cloudinary.com/walking-voice-limited/image/upload/c_fit,q_auto,w_260/v1614680140/setraco/setraco_igbscy.webp'
    />

    {/* <!-- Facebook Meta Tags --> */}
    <meta property='og:url' content='http://setraco.net' />
    <meta property='og:type' content='website' />
    <meta property='og:title' content='SETRACO' />
    <meta
      property='og:description'
      content='Setraco Nigeria Limited is a leading engineering construction company with over 35 years of working experience in delivering value-added civil and infrastructural projects. With projects executed successfully in over 20 states, and its current presence in 15 states, Setraco has played a key role in developing Nigeria’s infrastructure.'
    />
    <meta
      property='og:image'
      content='https://res.cloudinary.com/walking-voice-limited/image/upload/c_fit,q_auto,w_260/v1614680140/setraco/setraco_igbscy.webp'
    />

    {/* <!-- Twitter Meta Tags --> */}
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:title' content='SETRACO' />
    <meta
      name='twitter:description'
      content='Setraco Nigeria Limited is a leading engineering construction company with over 35 years of working experience in delivering value-added civil and infrastructural projects. With projects executed successfully in over 20 states, and its current presence in 15 states, Setraco has played a key role in developing Nigeria’s infrastructure.'
    />
    <meta
      name='twitter:image'
      content='https://res.cloudinary.com/walking-voice-limited/image/upload/c_fit,q_auto,w_260/v1614680140/setraco/setraco_igbscy.webp'
    />

    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta httpEquiv='Accept-CH' content='DPR, Width' />
    <link rel='preconnect' href='https://fonts.gstatic.com' />
    <link
      href='https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap'
      rel='stylesheet'
    />
    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
    <link rel='manifest' href='/site.webmanifest' />
    <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
    <meta name='msapplication-TileColor' content='#da532c' />
    <meta name='theme-color' content='#ffffff' />
  </NextHead>
)

export default Head
