import Head from "next/head";
import React from "react";
import Headers from "@/components/headers";
import CardImage from "@/components/CardImage";

const Project = () => {

  return (
    <>
      <Head>
        <title>My Portofolio | My Project </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Headers />
        <div className="flex justify-center mt-5">
          <p className="text-2xl font-lilitaOne">
            My Project
          </p>
        </div>
        <div className="flex mt-14 ml-5 sm:ml-0">
          <div className="flex-1">
            <CardImage />
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
