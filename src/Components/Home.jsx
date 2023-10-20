import React from 'react'
import Head from './Head'
import Fetch from '../API/Fetch'

const Home = () => {
  return (
    <div className='bg-gray-200'>
        <Head />
       <Fetch />
    </div>
  )
}

export default Home