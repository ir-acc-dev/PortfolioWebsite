import Layout from "@/components/Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base">
            <Layout className='py-8 flex items-center justify-center w-full lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
            </Layout>
        </footer>
    );
};

export default Footer;