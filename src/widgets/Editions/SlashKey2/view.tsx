/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Image from "@components/Image";
import { imageAlts } from "@utils/constants";
import Winners from "@widgets/Editions/SlashKey2/components/Winners";
import Sponsors from "@widgets/Editions/SlashKey2/components/Sponsors";

export default function SlashkeyTwoView() {
  return (
    <div className="overflow-hidden py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-16 m-8 py-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              About
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slk-light sm:text-4xl">
              Slash Key 2.0
            </p>

            <p className="mt-6 text-md text-justify leading-8 text-gray-800">
              Slash Key 2.0, organized by IEEE Computer Society Kerala Chapter,
              was held on
              <span className="font-semibold mx-1">May 27th and 28th 2023</span>
              at
              <span className="font-semibold mx-1">
                Kochi Office, IEEE Kerala Section,
              </span>
              in collaboration with Cochin University of Science and Technology,
              Ernakulam. The 30-hour hackathon saw 66 individuals in 19 teams.
              It comprised six phases: Ideation, four Build stages, and
              Presentation. The event kicked off with
              <span className="font-semibold mx-1">Hackathon Hacks</span>by
              Gokul C M,
              <span className="italic mx-1">
                former Student Representative of IEEE CSKS,
              </span>
              which aimed to provide guidance to participants who were attending
              an offline hackathon for the first time as well as provide tips
              and motivation for the upcoming hackathon, this was followed by
              revealing nine problem statements which were based on Machine
              Learning and an open track, explained by Mr. Karthik,
              <span className="italic mx-1">Secretary of IEEE CS SYP</span>,
              followed by a doubt clearing session for the same.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 m-8">
          <div className="overflow-hidden">
            <Image
              src="/images/assets/slashkey2/group.png"
              alt={imageAlts.SLK1_GROUP_PHOTO}
              className="hidden sm:block w-full h-auto rounded-xl shadow-xl"
              width={1216}
              height={516}
            />
          </div>
          <div>
            <p className="text-md leading-8 text-justify text-gray-800">
              Participants were free to choose and work on their ideas to solve
              any of the problem statements. Teams had mentors and were
              evaluated every six hours. After 30 hours, four teams were
              shortlisted and they then competed for the
              <span className="font-semibold mx-1">50,000 INR</span> prize pool.
              The event was copowered by Intel and sponsored by Wolfram, .xyz
              and Echo 3D and received an extensive positive feedback.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-16 m-8">
          <div>
            <p className="mt-6 text-md leading-8 text-justify text-gray-800 ">
              Another session
              <span className="font-semibold mx-1">
                Introduction to Intel OneAPI and its toolkit
              </span>
              handled by Mr. Kazi Haque gave participants valuable insights into
              a comprehensive software development toolkit and helped them to
              gain an understanding of the capabilities, features, and benefits
              of Intel OneAPI and empowered participants to harness the full
              potential of modern computing platforms for their software
              projects.
            </p>
          </div>
        </div>
        <Winners />
        <Sponsors />
      </div>
    </div>
  );
}
