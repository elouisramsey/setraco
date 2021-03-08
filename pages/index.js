import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Mission from '../components/Mission'
import Newsletter from '../components/Newsletter'
import ServicesHome from '../components/ServicesHome'
import Slider from '../components/Slider'

const index = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Mission />
        <Slider />
        <ServicesHome />
        <Newsletter />
      </Layout>
    </>
  )
}

export default index
