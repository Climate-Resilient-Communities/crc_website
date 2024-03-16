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

        {/* Landing Image and Title */}
        <div className="mx-auto mt-20 w-full" style={{ height: 'calc(100vh - 80px)' }}>
          <div className="absolute top-0 left-0 z-0 w-full h-full">
            <Image 
            src="/ourteamlandingimage.jpeg"
            alt="About Landing Page Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64"
            />
          </div>
          <div className="relative inset-0 z-10 flex justify-center items-end h-full">
                <div className="w-3/4 h-4/6 lg:h-1/2 bg-opacity-80 rounded-t-lg bg-white flex flex-col justify-center items-center py-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-semibold text-[#b2770d] text-center">
                  Meet the CRC Team
                </h2>
                <p className="hidden md:block w-5/6 mt-8 font-medium leading-loose text-base lg:text-lg xl:text-xl justify-center items-center text-[#b2770d] text-center">
                At Climate Resilient Communities &#40;CRC&#41;, 
                our team is made up of passionate individuals 
                with diverse backgrounds and expertise. 
                Together, we collaborate to develop practical 
                solutions, engage with communities, and create 
                real change in our world.
                </p>
                </div>
            </div>
        </div>
        {/* Textbox Overlay Section */}
        <div className="flex flex-col justify-center items-center py-12">
            <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
              <p className="md:hidden my-4 font-medium">
                At Climate Resilient Communities &#40;CRC&#41;, 
                our team is made up of passionate individuals 
                with diverse backgrounds and expertise. 
                Together, we collaborate to develop practical 
                solutions, engage with communities, and create 
                real change in our world.
                </p>

                <div>
                <h3 className="py-4 text-center justify-between mx-auto text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Project Maintenance
                </h3>
                <div className="items-center justify-center text-center">
      
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-3">
        {/* Row 1 */}
        <div className="inset-o flex items-center justify-center w-full col-span-2 flex-1 p-4 min-w-8 ">
            <Image 
            src="/headshots/Helena.jpg"
            alt="Helena Yu"
            width={350}
            height={200}
            className="rounded-lg"
            layout="intrinsic"
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
        <Image
            src="/headshots/Q.jpg"
            alt="Q Chen"
            width={350}
            height={200}
            className="rounded-lg"
            layout="intrinsic"
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
          University of Toronto. She is interested 
          in future cities, their sustainable adaptation and 
          development, and their digital strategy and data governance. 
          Q has a background in geospatial data analysis 
          and data visualization, and has worked in various industries 
          including transportation, health, and technology. 
          Q has a master&#39;s degree at the University 
          of Waterloo and was a recipient of the SSHRC Canada Graduate 
          Scholarship. She has previously worked for the 
          City of Toronto and the Government of Canada. 
            </p>
        </div>
        {/* Row 1 */}
        <div className="inset-o flex items-center justify-center w-full col-span-2 flex-1 p-4 min-w-8 ">
        <Image
            src="/headshots/Diego.jpeg"
            alt="Diego"
            width={350}
            height={200}
            className="rounded-lg"
            layout="intrinsic"
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
            <Image
                src="/headshots/kate.jpg"
                alt="Kate"
                width={350}
                height={200}
                className="rounded-lg"
                layout="intrinsic"
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

        {/* Row 1 */}
        <div className="inset-o flex items-center justify-center w-full col-span-2 flex-1 p-4 min-w-8 ">
        <Image
            src="/headshots/Asrar.jpg"
            alt="Asrar Syed"
            width={350}
            height={200}
            className="rounded-lg"
            layout="intrinsic"
          />
        </div>
        {/* Row 2 */}
        <div className="flex-1 p-4 col-span-3 items-center">
          <h2 className="flex text-lg font-bold text-left">Asrar Syed
            <Link href="https://www.linkedin.com/in/munirulasrar/" rel="noopener noreferrer" target="_blank" passHref><FaLinkedin className="ml-4 text-lg h-6 w-6" aria-hidden="true"/></Link>
        </h2>
          <h1 className="text-md font-semibold text-left pb-4">Project Maintainer, Partnership</h1>
          <p className="text-left text-xs md:text-base">
          Asrar is an economic policy advisor with the Government of Ontario, specializing in quantitative analysis, policy analysis, and research.
          His interests include development economics, statistics, and social policy. He has considerable experience working in the non-profit space, both from strategic and grassroots capacities.
          Asrar holds undergraduate degrees in Economics and Mathematics from McGill University.
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
        <div className="w-48 h-72 overflow-hidden rounded-lg flex flex-col items-center justify-center mx-auto">
            <div className="flex flex-col items-center justify-center h-full">
            <Image
            src="/headshots/Danny.png"
            alt="Danny Kim"
            width={350}
            height={200}
            className="rounded-lg"
            layout="intrinsic"
          />
            <h1 className="mt-4 mb-2 text-xl font-bold">Danny Kim</h1>
            <p className="text-md">
            Data Scientist
          </p>
          </div>
        </div>

          <div className="w-48 h-72 overflow-hidden rounded-lg flex flex-col items-center justify-center mx-auto">
          <Image
            src="/headshots/Claire.jpg"
            alt="Claire Phillips"
            width={350}
            height={200}
            className="rounded-lg"
            layout="intrinsic"
          />
            <h1 className="mt-4 mb-2 text-xl font-bold">Claire Phillips</h1>
            <p className="text-md">
            Data Scientist
          </p>
          </div>

          <div className="w-48 h-72 overflow-hidden rounded-lg flex flex-col items-center justify-center mx-auto">
          <Image
            src="/headshots/Farhad-TT.jpg"
            alt="Farhad Sadeghlo"
            width={350}
            height={200}
            className="rounded-lg"
            layout="intrinsic"
          />
            <h1 className="mt-4 mb-2 text-xl font-bold">Farhad Sadeghlo</h1>
            <p className="text-md">
            Data Scientist
          </p>
          </div>

          <div className="w-48 h-72 overflow-hidden rounded-lg flex flex-col items-center justify-center mx-auto">
          <Image
            src="/headshots/Ahnaf.png"
            alt="Ahnaf Aziz"
            width={350}
            height={200}
            className="rounded-lg"
            layout="intrinsic"
          />
            <h1 className="mt-4 mb-2 text-xl font-bold">Ahnaf Aziz</h1>
            <p className="text-md">
            Project Manager
          </p>
          </div>

          <div className="w-48 h-72 overflow-hidden rounded-lg flex flex-col items-center justify-center mx-auto">
          <Image
            src="/headshots/Pira.jpg"
            alt="Pirashan Ravikumaran"
            width={350}
            height={200}
            className="rounded-lg"
            layout="intrinsic"
          />
            <h1 className="mt-4 mb-2 text-xl font-bold">Pirashan Ravi</h1>
            <p className="text-md">
            Lead Web Developer
          </p>
          </div>

          <div className="w-48 h-72 overflow-hidden rounded-lg flex flex-col items-center justify-center mx-auto">
          <Image
            src="/headshots/AndrewLambe.jpg"
            alt="Andrew Lambe"
            width={350}
            height={200}
            className="rounded-lg"
            layout="intrinsic"
          />
            <h1 className="mt-4 mb-2 text-xl font-bold">Andrew Lambe</h1>
            <p className="text-md">
            Data Scientist
          </p>
          </div>

          <div className="w-48 h-72 overflow-hidden rounded-lg flex flex-col items-center justify-center mx-auto">
          <Image
            src="/headshots/Somnath_Bhattacharya.jpg"
            alt="Somnath Bhattacharya"
            width={350}
            height={200}
            className="rounded-lg"
            layout="intrinsic"
          />
            <h1 className="mt-4 mb-2 text-xl font-bold">Somnath Bhattacharya</h1>
            <p className="text-md">
            Data Scientist
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
  