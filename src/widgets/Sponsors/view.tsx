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
    path: "/images/assets/sponsors/xyz-white-logo.svg",
    alt: "xyz",
    height: 70,
    width: 170,
  },
  {
    id: 2,
    path: "/images/assets/sponsors/Axure_logo_400.svg",
    alt: "axure",
    height: 80,
    width: 160,
  }
];

export default function Sponsors() {
  return (
    <div className="py-8 lg:py- mx-auto max-w-screen-xl px-4">
      <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-slk-regular md:text-4xl text-center">
        Our Sponsors
      </h2>
      <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-2">
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
