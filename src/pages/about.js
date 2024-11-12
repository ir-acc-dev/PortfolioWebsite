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

                            <ul className="space-y-4 text-xl lg:text-lg font-medium list-disc list-inside">
                                <li>
                                    <span className="font-semibold">Academic Start:</span> I began my journey in
                                    Neuroscience at Santa Clara University, earning my Bachelor of Science and balancing
                                    academics with competing as a Division I rower and ROTC cadet.
                                </li>

                                <li>
                                    <span className="font-semibold">Global Experience with the U.S. Army:</span> After
                                    graduating <em>summa cum laude</em>, I served in the Army, taking on diverse roles
                                    from South Korea to Germany. I managed complex projects at all echelons of the military from company to division.
                                </li>

                                <li>
                                    <span className="font-semibold">Shift to Full-Stack Development:</span> Now, I’m a
                                    full-stack developer with expertise in JavaScript, Java, and React, building
                                    user-friendly applications that bridge technical and human needs. I love crafting
                                    solutions that make life easier for others.
                                </li>

                                <li>
                                    <span className="font-semibold">Passion for Travel:</span> With 40 countries
                                    explored so far, I’m always planning my next adventure. My experiences around the
                                    world fuel my drive to create software that enables people to work smarter and live
                                    fuller lives.
                                </li>

                                <li>
                                    <span className="font-semibold">Life Outside of Code:</span> When not coding or
                                    traveling, I’m hanging out with my puppy, Rio. My goal is to create tech that helps
                                    others spend more time making memories and less time at their desks.
                                </li>
                            </ul>
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