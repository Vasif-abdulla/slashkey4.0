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

const sponsors = [
  {
    id: 1,
    path: "/images/assets/slashkey3/sponsors/YP.png",
    alt: "YP",
    height: 80,
    width: 160,
  },
  {
    id: 2,
    path: "/images/assets/slashkey3/sponsors/axure.png",
    alt: "Axure",
    height: 80,
    width: 160,
  },
  {
    id: 3,
    path: "/images/assets/slashkey3/sponsors/xyz.svg",
    alt: "XYZ",
    height: 100,
    width: 160,
  },
  {
    id: 4,
    path: "/images/assets/slashkey3/sponsors/iic.png",
    alt: "iic",
    height: 100,
    width: 160,
  },
];

export default function Sponsors() {
  return (
    <div className="py-8 lg:py- mx-auto max-w-screen-xl px-4">
      <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-slk-regular md:text-4xl">
        Slash Key 3.0 Sponsors
      </h2>
      <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
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
