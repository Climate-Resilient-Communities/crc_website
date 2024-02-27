import Footer from "@/components/Footer";
import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

export default function Contributor() {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <div>
        <div className="mx-auto mt-20 flex w-full items-center justify-between object-cover">
            <Image 
            src="/aboutlandingimage.jpeg"
            alt="About Landing Page Image"
            width={1500}
            height={250}
            layout="responsive"
            />
        </div>
        </div>
        {/* Textbox Overlay Section */}
        <div className="w-full px-4 -mt-32 2xl:-mt-20">
            <div className="bg-white bg-opacity-60 text-black p-6 mx-auto w-5/6 2xl:w-3/4 rounded-md relative">
                <div className="flex flex-col mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#B20D48] mb-8 py-8 text-center">
                    About CRC
                </h2>
                <p>
                We envision a low-carbon, socially-just future in urban environments 
                &#40;e.g. Toronto&#41; with caring and resilient communities that actively 
                participate in the adaptation of climate change.
                </p>
                </div>
                <div>
                <h3 className="py-4 text-center justify-between mx-auto text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Our Mission
                </h3>
                <p className="my-4">
                Climate Resilient Communities &#40;CRC&#41; takes a data-driven and 
                community-centric approach to enhancing climate resilience 
                and advancing climate justice in marginalized and vulnerable 
                urban communities by aiming to address both acute shocks 
                &#40;e.g., flooding, heatwaves, blizzards&#41; and chronic stresses 
                &#40;e.g., poor food security, lack of access to affordable housing, 
                lack of equitable mobility&#41;.
                </p>

                <p className="py-4 mb-8">
                Recognizing that sustainability and justice require attention 
                on a spectrum of issues, we focus on improving the availability, 
                access, and utilization of climate resilience data. In doing so, 
                we aim to facilitate effective, data-driven climate resilience 
                decision-making in collaboration with communities, aspiring to 
                bridge the gap between grassroots actions and top-down climate plans. 
                </p>
                </div>
                <div>
                <h3 className="py-4 text-center justify-between pt-4 mx-auto text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Empowering Communities
                </h3>
                <h4 className="justify-between pt-4 mx-auto font-bold">
                    Informed and Engaged Communities
                </h4>
                <p className="py-4">
                We aim to empower communities with knowledge 
                about existing and emerging climate vulnerabilities 
                and risks, equip them with skills such as data literacy 
                and adaptation planning, and provide tools such as climate 
                resilience dashboards and a chatbot. One of our focuses 
                is on empowering youth to become ambassadors for climate 
                resilience and climate justice within their communities.
                </p>
                <h4 className="justify-between pt-4 mx-auto font-bold">
                    Actionable Insights
                </h4>
                <p className="py-4">
                We aim to develop tools to help communities identify 
                timely and effective adaptation measures, ensuring they 
                can respond to climate resilience challenges proactively.
                </p>
                <h4 className="justify-between pt-4 mx-auto font-bold">
                    Community Network Building
                </h4>
                <p className="py-4 mb-8">
                Our organization aims to foster connections and 
                collaboration among diverse communities, enabling 
                them to find others with similar climate resilience 
                characteristics and allowing them to learn from each 
                other&#39;s experiences, building on collective knowledge 
                and enhancing resilience. 
                </p>
                </div>
                <div>
                <h3 className="py-4 text-center justify-between pt-4 mx-auto text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Our Approach
                </h3>
                <h4 className="justify-between pt-4 mx-auto font-bold">
                Community-Centric Solutions
                </h4>
                <p className="py-4">
                Unlike traditional approaches that cater mainly to 
                policymakers and researchers, CRC focuses on empowering 
                communities to take impactful actions on their own terms. 
                We leverage the IPCC AR5 framework and Large Language 
                Models to identify localized adaptation interventions, 
                combining qualitative and quantitative data to 
                address specific community needs. Our approach reflects 
                the lived realities of marginalized communities, 
                addressing their immediate concerns like food insecurity 
                and inadequate housing conditions.
                </p>
                <h4 className="justify-between pt-4 mx-auto font-bold">
                    Transparency and Collaboration
                </h4>
                <p className="py-4">
                We embrace open-source development for transparency 
                and reproducibility. Employing Test-Driven 
                Development (TDD), Agile, and automation methodologies 
                ensures software quality and iterative improvement. 
                Our user-centric design approach puts community needs 
                at the forefront, driving decisions and rapid prototyping 
                in collaboration with stakeholders.
                </p>
                <h4 className="justify-between pt-4 mx-auto font-bold">
                Co-creation at the Core
                </h4>
                <p className="py-4 mb-8">
                Community engagement is central to our project. 
                We conduct Data Literacy Workshops to equip communities, 
                especially youth, with the skills to interpret and 
                utilize climate resilience data. Our Capacity Building 
                Workshops will cover various aspects of climate 
                resilience, fostering data-informed decision-making 
                and enhancing community organizing and advocacy skills.
                </p>
                </div>
            </div>
        </div>
        <Footer />
      </div>
    )
  }
  