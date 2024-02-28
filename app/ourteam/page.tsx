import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import OurTeamFooter from "@/components/Footers/OurTeamFooter";
import {FaLinkedin} from 'react-icons/fa';
import Link from "next/link";

export default function OurTeam() {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <div>
        <div className="mx-auto mt-20 flex w-full items-center justify-between object-cover">
            <Image 
            src="/ourteamlandingimage.jpeg"
            alt="About Landing Page Image"
            width={1500}
            height={250}
            layout="responsive"
            />
        </div>
        </div>
        {/* Textbox Overlay Section */}
        <div className="w-full px-4 -mt-32 2xl:-mt-20">
            <div className="bg-white bg-opacity-70 p-6 mx-auto w-5/6 2xl:w-3/4 rounded-md relative">
                <div className="flex flex-col mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#b2770d] font-semibold text-green mb-8 py-8 text-center">
                    Meet the CRC Team
                </h2>
                <p>
                At Climate Resilient Communities &#40;CRC&#41;, 
                our team is made up of passionate individuals 
                with diverse backgrounds and expertise. 
                Together, we collaborate to develop practical 
                solutions, engage with communities, and create 
                real change in our world.
                </p>
                </div>

                <div>
                <h3 className="py-4 text-center justify-between mx-auto text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Project Maintenance
                </h3>
                
                <div className="items-center justify-center text-center">
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-3">
        {/* Row 1 */}
        <div className="inset-o flex items-center justify-center w-full col-span-2 flex-1 p-4 min-w-8 ">
            <img
            src="/headshots/Helena.jpg"
            alt="Helena Yu"
            className="w-full h-auto rounded-lg min-w-[150px] min-h-[200px] max-w-[350px]"
            />
        </div>
        {/* Row 2 */}
        <div className="flex-1 p-4 col-span-3 items-center">
          <h2 className="flex text-lg font-bold text-left">Helena Yu
            <Link href="https://www.linkedin.com/in/helena-qiaoshan-yu/" rel="noopener noreferrer" target="_blank" passHref><FaLinkedin className="ml-4 text-lg h-6 w-6" aria-hidden="true"/></Link>
        </h2>
          <h1 className="text-md font-semibold text-left pb-4">Project Maintainer, General & External</h1>
          <p className="text-left text-xs md:text-base">Helena is a seasoned Data Scientist with experience across various 
            industries, including technology, financial services, retail, and 
            telecommunications. Notably, she led pro bono teams that conducted 
            descriptive and natural language processing &#40;NLP&#41; analyses for Global 
            Count, and created a predictive model to inform preventive 
            interventions to end human trafficking in the U.S.. As an experienced 
            leader with a background in Statistics, Computer Science, and 
            Marketing, her prior experience as a Manager and Data Scientist at 
            major organizations like Scotiabank, Accenture, Microsoft, and
            Statistics Without Borders demonstrates her ability to manage 
            complex projects and implement data-driven solutions. </p>
        </div>
      </div>
    </div>
        </div>
        </div>
        </div>
        <OurTeamFooter />
      </div>
    )
  }
  