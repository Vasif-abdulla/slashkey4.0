/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Link from "@components/Link";
import IconLocation from "@icons/IconLocation";
import IconCalendar from "@icons/IconCalendar";

export default function HeroView() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 mt-20">
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300">
            IEEE CS Kerala Chapter presents
          </div>
        </div>
        <div className="text-center">
          <h1
            className="hero glitch1 layerstext-4xl font-bold tracking-tight text-7xl"
            data-text="SLASH KEY 4.0"
          >
            <span>SLASH KEY 4.0</span>
          </h1>
          <p className="mt-6 text-sm leading-8 text-gray-300">
            A 30-hour hackathon that offers students from across Kerala the
            opportunity to solve real-world challenges of society and showcase
            their innovative solutions.
          </p>
          <div className="mt-10 flex flex-col items-center lg:flex-row lg:justify-center lg:gap-x-6">
            <Link
              href="https://www.yepdesk.com/slashkey-3-0"
              target="_blank"
              className="rounded-md border boder-indigo bg-slk-light px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#C04812] transition duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register Now
            </Link>
            <Link
              href="/about"
              className="mt-4 lg:mt-0 text-sm font-semibold leading-6 text-white hover:text-gray-400 transition duration-300 ease-in-out"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-32 flex flex-col items-center lg:flex-row lg:justify-center lg:gap-x-96">
            <div className="flex flex-col items-center mb-20 sm:mb-0">
              <div className="flex flex-row items-center">
                <IconLocation className="text-slk-light w-8 lg:w-10" />
                <h1 className="ml-2 text-xl lg:text-2xl font-semibold text-gray-500">
                  Host
                </h1>
              </div>
              <h1 className="m-3 text-2xl lg:text-3xl font-semibold text-gray-300">
                NIT Calicut
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center">
                <IconCalendar className="text-slk-light w-10" />
                <h1 className="ml-3 text-xl lg:text-2xl font-semibold text-gray-500">
                  Date
                </h1>
              </div>
              <h1 className="m-3 text-2xl lg:text-3xl font-semibold text-gray-300">
                July 19 - 20
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
