import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import BioPhoto from "../../public/images/profile/AboutProfile.jpg"
import Image from 'next/image'
import Experience from "@/components/Experience";
import Education from "@/components/Education";


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

                    <div className="grid w-full grid-cols-8 gap-8 lg:gap-16">
                        {/* Text Section */}
                        <div className="col-span-8 lg:col-span-4 flex flex-col items-start justify-start px-4 lg:px-0">
                            <h2 className="mb-4 text-xl lg:text-2xl font-bold uppercase text-dark/75">Biography</h2>
                            <p className="text-base lg:text-lg font-medium">
                                This is the first paragraph. I need to have a longer piece of text here to see if the
                                alignment of the photo is better.
                                Otherwise the spacing needs to be corrected. Adding more substance to this paragraph to
                                make it look a little bit better.
                                I think I should make the font bigger so more space is taken up.
                            </p>
                            <p className="text-base lg:text-lg font-medium my-4">
                                This is the first paragraph. I need to have a longer piece of text here to see if the
                                alignment of the photo is better.
                                Otherwise the spacing needs to be corrected. Adding more substance to this paragraph to
                                make it look a little bit better.
                                I think I should make the font bigger so more space is taken up.
                            </p>
                            <p className="text-base lg:text-lg font-medium">
                                This is the first paragraph. I need to have a longer piece of text here to see if the
                                alignment of the photo is better.
                                Otherwise the spacing needs to be corrected. Adding more substance to this paragraph to
                                make it look a little bit better.
                                I think I should make the font bigger so more space is taken up.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div
                            className="col-span-8 lg:col-span-4 relative h-max max-w-[500px] mx-auto rounded-2xl border-2 border-solid border-dark bg-light p-4 lg:p-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"/>
                            <Image
                                src={BioPhoto}
                                alt="Irish"
                                className="w-full max-w-[300px] lg:max-w-[500px] rounded-2xl object-contain mx-auto"
                            />
                        </div>
                    </div>


                    <Experience/>
                    <Education/>

                </Layout>

            </main>
        </>
    );
};

export default About;