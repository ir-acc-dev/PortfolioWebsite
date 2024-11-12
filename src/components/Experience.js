import {motion, useScroll} from 'framer-motion'
import {useRef} from "react";
import LiIcon from "@/components/LiIcon";

const Experience = () => {

    const Details = ({position, company, companyLink, time, address, work}) => {
        const ref = useRef(null)

        return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

            <LiIcon reference={ref}/>

            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position}&nbsp;<a href={companyLink} target={'_blank'} className='text-blue-500 capitalize'>@{company}</a></h3>

                <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                    {time} | {address}
                </span>

                <p className='font-medium w-full md:text-sm'>
                    {work}
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
               Experience
           </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{scaleY: scrollYProgress}}

                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'/>

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Software Developer" company=" US Army - Futures Command"
                        companyLink="https://www.army.mil"
                        time="2024-Present" address="Austin, TX"
                        work='Currently in training to develop full-stack applications to solve complex Army challenges'
                    />

                    <Details
                        position="Executive Officer" company=" US Army - Europe and Africa"
                        companyLink="https://www.army.mil"
                        time="2021-2024" address="Kaiserslautern, Germany"
                        work='Oversaw the coordination and execution of critical events for a senior executive in the US Army'
                    />

                    <Details
                        position="Platoon Leader" company=" US Army - 65th Medical BDE"
                        companyLink="https://www.army.mil"
                        time="2020-2021" address="Camp Casey, South Korea"
                        work='Led a medical platoon, ensuring operational readiness, team development, and mission success in dynamic environments'
                    />

                    <Details
                        position="IT Specialist" company=" Santa Clara University"
                        companyLink="https://www.scu.edu/"
                        time="2017-2020" address="Santa Clara, CA"
                        work='Provided reliable IT assistance and account management for over 8,000 university personnel'
                    />


                </ul>
            </div>
        </div>
    );
};

export default Experience;