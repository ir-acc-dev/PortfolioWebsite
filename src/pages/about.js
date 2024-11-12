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
                                Hey there! I’m Irish, and my journey to software development has been quite the adventure. I began with a passion for neuroscience, earning my Bachelor of Science from Santa Clara University, where I had the opportunity to challenge myself both academically and athletically as a Division I rower and ROTC cadet. After finishing my degree summa cum laude, I embraced a new chapter with the U.S. Army, where I had the privilege of working in diverse roles across the globe, from South Korea to Germany. Along the way, I managed complex projects and led amazing teams, always with the goal of keeping things organized and empowering others
                            </p>
                            <p className="text-xl lg:text-lg font-medium my-4">
                                These days, I’ve shifted my focus to the tech world as a full-stack developer, using my skills to create practical, user-friendly applications that solve real-world problems. Through my training in full stack development, I’ve developed a strong foundation in languages like JavaScript, Java, and React. I’m passionate about building solutions that make life easier for others and finding ways to bridge the gap between technical and human needs.
                            </p>
                            <p className="text-xl lg:text-lg font-medium">
                                When I’m not coding, you’ll usually find me planning my next travel adventure — 40 countries and counting! I’m always excited to explore more of the world. And if I’m not traveling, I’m likely hanging out with my puppy, Rio. My goal is to create software that helps people work smarter so they can spend less time at their desks and more time enjoying life, seeing the world, and making lasting memories. Here’s to living fully and working efficiently!
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