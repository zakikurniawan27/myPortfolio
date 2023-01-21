import Head from "next/head";
import React from "react";
import Headers from "@/components/Headers";
import fotoku3 from "../assets/image/fotoku3.jpg";

const About = () => {
  return (
    <>
      <Head>
        <title>My Portofolio | About </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="container">
        <Headers />
        <div className="relative top-24 flex justify-center transition-all">
          <div className="sm:relative sm:left-10">
            <div className="flex justify-center">
              <img
                className="rounded-full w-60 h-60"
                src={fotoku3.src}
                alt="fotoku3"
              />
            </div>
            <div className="mt-5">
              <p className="text-xl font-semibold font-SourceSansPro text-center">
                Hi, i{`'`}m Zaki, nice to meet you !
              </p>
              <p className="text-md text-center italic mt-5 w-128 sm:w-72 md:w-96">
                {`"`}I am an 8th semester informatics student from Muhammadiyah
                University Malang who has motivation to develop self-potential.
                Have a high interest in the field of frontend. Frequently attend
                seminars and Frontend related workshops. in 2022 i took part in
                a javascript frontend bootcamp at binar academy.{`"`}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;