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
        {/* Row 1 */}
        <div className="inset-o flex items-center justify-center w-full col-span-2 flex-1 p-4 min-w-8 ">
            <img
            src="/headshots/Q.jpg"
            alt="Helena Yu"
            className="w-full h-auto rounded-lg min-w-[150px] min-h-[200px] max-w-[350px]"
            />
        </div>
        {/* Row 2 */}
        <div className="flex-1 p-4 col-span-3 items-center">
          <h2 className="flex text-lg font-bold text-left">Q Chen
            <Link href="https://www.linkedin.com/in/q-chen/" rel="noopener noreferrer" target="_blank" passHref><FaLinkedin className="ml-4 text-lg h-6 w-6" aria-hidden="true"/></Link>
        </h2>
          <h1 className="text-md font-semibold text-left pb-4">Project Maintainer, Data Analytics</h1>
          <p className="text-left text-xs md:text-base">
          Q is a Data Analyst at the School of Cities with the 
          University of Toronto. This team member is interested 
          in future cities, their sustainable adaptation and 
          development, and their digital strategy and data governance. 
          Team member C has a background in geospatial data analysis 
          and data visualization, and has worked in various industries 
          including transportation, health, and technology. 
          Team member C has a master&#39;s degree at the University 
          of Waterloo and was a recipient of the SSHRC Canada Graduate 
          Scholarship. This team member has previously worked for the 
          City of Toronto and the Government of Canada. 
            </p>
        </div>
        {/* Row 1 */}
        <div className="inset-o flex items-center justify-center w-full col-span-2 flex-1 p-4 min-w-8 ">
            <img
            src="/headshots/Diego.jpeg"
            alt="Diego"
            className="w-full h-auto rounded-lg min-w-[150px] min-h-[200px] max-w-[350px]"
            />
        </div>
        {/* Row 2 */}
        <div className="flex-1 p-4 col-span-3 items-center">
          <h2 className="flex text-lg font-bold text-left">Diego Luiz Da Silva
            <Link href="https://www.linkedin.com/in/diegosilva/" rel="noopener noreferrer" target="_blank" passHref><FaLinkedin className="ml-4 text-lg h-6 w-6" aria-hidden="true"/></Link>
        </h2>
          <h1 className="text-md font-semibold text-left pb-4">Project Maintainer, Software Development</h1>
          <p className="text-left text-xs md:text-base">
          Diego has a Ph.D. in Computer Science and works as a Postdoc 
          at the Transit Analytics Lab - University of Toronto. 
          The ongoing research bridges the gap between Public Transit 
          and Machine Learning methods. This involves assisting with 
          designing and evaluating large-scale data-oriented programs, 
          technologies, and systems that aim to improve urban mobility. 
          In addition to their academic work, this team member has 
          experience working as a consultant in the private sector. 
          They have managed projects and implemented data architecture 
          in various industries such as finance, telecommunications, 
          pharmaceuticals, chemicals, banking, insurance, and retail.
          </p>
        </div>
            {/* Row 1 */}
            <div className="inset-o flex items-center justify-center w-full col-span-2 flex-1 p-4 min-w-8 ">
            <img
            src="/headshots/Kate.jpeg"
            alt="Kate"
            className="w-full h-auto rounded-lg min-w-[150px] min-h-[200px] max-w-[350px]"
            />
        </div>
        {/* Row 2 */}
        <div className="flex-1 p-4 col-span-3 items-center">
          <h2 className="flex text-lg font-bold text-left">Katelyn Macdonald
            <Link href="https://www.linkedin.com/in/katelyn-macdonald-341050105/" rel="noopener noreferrer" target="_blank" passHref><FaLinkedin className="ml-4 text-lg h-6 w-6" aria-hidden="true"/></Link>
        </h2>
          <h1 className="text-md font-semibold text-left pb-4">Project Maintainer, Community Engagement</h1>
          <p className="text-left text-xs md:text-base">
          Katelyn Macdonald, PMP, holds a Masters in Environment & Business 
          from Waterloo. Her current work focuses on community engagement 
          for municipal climate change action and the circular economy, 
          with the goal of applying research to explore what resilient 
          communities look like within our increasingly complex, global 
          society.
          </p>
        </div>

      </div>

       <div>
        <h3 className="py-4 text-center justify-between mx-auto text-2xl md:text-3xl lg:text-4xl font-semibold">
            Project Contributors
        </h3>
       </div>
       
       <div className="container mx-auto px-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center text-center gap-4">
        <div className="w-48 h-56 overflow-hidden rounded-lg flex flex-col items-center justify-center mx-auto">
            <div className="flex flex-col items-center justify-center h-full">
            <img
            src="/headshots/Danny.png"
            alt="Danny"
            className="w-full h-auto object-cover rounded-lg min-w-[50px] min-h-[50px] max-h-[150px]"
            />
            <h1 className="mt-4 mb-2 text-xl font-bold">Danny Kim</h1>
            <p className="text-md">
            Data Scientist
          </p>
          </div>
        </div>

          <div className="w-48 h-56 overflow-hidden rounded-lg flex flex-col items-center justify-center mx-auto">
            <img
            src="/headshots/Claire.jpg"
            alt="Helena Yu"
            className="w-full h-auto object-cover rounded-lg min-w-[50px] min-h-[50px] max-h-[250px]"
            />
            <h1 className="mt-4 mb-2 text-xl font-bold">Claire Phillips</h1>
            <p className="text-md">
            Data Scientist
          </p>
          </div>

          <div className="w-48 h-56 overflow-hidden rounded-lg flex flex-col items-center justify-center mx-auto">
            <img
            src="/headshots/Farhad-TT.jpg"
            alt="Helena Yu"
            className="w-full h-auto object-cover rounded-lg min-w-[50px] min-h-[50px] max-h-[150px]"
            />
            <h1 className="mt-4 mb-2 text-xl font-bold">Farhad Sadeghlo</h1>
            <p className="text-md">
            Data Scientist
          </p>
          </div>

          <div className="w-48 h-56 overflow-hidden rounded-lg flex flex-col items-center justify-center mx-auto">
            <img
            src="/headshots/Ahnaf.png"
            alt="Ahnaf"
            className="w-full h-auto object-cover rounded-lg min-w-[50px] max-h-[150px]"
            />
            <h1 className="mt-4 mb-2 text-xl font-bold">Ahnaf Aziz</h1>
            <p className="text-md">
            Project Manager
          </p>
          </div>

          <div className="w-48 h-56 overflow-hidden rounded-lg flex flex-col items-center justify-center mx-auto">
            <img
            src="/headshots/Pira.jpg"
            alt="Ahnaf"
            className="w-full h-auto object-cover rounded-lg min-w-[50px] max-h-[150px]"
            />
            <h1 className="mt-4 mb-2 text-xl font-bold">Pirashan Ravi</h1>
            <p className="text-md">
            Web Dev Lead
          </p>
          </div>
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
  