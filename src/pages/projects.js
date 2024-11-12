import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from 'next/image'
import {GithubIcon} from "@/components/Icons";
import RoadmapImg from "../../public/images/projects/Roadmap.png"
import TravelJournalImg from "../../public/images/projects/TravelJournalImg.png"
import FilmDatabaseImg from "../../public/images/projects/FilmDatabaseImg.png"
import AircraftImg from "../../public/images/projects/AircraftImg.png"

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article
            className="relative w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">

            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"/>

            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <Image src={img} alt={title} className='w-full h-auto'/>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>

                <p className='my-2 font-medium text-dark sm:text-sm'>{summary}</p>

                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link>
                    <Link href={link} target="_blank"
                          className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'>Visit
                        Project</Link>
                </div>

            </div>

        </article>
    )
}

const Project = ({type, title, img, link, github}) => {
    return (
        <article
            className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative xs:p-4'>

            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>

            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto'/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>

                <span className='text-primary font-medium text-xl lg:text-lg md:text-base'>{type}</span>

                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold lg:text-2xl'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank"
                          className='text-lg font-semibold underline md:text-base
                          '>Visit
                    </Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon/></Link>

                </div>

            </div>

        </article>

    )
}

const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name='description' content='any description'/>
            </Head>

            <main className='w-full mb-16 flex flex-col items-center justify-center'>

                <Layout className='pt-16'>

                    <AnimatedText text="Some of My Projects" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'></AnimatedText>

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>

                        <div className='col-span-12'>
                            <FeaturedProject
                                title='Fullstack App Roadmap'
                                img={RoadmapImg}
                                summary='This application provides the user with a references to begin building full stack applications'
                                link='http://localhost:5173'
                                github='https://github.com/ir-acc-dev/Roadmap'
                                type='WebDev - Semester 3'

                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='Travel Journal'
                                img={TravelJournalImg}
                                link='http://localhost:3002'
                                github='https://web.git.mil/swf/cohort-8-devs/solo-projects/irish_journal'
                                type='Bridge - Solo Project'
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='Film Database'
                                img={FilmDatabaseImg}
                                link='http://localhost:3003'
                                github='https://github.com/ir-acc-dev/AFC_Fall2024/tree/main/TMDB'
                                type='WebDev - Semester 2'
                            />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject
                                title='Aircraft'
                                img={AircraftImg}
                                summary='First major Bridge project for the developer accelerator'
                                link='http://localhost:3004'
                                github='https://github.com/ir-acc-dev/Aircraft'
                                type='Bridge - A Traumatic Experience'

                            />
                        </div>
                    </div>

                </Layout>
            </main>
        </>
    );
};

export default Projects;