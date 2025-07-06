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

const sponsors = [
  {
    id: 1,
    path: "/images/assets/slashkey2/sponsors/echo.png",
    alt: "Echo3D",
    height: 80,
    width: 180,
  },
  {
    id: 2,
    path: "/images/assets/slashkey2/sponsors/wolfram.png",
    alt: "Wolfram",
    height: 80,
    width: 160,
  },
  {
    id: 3,
    path: "/images/assets/slashkey2/sponsors/xyz.png",
    alt: "XYZ Domains",
    height: 80,
    width: 160,
  },
];

export default function Sponsors() {
  return (
    <div className="py-8 lg:py- mx-auto max-w-screen-xl px-4">
      <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-slk-regular md:text-4xl">
        Slash Key 2.0 Sponsors
      </h2>
      <div className="grid justify-center py-8">
        <div>
          <Image
            src="/images/assets/slashkey2/sponsors/oneapi1.png"
            alt="One API"
            height={100}
            width={240}
          />
          <p className="py-4 text-slk-regular text-center font-semibold text-2xl">
            Title Sponsor
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3">
        {sponsors?.map((item) => (
          <div
            className="flex justify-center items-center sm:mx-2 md:mx-0 lg:mx-0"
            key={item?.id}
          >
            <Image
              src={item?.path}
              alt={item?.alt}
              height={item?.height}
              width={item?.width}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
