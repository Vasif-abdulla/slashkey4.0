/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Vasif
 */

import React from "react";
import Image from "@components/Image";
import { imageAlts } from "@utils/constants";
import Winners from "@widgets/Editions/SlashKey3/components/Winners";
import Sponsors from "@widgets/Editions/SlashKey3/components/Sponsors";

export default function SlashkeyThreeView() {
  return (
    <div className="overflow-hidden py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-16 m-8 py-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              About
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slk-light sm:text-4xl">
              Slash Key 3.0
            </p>

            <p className="mt-6 text-md text-justify leading-8 text-gray-800">
              Slash Key 3.0 was a 30-hour hackathon held at the <span className="font-semibold mx-1">National Institute of Technology (NIT)</span>, Calicut on 
              <span className="font-semibold mx-1">July 19-20, 2024</span>. Organised by the 
              <span className="font-semibold mx-1">IEEE Computer Society Kerala Chapter</span> 
              in collaboration with IEEE SB NIT Calicut and IEEE Young Professionals, 
              the event brought together talented students and young innovators to find practical 
              solutions to real-world problems.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 m-8">
          <div className="overflow-hidden">
            <Image
              src="/images/assets/slashkey3/group.png"
              alt={imageAlts.SLK3_GROUP_PHOTO}
              className="hidden sm:block w-full h-auto rounded-xl shadow-xl"
              width={1216}
              height={516}
            />
          </div>
          <div>
            <p className="text-md leading-8 text-justify text-gray-800">
              With a prize pool of ₹50,000, Slash Key 3.0 encouraged participants to think creatively, 
              work as a team, and build projects that could create real impact. 
              The hackathon had three phases. In the ideation phase, teams planned and refined their ideas, 
              ensuring they were both innovative and feasible, with mentors available to guide them with technical and 
              strategic advice. During the development phase, participants worked intensively to turn their ideas into 
              functional prototypes, applying their coding skills and problem-solving abilities within a short timeframe. 
              Finally, in the presentation phase, teams showcased their projects to a panel of judges, explaining their 
              approach, the technology used, and how their solution addressed the chosen problem effectively.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-16 m-8">
          <div>
            <p className="text-md leading-8 text-justify text-gray-800">
             The event was supported by sponsors including the Institution’s Innovation Council, .xyz, and Axure, who contributed resources, mentorship, and prizes that enriched the overall experience. Throughout the hackathon, participants also attended technical workshops and interacted with mentors, gaining insights and confidence to strengthen their projects.
            </p>
            {/* <p className="mt-6 text-md leading-8 text-justify text-gray-800 ">
            </p> */}
          </div>
        </div>
        <Winners />
        <Sponsors />
      </div>
    </div>
  );
}
