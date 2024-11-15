import {motion, useScroll} from 'framer-motion'
import {useRef} from "react";
import LiIcon from "@/components/LiIcon";

const Education = () => {

    const Details = ({type, time, place,  info}) => {
        const ref = useRef(null)

        return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

            <LiIcon reference={ref}/>

            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>

                <span className='capitalize font-medium text-dark/75 md:text-sm'>
                    {time} | {place}
                </span>

                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>

            </motion.div>
        </li>
    }

    const ref = useRef(null);

    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 text-center md:text-6xl md:mb-16 xs:text-4xl'>
                Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{scaleY: scrollYProgress}}

                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'/>

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>

                    <Details
                        type="Certificate: Web Developer Specialist"
                        time="2024"
                        place="Austin Community College"
                        info='US Army program to transition Soldiers into Software Developers'
                    />

                    <Details
                        type="Bachelor of Science in Neuroscience"
                        time="2016-2020"
                        place="Santa Clara University"
                        info='Highlights: Summa Cum Laude, Division I Womens Rowing, ROTC'
                    />

                </ul>
            </div>
        </div>
    );
};

export default Education;