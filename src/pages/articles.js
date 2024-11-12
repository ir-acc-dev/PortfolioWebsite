import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import ProjectArticleImg from "../../public/images/articles/ProjectArticleImg.jpg"
import LearningResourcesImg from "../../public/images/articles/LearningResourcesImg.jpg"
import {motion} from "framer-motion";

const FramerImage = motion(Image);

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (

        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>

            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl"/>

            <Link href={link} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage
                    src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}

                />
            </Link>

            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>

            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold'>{time}</span>
        </li>
    )
}

const Article = ({title, link}) => {
    return (
        <li className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first: mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col'>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            </Link>
        </li>
    )
}

const Articles = () => {
    return (
        <>
            <Head>
            <title>Articles</title>
                <meta name='articles' content='any description'/>
            </Head>

            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className="pt-16">
                    <AnimatedText text='Tips & Guides for New Devs'
                                  className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

                    {/*FEATURED ARTICLES SECTION*/}
                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>

                            <FeaturedArticle
                                title='Full Stack Project Walkthrough'
                                summary='Details the process of creating a full stack application with all CRUD functions'
                                time='10 mins'
                                link='https://docs.google.com/document/d/1K5Xo92TRXlu79eYlQQReQrZNwljfjueEdcI_YsMamoM/edit?tab=t.0#heading=h.m55knbq82hpp'
                                img={ProjectArticleImg}/>

                            <FeaturedArticle
                                title='Learning Resources'
                                summary='Resources that helped me the most in the dev accelerator'
                                time='2 mins'
                                link='https://docs.google.com/document/d/1yYqLzMZYhsODuCwJtrFwW-tNCuTAiUqDnfjVIRqO3aY/edit?tab=t.0#heading=h.sdfdba779ist'
                                img={LearningResourcesImg}/>

                    </ul>

                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>
                        All Other Guides
                    </h2>

                    <ul>
                        <Article
                            title='Fullstack - Template w/ Testing'
                            link='https://docs.google.com/document/d/1Ye0FSW-gqCqusLJbh_ySfhj9EE8Rq14fx2c_EcNFFG4/edit?usp=sharing'
                        />

                        <Article
                            title='Tailwind CSS - Frontend Template'
                            link='https://github.com/ir-acc-dev/Template_TailwindCSS'
                        />

                    </ul>

                </Layout>


            </main>
        </>
    );
};

export default Articles;