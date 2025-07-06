/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Abhishek Santhosh
 */

import React from "react";
import Image from "@components/Image";
import { imageAlts } from "@utils/constants";

const awards = [
  {
    id: 1,
    path: "/images/assets/csks/IKS_Large_Society_Award.png",
    alt: "IEEE Kerala Section's Outstanding Large Society Chapter Award 2023",
  },
  {
    id: 2,
    path: "/images/assets/csks/Early_CareerPEA.png",
    alt: "Early Career Professional Engagement in Outstanding Chapter Award Program",
  },
  {
    id: 3,
    path: "/images/assets/csks/Global_OCA.png",
    alt: "IEEE Computer Society (Global) Outstanding Chapter Award",
  },
];

export default function AboutPageView() {
  return (
    <div className="overflow-hidden py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/*  About Slash Key */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-16 m-8 py-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              About
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slk-light sm:text-4xl">
              Slash Key
            </p>

            <p className="mt-6 text-md text-justify leading-8 text-gray-800">
              Slash Key is a 30 hr Hackathon presented by IEEE CS Kerala
              Chapter, which aims to bring together aspiring developers, coders
              and tech enthusiasts from various backgrounds to collaborate and
              create cutting edge solutions. Two editions of the events were
              successfully completed in the previous years.
            </p>
          </div>
        </div>
        {/*  About CS KS*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 m-8 py-8">
          <div className="overflow-hidden">
            <Image
              src="/images/assets/csks/IKS_AGM_2023.png"
              alt={imageAlts.IKS_AMG_2023}
              className="hidden sm:block w-full h-auto rounded-xl shadow-xl"
              width={1216}
              height={516}
            />
          </div>
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              About
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slk-light sm:text-4xl">
              IEEE CS Kerala Chapter
            </p>
            <p className="mt-6 text-md leading-8 text-justify text-gray-800">
              The IEEE Computer Society (CS) Kerala Chapter, established in
              1985, is the largest Computer Society Chapter in the world,
              encompassing 48 Student Branch Chapters and more than 2,400
              members as of 2025. Recognized for driving change and innovation
              in computer science and engineering, the Chapter organizes major
              events like the All Kerala Computer Society Student Convention
              (AKCSSC) and the All India Computer Society Student and Young
              Professional Congress (AICSSYC-23).
            </p>
            <p className="mt-6 text-md leading-8 text-justify text-gray-800 ">
              The Chapter owes much of its success to the commitment and
              leadership of its dedicated volunteers, who have garnered esteemed
              positions within the IEEE community. Notably, the Chapter has been
              honoured with prestigious accolades, including the
              <span className="font-bold ml-2">
                IEEE Computer Society (Global) Outstanding Chapter Award in 2018
              </span>
              , the
              <span className="font-bold ml-2">
                Early Career Professionals Engagement in Outstanding Chapter
                Award Program in 2022
              </span>
              , and
              <span className="font-bold ml-2">
                IEEE Kerala Section&apos;s Outstanding Large Society Chapter
                Award in 2023
              </span>
              . With an unwavering commitment to excellence, the Chapter
              encourages collaboration and empowers members to drive meaningful
              change in the field of technology.
            </p>
          </div>
        </div>
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-2 gap-8 justify-center text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3">
            {awards?.map((item) => (
              <div
                className="flex justify-center items-center p-8 sm:mx-2 md:mx-0 lg:mx-0"
                key={item?.id}
              >
                <Image
                  src={item?.path}
                  alt={item?.alt}
                  height={360}
                  width={840}
                />
              </div>
            ))}
          </div>
        </div>
        {/*  About IEEE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 m-8 py-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              About
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slk-light sm:text-4xl">
              IEEE
            </p>
            <p className="mt-6 text-md leading-8 text-justify text-gray-800">
              IEEE, the largest technical professional organization globally, is
              committed to advancing technology for the betterment of humanity.
              Through its highly regarded publications, conferences, technology
              standards, and a wide range of professional and educational
              activities, IEEE and its members inspire a global community. By
              providing a platform for collaboration, IEEE empowers
              professionals to make significant contributions to society and
              create positive impacts on a global scale.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              About
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slk-light sm:text-4xl">
              IEEE Computer Society
            </p>
            <p className="mt-6 text-md leading-8 text-justify text-gray-800">
              The IEEE Computer Society (CS) is at the forefront of empowering
              and advancing professionals in the field of Computer Science and
              Engineering, driving global technological progress. By fostering
              active participation and collaboration among computer engineers,
              scientists, academia, and industry experts, IEEE CS establishes a
              benchmark for education and engagement. Through its conferences,
              publications, and diverse programs, the society creates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
