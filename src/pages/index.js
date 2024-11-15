import Head from 'next/head'
import Layout from "@/components/Layout";
import Image from 'next/image'
import profileImage from '../../public/images/profile/developer-pic-3.png'
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import {LinkArrow} from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Irish Manalang</title>
        <meta name="Home" content="Home page" />
      </Head>

      <main className='flex items-center text-dark w-full min-h-screen'>

        <Layout className='pt-0 md:pt-16 sm:pt-8'>

            <div className="flex items-center justify-between w-full lg:flex-col">

                <div className='w-1/2 md:w-4/5'>
                    <Image src={profileImage} alt="ProfileImage" className='h-auto w-4/5 lg:hidden md:inline-block md:w-full' />
                </div>

                <div className='w-1/2 flex flex-col items-left self-center lg:w-full lg:text-center'>

                    <AnimatedText
                        text="Hi, I'm Irish"
                        className='!text-6xl !text-left
                        xl:text-5xl lg:!text-6xl lg:!text-center md:!text-5xl sm:!text-3xl'/>

                    <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                        From newbie to developer — let me show you what I've built so far
                    </p>

                    <div className='flex items-center self-start mt-2 lg:self-center'>

                        <Link
                            href='/dummy.pdf'
                            target={"_blank"}
                            className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base'
                        >
                            Resume <LinkArrow className={"w-6 ml-1"}/>

                        </Link>

                        <Link
                            href='mailto:irish.r.manalang.mil@swf.army.mil'
                            target={"_blank"}
                            className='ml-4 text-lg font-medium capitalize text-dark underline md:text-base'
                        >
                            Contact</Link>
                    </div>

                </div>
            </div>

        </Layout>
      </main>
    </>
  )
}
