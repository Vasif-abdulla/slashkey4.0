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
import Link from "@components/Link";
export default function CallForHostView() {
  return (
    <div className="lg:flex">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6">

        <h1 className="mb-4 text-3xl font-semibold text-white  dark:text-white underline underline-offset-3 decoration-8 decoration-slk-regular dark:decoration-slk-light">Updates</h1>
        <div className="">
          <div>
            <h1 className="mb-4 text-4xl font-bold text-white  dark:text-white mt-9">Call For Host</h1>
            <p className="mb-14 text-base font-normal text-white  dark:text-white mt-9">IEEE Computer Society Kerala Chapter presents the opportunity to host SlashKey 3.0.<br></br> Grab your chance before <span className="text-slk-light italic">21st April, 2024.</span></p>
            <Link
              href="http://bit.ly/Slashkey" target="_blank"
              className="mt-12 rounded-md bg-slk-light px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slk-regular transition duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register Now
            </Link>
          </div>
        
        </div>
      </div>
      <Image
            className="h-auto max-w-full rounded-lg m-16"
            src="/images/assets/CallForHost/CallForHost.jpg"
            alt="hg"
            width={400}
            height={400}
          />
    </div>

  );
}
