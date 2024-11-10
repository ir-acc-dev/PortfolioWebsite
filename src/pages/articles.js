import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import ArticleImage from "../../public/images/articles/create loading screen in react js.jpg"
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

const Article = ({title, date, link}) => {
    return (
        <li className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first: mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col'>

            <Link href={link} target='_blank'>
                <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            </Link>

            <span className='text-primary font-semibold pl-4 sm:self-start xs:text-sm'>{date}</span>
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
                    <AnimatedText text='Some of My Articles' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                        <li>
                            <FeaturedArticle
                                title='Article Title'
                                summary='Article Summary'
                                time='4 mins'
                                link='/'
                                img={ArticleImage}/>
                        </li>


                        <li>
                            <FeaturedArticle
                                title='Article Title'
                                summary='Article Summary'
                                time='4 mins'
                                link='/'
                                img={ArticleImage}/>
                        </li>
                    </ul>

                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>
                        All Articles
                    </h2>

                    <ul>
                        <Article
                            title='Article Title - a smaller one'
                            date="Feb 14, 2023"
                            link='/'
                            />

                        <Article
                            title='Article Title - a smaller one'
                            date="Feb 14, 2023"
                            link='/'
                             />

                        <Article
                            title='Article Title - a smaller one'
                            date="Feb 14, 2023"
                            link='/'
                            />

                        <Article
                            title='Article Title - a smaller one'
                            date="Feb 14, 2023"
                            link='/'
                            />
                    </ul>
                </Layout>


            </main>
        </>
    );
};

export default Articles;