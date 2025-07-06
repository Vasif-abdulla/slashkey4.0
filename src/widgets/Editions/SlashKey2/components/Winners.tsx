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

const winnerDetails = {
  first: [
    {
      name: "Adwaitha Binu",
      college: "RSET",
    },
    {
      name: "Abhiram Ramachandran",
      college: "RSET",
    },
    {
      name: "Amrutha Anandan Nair",
      college: "RSET",
    },
    {
      name: "Aleena Mary Karatra",
      college: "RSET",
    },
  ],

  second: [
    {
      name: "Joel K George",
      college: "MEC",
    },
    {
      name: "Harikrishnan B",
      college: "MEC",
    },
    {
      name: "Sanjay Sudheer",
      college: "MEC",
    },
    {
      name: "Joel Joseph Roshan",
      college: "MEC",
    },
  ],

  third: [
    {
      name: "Angelo Antu",
      college: "CUSAT",
    },
    {
      name: "Harshed Abdulla",
      college: "CUSAT",
    },
    {
      name: "Sameer Abdulla",
      college: "CUSAT",
    },
    {
      name: "Heyron J Milton",
      college: "CUSAT",
    },
  ],
};

export default function Winners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 m-8 py-8">
      <div>
        <div className="mt-6 text-md leading-8 text-justify text-gray-800">
          <div className="py-8">
            <div className="font-bold text-slk-regular text-4xl ">Winner</div>
            <div className="font-semibold text-slk-light py-2">
              Team ASTROID
            </div>
            <div className="py-4">
              <Image
                src={"/images/assets/slashkey2/winners/first.png"}
                alt={imageAlts.SLK2_WINNER}
                height={600}
                width={770}
              />
            </div>
            <div className="py-4">
              {winnerDetails?.first?.map((item, index) => (
                <div className="flex" key={`wineer_key${index + 1}`}>
                  <p className="font-regular">{item?.name}</p>
                  <p className="font-light mx-2">{item?.college}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-6 text-md leading-8 text-justify text-gray-800">
          <div className="py-8">
            <div className="font-bold text-slk-regular text-4xl ">
              Runner Up
            </div>
            <div className="font-semibold text-slk-light py-2">Team Pixel</div>
            <div className="py-4">
              <Image
                src={"/images/assets/slashkey2/winners/pixel.png"}
                alt={imageAlts.SLK2_RUNNER_UP2}
                height={600}
                width={770}
              />
            </div>
            <div className="py-4">
              {winnerDetails?.second?.map((item, index) => (
                <div className="flex" key={`wineer_key${index + 1}`}>
                  <p className="font-regular">{item?.name}</p>
                  <p className="font-light mx-2">{item?.college}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-6 text-md leading-8 text-justify text-gray-800">
          <div className="py-8">
            <div className="font-bold text-slk-regular text-4xl ">
              Runner Up
            </div>
            <div className="font-semibold text-slk-light py-2">
              Team Parippuvada Overflow
            </div>
            <div className="py-4">
              <Image
                src={"/images/assets/slashkey2/winners/paripp.png"}
                alt={imageAlts.SLK2_RUNNER_UP1}
                height={600}
                width={770}
              />
            </div>
            <div className="py-4">
              {winnerDetails?.third?.map((item, index) => (
                <div className="flex" key={`wineer_key${index + 1}`}>
                  <p className="font-regular">{item?.name}</p>
                  <p className="font-light mx-2">{item?.college}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
