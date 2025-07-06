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
import Winners from "@widgets/Editions/SlashKey1/components/Winners";
import Sponsors from "@widgets/Editions/SlashKey1/components/Sponsors";

export default function SlashkeyOneView() {
  return (
    <div className="overflow-hidden py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-16 m-8 py-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              About
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slk-light sm:text-4xl">
              Slash Key 1.0
            </p>

            <p className="mt-6 text-md text-justify leading-8 text-gray-800">
              The first edition of Slash Key, organized by
              <span className="font-semibold mx-1">
                IEEE Computer Society Kerala Chapter,
              </span>
              at
              <span className="font-semibold mx-1">
                St.Joseph's College of Engineering and Technology
              </span>
              was held on{" "}
              <span className="font-semibold mx-1">July 9th and 10th 2022</span>
              . The event had about 16 Teams and 54 participants. There were 6
              phases of Slash Key with an Ideation Phase, 4 stages of Build
              Phase and a Presentation Phase.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 m-8">
          <div className="overflow-hidden">
            <Image
              src="/images/assets/slashkey1/group.png"
              alt={imageAlts.SLK1_GROUP_PHOTO}
              className="hidden sm:block w-full h-auto rounded-xl shadow-xl"
              width={1216}
              height={516}
            />
          </div>
          <div>
            <p className="text-md leading-8 text-justify text-gray-800">
              As an introduction to this Hackathon, a session
              <span className="font-semibold mx-1">Hackathon 101</span>
              handled by Mr. Karthik K,
              <span className="italic mx-1">
                Chair-Industry Engagement Subcommittee, IEEE CS SYP MGAB
              </span>
              for those participants who were attending an offline hackathon for
              the very first time. 7 themes were given for the Hackathon which
              included
              <span className="font-semibold mx-1">
                Paper-free solutions, Smart Education, Metaverse, Health care,
                Fintech, Entrepreneurship support solutions and open innovation
              </span>
              with social relevance for the Teams. The Judging panel of a
              Professional Team with Mr.Karthik K,
              <span className="italic mx-1">
                AI Engineer at Innovation Incubator Advisory
              </span>
              , Mr.Alan Mathew,
              <span className="italic mx-1">
                ETL Developer at Guidehouse, Co-Founder of ZetGo
              </span>
              along with Mr Aravind P Unnithan, Software Engineer at
              <span className="italic mx-1">InApp.</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-16 m-8">
          <div>
            <p className="text-md leading-8 text-justify text-gray-800">
              Based on the cumulative evaluation, on the 28th hour, 5 teams were
              shortlisted to present their solution and the next 2 hours was
              packed with the solution presentation. After the presentation, on
              the 30th hour, the winners were declared and prizes were
              distributed.
            </p>
            <p className="mt-6 text-md leading-8 text-justify text-gray-800 ">
              Another session on
              <span className="font-semibold mx-1">
                The Al Lens-Research Trends in Industries
              </span>
              was handled by Mr Shivam Abhilash,
              <span className="italic mx-1">
                Engineering Specialist, Chairperson-ZS Associates,
                Chairperson-Students and Young Professional Committee IEEE CS
                MGAB
              </span>
              which provided valuable insights for participants on
              research-level technical topics from the student's perspective
              especially motivating Al/ML Enthusiasts.
            </p>
          </div>
        </div>
        <Winners />
        <Sponsors />
      </div>
    </div>
  );
}
