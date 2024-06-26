import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className='bg-[#ffff] p-2'>
        <div className='flex flex-col md:flex-row justify-around items-center'>

            <div className='text-[#242b31] text-4xl font-bold'>
                Bloggers
            </div>
            <div className='text-center'>

                <div className='text-[#242b31] text-2xl font-bold py-2'>
                    phonenumber
                </div>
                <div className='py-1 text-[#fc8f55]'>
                    Links
                </div>
            </div>
            <div>
                <div>
                    social media
                </div>
            </div>
            <div className=''>
                <Link to='/profileblogs'>
                    <button className='bg-[#242b31] py-2 px-5 rounded text-white font-semibold uppercase'>
                        REspective blog of a singleone

                    </button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default About
