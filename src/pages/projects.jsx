import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GithubIcon } from '@/components/ExtraIcons'
import image1 from "../../public/project-images/project1.png"
import image2 from "../../public/project-images/project2.png"
import image3 from "../../public/project-images/project3.png"
import image4 from "../../public/project-images/project4.png"
import image5 from "../../public/project-images/project5.png"

const FramerImage = motion(Image);

const ProjectItem = ({title, summary, image, demolink, githublink}) => {
    return (
        <div
        className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-6 relative my-10">
            <Link href={demolink} target="_blank"
            className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={image} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}} transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <Link href={demolink} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold text-dark dark:text-light">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={demolink} target="_blank" className="rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 text-lg font-semibold hover:scale-105 duration-200">
                        Demo
                    </Link>
                    
                    <Link href={githublink} target="_blank" className="flex items-center justify-center bg-dark text-light dark:bg-light dark:text-dark rounded-xl p-1 hover:scale-105 duration-200">
                        <GithubIcon width={30} height={30} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Yeoh Han Yi</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="../../public/favicon.ico" />
        </Head>
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center text-dark dark:text-light">
            <Layout className="pt-16">
                <AnimatedText text="Projects" className="mb-16 sm:mb-8" />

                <div className="grid grid-cols-12 gap-6">
                        
                        <div className="col-span-6 lg:col-span-12"><ProjectItem
                        title="Portfolio Website V2"
                        summary="My second attempt at building a portfolio website, this time using the Next.js React framework and Tailwind with more focus on responsiveness. A few extra packages were used such as framer motion and it served as an introduction to React hooks."
                        image={image5}
                        demolink="https://www.google.com"
                        githublink="https://www.google.com"
                        /></div>
                        
                        <div className="col-span-6 lg:col-span-12"><ProjectItem 
                        title="Tensorflow Digits Predictor"
                        summary="A simple HTML, CSS and Javascript webapp that imports a trained Tensorflow CNN model and uses it to predict a digit drawn on a canvas object with mouse/touch input. The confidence of the model is then plotted using Chart.js."
                        image={image4}
                        demolink="https://yhanyi.github.io/cnn-digits/"
                        githublink="https://github.com/yhanyi/cnn-digits"
                        /></div>

                        <div className="col-span-6 lg:col-span-12"><ProjectItem 
                        title="Calculator"
                        summary="A calculator webapp that performs basic arithmetic calculations, built while learning Javascript."
                        image={image3}
                        demolink="https://yhanyi.github.io/odin_calculator/"
                        githublink="https://github.com/yhanyi/odin_calculator"
                        /></div>

                        <div className="col-span-6 lg:col-span-12"><ProjectItem 
                        title="Sketch"
                        summary="An etch-a-sketch webapp that allows the user to draw on a canvas, built while learning Javascript."
                        image={image2}
                        demolink="https://yhanyi.github.io/odin_sketch/"
                        githublink="https://github.com/yhanyi/odin_sketch"
                        /></div>

                        <div className="col-span-6 lg:col-span-12"><ProjectItem 
                        title="Portfolio Website V1"
                        summary="This was my first programming project and it was built over half a week while I learnt vanilla HTML, CSS and Javascript to create a basic portfolio website."
                        image={image1}
                        demolink="https://www.google.com"
                        githublink="https://www.google.com"
                        /></div>

                </div>
            </Layout>
        </main>    
    </>
  )
}

export default projects