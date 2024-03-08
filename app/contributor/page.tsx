import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import ContributorFooter from "@/components/Footers/ContributorFooter";

export default function Contributor() {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <div>
        <div className="mx-auto mt-20 flex w-full items-center justify-between object-cover">
            <Image 
            src="/contributorlandingimage.jpeg"
            alt="About Landing Page Image"
            width={1500}
            height={250}
            layout="responsive"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64"
            />
        </div>
        </div>
        {/* Textbox Overlay Section */}
        <div className="w-full px-4 -mt-28 2xl:-mt-20">
            <div className="bg-white bg-opacity-70 px-6 mx-auto w-5/6 2xl:w-3/4 rounded-md relative">
                <div className="flex flex-col mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1C4405] font-semibold text-green mb-8 py-8 text-center">
                    Join Us As a Contributor
                </h2>
                <p>
                At CRC,  we welcome passionate individuals who are 
                eager to contribute their skills and expertise to 
                enhance community climate resilience and to advance 
                climate justice in marginalized and vulnerable urban 
                communities. 
                </p>
                <p className="pt-4">
                Explore the various functions you can contribute and 
                learn about the exciting projects we&#39;re working on.
                </p>
                </div>

                <div>
                <h3 className="py-4 text-center justify-between mx-auto text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Functions
                </h3>
                
                <div className="items-center justify-center text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Row 1 */}
        <div className="flex-1 p-4">
          <h2 className="text-lg font-semibold">Project Management</h2>
          <p>Coordinate project activites, manage timelines and ensure smooth execution of initiatives</p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-lg font-semibold">Data & Analytics</h2>
          <p>Analyze climate resilience and climate justice data and 
            generate insights to inform decision making and adaptation strategies </p>
        </div>
        {/* Row 2 */}
        <div className="flex-1 p-4">
          <h2 className="text-lg font-semibold">Software Development</h2>
          <p>Maintain and enhance project website, and develop innovative 
            solutions to improve availability, access and utilization of 
            climate data and information</p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-lg font-semibold">Community & Partnership</h2>
          <p>Build and nurture relationship switch community stakeholders 
            and partners to enhance collaboration and engagement </p>
        </div>
        {/* Row 3 */}
        <div className="flex-1 p-4">
          <h2 className="text-lg font-semibold">Communications</h2>
          <p>Craft compelling narratives, manage digital channels, 
            and raise awareness about our projects and initiatives </p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-lg font-semibold">Funding</h2>
          <p>Formulate and implement diversified and sustainable funding 
            strategies, identify funding opportunities, write grant 
            applications, and secure resources to support our programs</p>
        </div>
      </div>
    </div>

                <h3 className="py-4 my-8 text-center justify-between pt-4 mx-auto text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Initiatives
                </h3>
                <h4 className="justify-between pt-4 mx-auto font-bold">
                    Youth Data Literacy Workshops
                </h4>
                <p className="py-4">
                Develop curriculum that introduces youth to the concepts 
                of climate resilience and climate justice, and design 
                interactive activities and exercises to enhance youth 
                understanding of how to leverage climate data and 
                information to improve their communities&#39; health and well-being
                </p>
                <h4 className="justify-between pt-4 mx-auto font-bold">
                    Climate LLM App
                </h4>
                <p className="py-4">
                Build an interactive platform powered by natural language 
                processing technologies &#40;e.g., Large Language Models, 
                Retrieval Augmented Generation&#41; to improve access to 
                climate data and insights 
                </p>
                <h4 className="justify-between pt-4 mx-auto font-bold">
                    Climate Change Impact Chains
                </h4>
                <p className="py-4 mb-8">
                Investigate the impact of climate change on 
                exacerbating communities&#39; immediate daily concerns&#40;e.g., urban food access&#41; 
                in collaboration with researchers to inform policies and 
                practices and to facilitate data-informed community-level 
                decision making
                </p>
                </div>

                <div>
                <h3 className="py-4 my-8 text-center justify-between pt-4 mx-auto text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Benefits of Volunteering With Us
                </h3>
                <h4 className="justify-between pt-4 mx-auto font-bold">
                Gaining Experience in Climate Resilience and Cutting-edge Technologies 
                </h4>
                <p className="py-4">
                Our volunteers have the unique opportunity to gain hands-on 
                experience in addressing critical issues related to climate 
                change. This experience can be invaluable for your career 
                and personal development.
                </p>
                <h4 className="justify-between pt-4 mx-auto font-bold">
                    Contributing to a Meaningful Cause
                </h4>
                <p className="py-4">
                Climate change is one of the most pressing challenges 
                of our time. By volunteering with us, you&#39;re actively 
                contributing to a project that directly empowers 
                marginalized communities and helps them adapt to a 
                changing climate. Your work makes a real difference 
                in the lives of others.
                </p>
                <h4 className="justify-between pt-4 mx-auto font-bold">
                Collaborating With a Passionate and Diverse Team: 
                </h4>
                <p className="py-4">
                Our project brings together people from various 
                backgrounds, cultures, and disciplines. You&#39;ll 
                collaborate with a passionate and dedicated team 
                that shares your commitment to making a positive 
                impact. The diversity of our team ensures innovative 
                solutions and meaningful connections
                </p>
                <h4 className="justify-between pt-4 mx-auto font-bold">
                Building a Network 
                </h4>
                <p className="py-4 mb-12">
                Volunteering with us offers an opportunity to expand 
                your professional network and connect with like-minded 
                individuals who are also passionate about climate 
                resilience and social justice. You&#39;ll build lasting 
                relationships that can benefit your career and personal 
                growth.
                </p>
                </div>
                <div>
                  <p className="font-bold mb-12">
                  To apply, please send your resume and a brief 
                  statement of interest to volunteers@crcgreen.com. 
                  We look forward to welcoming you to our organization 
                  and working together to create positive change.
                  </p>
                </div>
            </div>
        </div>
        <ContributorFooter />
      </div>
    )
  }
  