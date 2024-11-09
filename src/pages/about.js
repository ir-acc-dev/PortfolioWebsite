import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import BioPhoto from "../../public/images/profile/AboutProfile.jpg"
import Image from 'next/image'


const About = () => {
    return (
        <>
            <Head>
                <title>About Me!</title>
                <meta name='description' content='any description'/>
            </Head>

            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>

                    <AnimatedText text="A Little About Me..." className='mb-16'/>

                    <div className='grid w-full grid-cols-8 gap-16'>

                        <div className='col-span-4 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className='font-medium'>This is the first paragraph. I need to have a longer piece of text here to see if the alignment of the photo is better. Otherwise the spacing needs to be corrected </p>
                            <p className='font-medium my-4'>This is the first paragraph. I need to have a longer piece of text here to see if the alignment of the photo is better. Otherwise the spacing needs to be corrected</p>
                            <p className='font-medium'>This is the first paragraph. I need to have a longer piece of text here to see if the alignment of the photo is better. Otherwise the spacing needs to be corrected</p>
                        </div>

                        <div className='col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                            <Image src={BioPhoto} alt="Irish" className='h-auto w-full rounded-2xl' />
                        </div>

                        {/*<div className='col-span-2 flex flex-col items-end justify-between'>*/}

                        {/*    <div className='flex flex-col items-end justify-center'>*/}
                        {/*        <span className='inline-block text-7xl font-bold'>*/}
                        {/*            50+*/}
                        {/*        </span>*/}
                        {/*        <h2 className='text-xl font-medium capitalize text-dark/75'>*/}
                        {/*            Satisfied clients*/}
                        {/*        </h2>*/}
                        {/*    </div>*/}

                        {/*    <div className='flex flex-col items-end justify-center'>*/}
                        {/*        <span className='inline-block text-7xl font-bold'>*/}
                        {/*            50+*/}
                        {/*        </span>*/}
                        {/*        <h2 className='text-xl font-medium capitalize text-dark/75'>*/}
                        {/*            Satisfied clients*/}
                        {/*        </h2>*/}
                        {/*    </div>*/}

                        {/*    <div className='flex flex-col items-end justify-center'>*/}
                        {/*        <span className='inline-block text-7xl font-bold'>*/}
                        {/*            50+*/}
                        {/*        </span>*/}
                        {/*        <h2 className='text-xl font-medium capitalize text-dark/75'>*/}
                        {/*            Satisfied clients*/}
                        {/*        </h2>*/}
                        {/*    </div>*/}

                        {/*</div>*/}

                    </div>


                </Layout>

            </main>
        </>
    );
};

export default About;