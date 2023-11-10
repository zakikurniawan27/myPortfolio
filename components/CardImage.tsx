import React from 'react'
import projectku1 from '../assets/image/projectku1.jpg'
import projectku2 from '../assets/image/projectku2.jpg'
import projectku3 from '../assets/image/projectku3.jpg'

const CardImage = () => {
  return (
    <>
        <div className='flex justify-start sm:justify-center md:justify-start space-x-4'>
            <div className='w-1/3 sm:w-11/12 md:w-1/3 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 group relative block overflow-hidden rounded-md transition-all duration-500'>
                <a className=' transition-all duration-500 group-hover:scale-105 tobii-zoom' href='https://challenge-04-todoapp-j10nukeoa-zakikurniawan27.vercel.app/'>
                    <img src='/assets/image/projectku1.jpg' alt='fotoProject'/>
                    <div className='absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-300 group-hover:bg-cyan-500 p-4 rounded shadow '>
                        <p className='text-lg text-white transition duration-300 font-medium'>
                            TodoList App
                        </p>
                    </div>
                </a>
            </div>
            <div className='w-1/3 sm:w-11/12 md:w-1/3 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 group relative block overflow-hidden rounded-md transition-all duration-500'>
                <a className=' transition-all duration-500 group-hover:scale-105 tobii-zoom' href='https://movielist-app-challenge-07.vercel.app/'>
                    <img src='/assets/image/projectku2.jpg' alt='fotoProject'/>
                    <div className='absolute -bottom-52 group-hover:bottom-2 left-2 right-2 transition-all duration-300 group-hover:bg-red-600 p-4 rounded shadow '>
                        <p className='text-lg text-white transition duration-300 font-medium'>
                            MovieList App
                        </p>
                    </div>
                </a>
            </div>
            <div className='w-1/3 sm:w-11/12 md:w-1/3 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 group relative block overflow-hidden rounded-md transition-all duration-500'>
                <a className=' transition-all duration-500 group-hover:scale-105 tobii-zoom' href='https://flytick.km3ggwp.com/'>
                    <img src='/assets/image/projectku3.jpg' alt='fotoProject'/>
                    <div className='absolute -bottom-52 group-hover:bottom-2 left-2 right-2 transition-all duration-300 group-hover:bg-green-600 p-4 rounded shadow '>
                        <p className='text-lg text-white transition duration-300 font-medium'>
                            FlyTick App
                        </p>
                    </div>
                </a>
            </div>
        </div>
        <div className='flex mt-10'>
            <div className='w-1/3 sm:w-11/12 md:w-1/3 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 group relative block overflow-hidden rounded-md transition-all duration-500'>
                <a className=' transition-all duration-500 group-hover:scale-105 tobii-zoom' href='https://zakikurniawan27.github.io/challenge-01-new/'>
                    <img src='/assets/image/projectku4.png' alt='fotoProject'/>
                    <div className='absolute -bottom-52 group-hover:bottom-2 left-2 right-2 transition-all duration-300 group-hover:bg-blue-600 p-4 rounded shadow '>
                        <p className='text-lg text-white transition duration-300 font-medium'>
                            Rental Mobil
                        </p>
                    </div>
                </a>
            </div>
        </div>
        {/* <div className='flex justify-end sm:justify-center md:justify-end mt-10'>
            
        </div> */}
    </>
  )
}

export default CardImage