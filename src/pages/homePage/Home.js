import React from 'react'
import About from './About'
import Slider from './Slider'
import Aboutin from './Aboutin'
import Aboutout from './Aboutout'
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex flex-col'>
            <div className='bg-[#1f252a] flex justify-center items-center p-4'>
                <div className='text-white text-center'>

                    <div className='font-bold text-7xl py-10'>Bloggers</div>
                    <div className='w-[20rem] md:w-[30rem]   lg:w-[40rem] py-4'>
                        Des del panell de control podeu personalitzar tot el que
                        voleu saber dels vostres visitants afegint camps adicionals a les reserves,
                        tant si són directament a taquilla o per internet.
                    </div>
                    <div className='flex justify-center items-center space-x-4 pt-4'>
                        
                        <Link to='/blog'>

                            <div className='bg-[#e97442] py-2 px-5 rounded'>
                            Home pages
                            </div>
                        </Link>
                        <Link to='/login'>
                            <div className='bg-[#e97442] py-2 px-5 rounded'>
                                Login

                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <About />
            </div>
            <div>
                <Slider />
            </div>
            <div>
                <Aboutin />
            </div>
            <div>
                <Aboutout />
            </div>
            <div>
                <About />
            </div>
        </div>
    )
}

export default Home
