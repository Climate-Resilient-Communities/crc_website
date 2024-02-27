import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import PartnershipFooter from "@/components/Footers/PartnershipFooter";
import OurTeamFooter from "@/components/Footers/OurTeamFooter";

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
                <p className="py-4">
                At CRC, we understand the pivotal role that NGOs 
                and NPOs play in fostering positive change. Our 
                project seeks to build alliances with NGOs and NPOs 
                that share our commitment to climate resilience, 
                climate justice and community empowerment. Specifically, 
                we are interested in forging partnerships to address 
                issues related to negative climate events and chronic 
                stressors, such as poverty, inequalities, accessible 
                transit, and affordable housing---integral components 
                of climate resilience. By combining expertise and 
                resources, we can work towards creating a more equity 
                and sustainable future for marginalized and 
                vulnerable urban communities.
                </p>
                <h4 className="justify-between pt-4 mx-auto font-bold text-center">
                Government Agencies
                </h4>
                <p className="py-4">
                Collaboration with Government Agencies is crucial 
                for implementing last change, and CRC is committed 
                to working hand-in-hand with agencies focused on 
                urban development, climate action and community 
                well-being. Through effective collaboration with 
                government bodies, we can bridge the gap between 
                top-down climate plans and grassroot actions as 
                well as foster a more resilient and just society 
                by supporting and strengthening the implementation 
                of climate plans.
                </p>
                <h4 className="justify-between pt-4 mx-auto font-bold text-center">
                    Academic Groups
                </h4>
                <p className="py-4">
                The academic community plays a pivotal role in 
                advancing knowledge and innovation. Through 
                collaboration with academic institutions, CRC 
                can ensure that our approach and tools are based 
                on robust research and appropriate methodologies. 
                By engaging with academic groups, we seek to foster 
                a culture of continuous learning and innovation 
                within communities, laying the foundation of 
                sustainable resilience. 
                </p>
                <h4 className="justify-between pt-4 mx-auto font-bold text-center">
                    Community Groups
                </h4>
                <p className="py-4 mb-12">
                Central to the mission of Climate Resilient 
                Communities is the collaboration with local 
                Community Groups who serve as catalysts for 
                change. Our project facilitates the building of 
                community networks, connecting diverse groups 
                facing similar climate vulnerabilities. Through 
                peer learning and collaboration, communities 
                can share insights, strategies, and experiences, 
                enhancing collective resilience. Together with 
                Community Groups, CRC is dedicated to creating 
                a bottom-up approach that ensures the sustainability 
                and effectiveness of climate resilience efforts.
                </p>
                </div>
                <p className="font-bold text-sm mb-12">
                Ready to partner with us or learn more about our 
                initiatives? Email us at partnership@crcgreen.com 
                to start a conversation today. You can also stay 
                updated on our latest projects, events, and 
                opportunities by signing up for our newsletter. 
                Let's work together to build a greener, more 
                resilient future for all.
                </p>
            </div>
        </div>
        <OurTeamFooter />
      </div>
    )
  }
  