import React from "react";
import Image from "next/image";

const CardImage = () => {
  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:px-5">
        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 group relative block overflow-hidden rounded-md transition-all duration-500">
          <a
            className=" transition-all duration-500 group-hover:scale-105 tobii-zoom"
            href="https://challenge-04-todoapp-j10nukeoa-zakikurniawan27.vercel.app/"
          >
            <Image
              width={500}
              height={0}
              src="/assets/image/projectku1.jpg"
              alt="fotoProject"
            />
            <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-300 group-hover:bg-cyan-500 p-4 rounded shadow ">
              <p className="text-lg text-white transition duration-300 font-medium">
                TodoList App
              </p>
            </div>
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 group relative block overflow-hidden rounded-md transition-all duration-500">
          <a
            className=" transition-all duration-500 group-hover:scale-105 tobii-zoom"
            href="https://movie-list-react-app.vercel.app/"
          >
            <Image
              width={500}
              height={0}
              src="/assets/image/projectku2.jpg"
              alt="fotoProject"
            />
            <div className="absolute -bottom-52 group-hover:bottom-2 left-2 right-2 transition-all duration-300 group-hover:bg-red-600 p-4 rounded shadow ">
              <p className="text-lg text-white transition duration-300 font-medium">
                MovieList App
              </p>
            </div>
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 group relative block overflow-hidden rounded-md transition-all duration-500">
          <a
            className=" transition-all duration-500 group-hover:scale-105 tobii-zoom"
            href="https://flytick-finalproject.vercel.app/"
          >
            <Image
              width={500}
              height={0}
              src="/assets/image/projectku3.jpg"
              alt="fotoProject"
            />
            <div className="absolute -bottom-52 group-hover:bottom-2 left-2 right-2 transition-all duration-300 group-hover:bg-green-600 p-4 rounded shadow ">
              <p className="text-lg text-white transition duration-300 font-medium">
                FlyTick App
              </p>
            </div>
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 group relative block overflow-hidden rounded-md transition-all duration-500">
          <a
            className=" transition-all duration-500 group-hover:scale-105 tobii-zoom"
            href="https://zakikurniawan27.github.io/challenge-01-new/"
          >
            <Image
              width={500}
              height={0}
              src="/assets/image/projectku4.png"
              alt="fotoProject"
            />
            <div className="absolute -bottom-52 group-hover:bottom-2 left-2 right-2 transition-all duration-300 group-hover:bg-blue-600 p-4 rounded shadow ">
              <p className="text-lg text-white transition duration-300 font-medium">
                Rental Mobil Styling
              </p>
            </div>
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 group relative block overflow-hidden rounded-md transition-all duration-500">
          <a
            className=" transition-all duration-500 group-hover:scale-105 tobii-zoom"
            href="https://simple-calculator-murex-one.vercel.app/"
          >
            <Image
              width={500}
              height={0}
              src="/assets/image/projectku5.png"
              alt="fotoProject"
            />
            <div className="absolute -bottom-52 group-hover:bottom-2 left-2 right-2 transition-all duration-300 group-hover:bg-warna1 p-4 rounded shadow ">
              <p className="text-lg text-white transition duration-300 font-medium">
                Simple Calculator
              </p>
            </div>
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 group relative block overflow-hidden rounded-md transition-all duration-500">
          <a
            className=" transition-all duration-500 group-hover:scale-105 tobii-zoom"
            href="https://cooking-time-app.vercel.app/"
          >
            <Image
              width={500}
              height={0}
              src="/assets/image/projectku6.png"
              alt="fotoProject"
            />
            <div className="absolute -bottom-52 group-hover:bottom-2 left-2 right-2 transition-all duration-300 group-hover:bg-orange-500 p-4 rounded shadow ">
              <p className="text-lg text-white transition duration-300 font-medium">
                Cooking Time App
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default CardImage;
