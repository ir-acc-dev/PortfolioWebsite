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

            <main className='flex w-full flex-col items-center justify-center mx-auto'>

                <Layout className='pt-16'>

                    <AnimatedText text="A Little About Me..."
                                  className='mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl'/>

                    <div className="grid w-[90%] mx-auto grid-cols-2 gap-8 lg:gap-16 items-center justify-center">

                        <div
                            className="col-span-1 flex flex-col items-start justify-center xl:col-span-1 lg:order-2 lg:col-span-2">
                            <h2 className="mb-4 text-3xl lg:text-2xl font-bold uppercase text-dark/75">Biography</h2>

                            <p className="text-xl lg:text-lg font-medium">
                                This is the first paragraph. I need to have a longer piece of text here to see if the
                                alignment of the photo is better.
                                Otherwise the spacing needs to be corrected. Adding more substance to this paragraph to
                                make it look a little bit better.
                                I think I should make the font bigger so more space is taken up.
                            </p>
                            <p className="text-xl lg:text-lg font-medium my-4">
                                This is the first paragraph. I need to have a longer piece of text here to see if the
                                alignment of the photo is better.
                                Otherwise the spacing needs to be corrected. Adding more substance to this paragraph to
                                make it look a little bit better.
                                I think I should make the font bigger so more space is taken up.
                            </p>
                            <p className="text-xl lg:text-lg font-medium">
                                This is the first paragraph. I need to have a longer piece of text here to see if the
                                alignment of the photo is better.
                                Otherwise the spacing needs to be corrected. Adding more substance to this paragraph to
                                make it look a little bit better.
                                I think I should make the font bigger so more space is taken up.
                            </p>
                        </div>

                        <div
                            className="col-span-1 relative h-max rounded-2xl bg-light p-8 xl:col-span-1 lg:order-1 lg:col-span-2">
                            <Image
                                src={BioPhoto}
                                alt="Irish"
                                className="w-full h-auto max-w-[500px] xl:max-w-[500px] rounded-2xl object-contain mx-auto"
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