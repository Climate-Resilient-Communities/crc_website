import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import PartnershipFooter from "@/components/Footers/PartnershipFooter";

export default function Partnership() {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />

        {/* Landing Image and Title */}
        <div className="mx-auto mt-20 w-full" style={{ height: 'calc(100vh - 80px)' }}>
            <div className="absolute top-0 left-0 z-0 w-full h-full">
            <Image 
            src="/partnershiplandingimage.jpeg"
            alt="Partnership Landing Page Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64"
            />
            </div>
            <div className="relative inset-0 z-10 flex justify-center items-end h-full">
                <div className="w-3/4 h-4/6 lg:h-1/2 bg-opacity-80 rounded-t-lg bg-white flex flex-col justify-center items-center py-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-semibold text-[#0d48b2] text-center">
                    Partner With Us
                </h2>
                <p className="w-5/6 mt-8 font-medium leading-loose text-base lg:text-lg xl:text-xl justify-center items-center text-[#0d48b2] text-center">
                At CRC,  we believe that collaboration is key 
                to creating impactful change. We invite 
                organizations, community groups, businesses, 
                and individuals to join us in our mission to 
                enhance climate resilience and advance climate 
                justice in urban environments. Through strategic 
                partnerships and collective action, we can address 
                the complex challenges posed by climate change and 
                build resilient communities that thrive in the 
                face of adversity.
                </p>
                </div>
            </div>
        </div>

        {/* Page Content */}
        <div className="flex flex-col justify-center items-center py-12">
            <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">

                <div className="items-center justify-center text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div>
                <h4 className="justify-between pt-4 mx-auto font-bold text-center">
                    NGOs/NPOs
                </h4>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <p className="font-bold text-sm my-12">
                Ready to partner with us or learn more about our 
                initiatives? Email us at partnership@crcgreen.com 
                to start a conversation today. You can also stay 
                updated on our latest projects, events, and 
                opportunities by signing up for our newsletter. 
                Let&#39;s work together to build a greener, more 
                resilient future for all.
                </p>
                </div>
            </div>
        </div>
        <PartnershipFooter />
      </div>
    )
  }
  