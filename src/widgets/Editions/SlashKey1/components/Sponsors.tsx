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
    path: "/images/assets/slashkey1/sponsors/techx-logo.png",
    alt: "TechX",
    height: 80,
    width: 180,
  },
  {
    id: 2,
    path: "/images/logos/cs/IEEE-CS_LogoTM-orange.png",
    alt: "IEEE CS",
    height: 80,
    width: 160,
  },
  {
    id: 3,
    path: "/images/assets/slashkey1/sponsors/syplogo512_white.png",
    alt: "SYP Global",
    height: 100,
    width: 180,
  },
];

export default function Sponsors() {
  return (
    <div className="py-8 lg:py- mx-auto max-w-screen-xl px-4">
      <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-slk-regular md:text-4xl">
        Slash Key 1.0 Sponsors
      </h2>
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
