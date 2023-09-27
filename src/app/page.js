'use client';

import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ethan Muir Portfolio</title>
        <meta name="description" content="Generated by cre"></meta>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <main className="bg-white dark:bg-gray-800">

        <section className="min-h-screen">
          <nav className="pt-10 px-10 flex justify-between">
            <h1>                
              <a 
                  className="bg-white text-white font-semibold px-4 py-4 rounded-md "
                  href="../public/resume/resume.pdf" download
                >
                  Download Resume
                </a></h1>
            <ul className="flex items-center">
              <li className="text-black fixed z-50 rounded-xl hover:bg-white">
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"/>
              </li>
            </ul>
          </nav>
          <div className="bg-gradient-to-b from-blue-500 to-teal-200 pt-5 mt-10">
            
          </div>
          <div className="text-center p-10 md:px-20 lg:px-40">

            <div>
              <Image src="/headshot.png" width={300} height={300}  className="mx-auto pt-2 pb-5"/>
            </div>
            
            <h2 className="text-5xl py-2 text-blue-500 font-bold md:text-6xl">Ethan Muir</h2>
            
            <h3 className="text-xl px-14 mx-10 md:px-auto py-2 md:text-3xl text-black dark:text-white">Computer Engineering Student and Developer</h3>
            <p className="flex text-md px-16 md:px-auto py-5 leading-7 text-gray-800 md:text-xl lg:px-auto max-w-lg mx-auto dark:text-gray-500">
              Hi! I'm Ethan, a motivated 4th year computer engineering 
              honours student at the University of Guelph looking to apply an extensive skillset to your oganization
            </p>
          </div>
          <div className="text-5xl text-black flex justify-center gap-16 py-3">
            <a href="https://www.linkedin.com/in/ethan-muir/">
              <AiFillLinkedin className="cursor-pointer bg-gradient-to-b from-blue-500 to-teal-200 rounded hover:w-14 hover:h-14"/>
            </a>
            <a href="https://github.com/EthanMuir">
              <AiFillGithub className="cursor-pointer bg-gradient-to-b from-blue-500 to-teal-200 rounded hover:w-14 hover:h-14"/>
            </a>
          </div>
          <div className="bg-gradient-to-b from-blue-500 to-teal-200 pt-5 mt-10">
            
          </div>
          <section className="px-40">
          <div>
            <h3 className="text-5xl pt-10 mx-10 text-blue-500 font-bold">Work Experience</h3>
          </div>

          <div className="lg:flex gap-10 ">
            <div className="bg-gradient-to-b from-teal-200 to-blue-500 text-center shadow-lg p-10 rounded-xl my-10 mx-10 basis-1/2">
              <Image  src="/ncr.jpg" width={600} height={600} className="mx-auto shadow-lg rounded-xl" />
              <h3 className="text-2xl text-green-600 font-semibold pt-3">Skills:</h3>
              <p className="text-gray-800 py1 hover:text-xl">- REST APIs</p>
              <p className="text-gray-800 py1 hover:text-xl">- Object Oriented Programming (OOP)</p>
              <p className="text-gray-800 py1 hover:text-xl">- Apache Kafka</p>
              <p className="text-gray-800 py1 hover:text-xl">- YAML</p>
              <p className="text-gray-800 py1 hover:text-xl">- Google Cloud Platform (GCP)</p>
              <p className="text-gray-800 py1 hover:text-xl">- Docker</p>
              <p className="text-gray-800 py1 hover:text-xl">- Jenkins</p>
              <p className="text-gray-800 py1 hover:text-xl">- Kubernetes</p>
            </div>
            <div className="bg-gradient-to-b from-blue-500 to-teal-200 text-center shadow-lg p-10 rounded-xl my-10 mx-10 basis-1/2">
              <Image  src="/rogers.png" width={600} height={600} className="bg-white mx-auto shadow-lg rounded-xl" />
              <h3 className="text-2xl pt-3 text-red-500 font-semibold">Skills:</h3>
              <p className="text-gray-800 py1 hover:text-xl">- Github</p>
              <p className="text-gray-800 py1 hover:text-xl">- Object Oriented Programming (OOP)</p>
              <p className="text-gray-800 py1 hover:text-xl">- Mobile Development</p>
              <p className="text-gray-800 py1 hover:text-xl">- Swift</p>
              <p className="text-gray-800 py1 hover:text-xl">- Kotlin</p>
              <p className="text-gray-800 py1 hover:text-xl">- Agile</p>
              <p className="text-gray-800 py1 hover:text-xl">- Debugging</p>
            </div>
          </div>

          </section>
          <section className="px-40">
          <div>
            <h3 className="text-5xl py-10 px-10 text-blue-500 font-bold">Education</h3>
          </div>

          <div className="lg:flex gap-10">
            <div className="bg-gradient-to-b from-teal-200 to-blue-500 text-center shadow-lg p-10 rounded-xl my-10 mx-10 basis-1/2">
            <h2 className=" font-bold py-2 text-black">Software </h2>
              <Image  src="/software.png" width={200} height={200} className="bg-white mx-auto shadow-lg rounded-xl" />
              <h3 className="text-2xl font-semibold pt-3 text-black">Classes:</h3>
              <p className="text-gray-800 py1 hover:text-xl">- Object Oriented Programming (OOP)</p>
              <p className="text-gray-800 py1 hover:text-xl">- Large Scale Software Architecture Engineerimg</p>
              <p className="text-gray-800 py1 hover:text-xl">- Data Structures</p>
              <p className="text-gray-800 py1 hover:text-xl">- Algorithms</p>
              <p className="text-gray-800 py1 hover:text-xl">- Discrete Structures in Computing</p>
              <p className="text-gray-800 py1 hover:text-xl">- Operating Systems</p>
            </div>
            <div className="bg-gradient-to-b from-blue-500 to-teal-200 text-center shadow-lg p-10 rounded-xl my-10 mx-10 basis-1/2">
              <h2 className=" font-bold py-2 text-black">Hardware</h2>
              <Image  src="/hardware.png" width={200} height={200} className="bg-white mx-auto shadow-lg rounded-xl" />
              <h3 className="text-2xl pt-3 font-semibold text-black">Classes:</h3>
              <p className="text-gray-800 py1 hover:text-xl">- Embedded Reconfigurable Computing Systems</p>
              <p className="text-gray-800 py1 hover:text-xl">- Microcomputer Interfacing</p>
              <p className="text-gray-800 py1 hover:text-xl">- Digital System Design</p>
              <p className="text-gray-800 py1 hover:text-xl">- Computer Organization</p>
              <p className="text-gray-800 py1 hover:text-xl">- Micro and Nano Scale Electronics</p>
              <p className="text-gray-800 py1 hover:text-xl">- Electronic Devices</p>
            </div>
          </div>
          </section>
          <div className="bg-gradient-to-b from-blue-500 to-teal-200 p-10 mt-20">
          </div>
        </section>

      </main>
    </div>
  );
}
