import Head from "next/head";
import styles from "../styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-red-700 text-white text-center font-bold">Unfinished work <span>(some info might be inaccurate)</span></section>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className=" font-burtons text-xl dark:text-white">Ifeanyi Patrick</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href=""
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 dark:text-white">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Ifeanyi E. Patrick
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl ">Developer</h3>
            <p className="text-md py-5 leading-8 md:text-xl max-w-xl mx-auto">
              Freelancer providing services for programming and design content
              needs. Join me below and let's get cracking!
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-700 dark:text-white">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>

          <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div className="dark:text-white">
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a Freelancer designer and
              developer I've done remote work for
              <span className="text-teal-500"> agencies </span> consulted for{" "}
              <span className="text-teal-500"> startups </span>
              and colaborated with talented people to create digital for both
              business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex lg:gap-10 dark:text-white">
            <div className="text-center shadow-lg shadow-teal-900 p-10 rounded-xl my-10">
              <Image
                className="mx-auto"
                src={design}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-semibold pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Create elegant designs suited for your needs following core design theory.</p>
              <h4 className="py-1 text-teal-600">Design tools I use</h4>
              <p className="text-gray-200 py-1">Photoshop</p>
              <p className="text-gray-200 py-1">Illustrator</p>
              <p className="text-gray-200 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg shadow-teal-900 p-10 rounded-xl my-10">
              <Image
                className="mx-auto"
                src={code}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-semibold pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Create elegant designs suited for your needs following core design theory.</p>
              <h4 className="py-1 text-teal-600">Design tools I use</h4>
              <p className="text-gray-200 py-1">Photoshop</p>
              <p className="text-gray-200 py-1">Illustrator</p>
              <p className="text-gray-200 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg shadow-teal-900 p-10 rounded-xl my-10">
              <Image
                className="mx-auto"
                src={consulting}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-semibold pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Create elegant designs suited for your needs following core design theory.</p>
              <h4 className="py-1 text-teal-600">Design tools I use</h4>
              <p className="text-gray-200 py-1">Photoshop</p>
              <p className="text-gray-200 py-1">Illustrator</p>
              <p className="text-gray-200 py-1">Figma</p>
            </div>
            
            
          </div>
        </section>

        <section>
          <div className="dark:text-white">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                src={web1}
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                src={web2}
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                src={web3}
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                src={web4}
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                src={web5}
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                src={web6}
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
        <footer className="p-8 bg-black text-gray-300 font-semibold">
          <p>Made with Nextjs and tailwind css</p>
        </footer>
    </div>
  );
}
