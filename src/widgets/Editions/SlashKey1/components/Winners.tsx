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

export default function Winners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 m-8 py-8">
      <div>
        <div className="mt-6 text-md leading-8 text-justify text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src={"/images/assets/slashkey1/winners/first.png"}
                alt={imageAlts.SLK1_WINNER}
                height={600}
                width={770}
              />
            </div>
            <div className="py-8">
              <div className="font-bold text-slk-regular text-4xl ">Winner</div>
              <div className="font-semibold text-slk-light py-2">
                Team ASTROID
              </div>
              <div>
                <div className="flex">
                  <p className="font-regular">Abhijith U</p>
                  <p className="font-light mx-2">SRM IST</p>
                </div>
                <div className="flex">
                  <p className="font-regular">Devanand A</p>
                  <p className="font-light mx-2">GEC Barton Hill</p>
                </div>
                <div className="flex">
                  <p className="font-regular">Akhiljith K</p>
                  <p className="font-light mx-2">GEC Barton Hill</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-6 text-md leading-8 text-justify text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src={"/images/assets/slashkey1/winners/second.png"}
                alt={imageAlts.SLK1_RUNNER_UP}
                height={600}
                width={770}
              />
            </div>
            <div className="py-8">
              <div className="font-bold text-slk-regular text-4xl ">
                Runner Up
              </div>
              <div className="font-semibold text-slk-light py-2">
                Team Parippuvada Overflow
              </div>
              <div>
                <div className="flex">
                  <p className="font-regular">Angelo Antu</p>
                  <p className="font-light mx-2">CUSAT</p>
                </div>
                <div className="flex">
                  <p className="font-regular">Nandu Kannan</p>
                  <p className="font-light mx-2">CUSAT</p>
                </div>
                <div className="flex">
                  <p className="font-regular">Kiran A</p>
                  <p className="font-light mx-2">Sacred Heart College</p>
                </div>
                <div className="flex">
                  <p className="font-regular">Heyron J Milton</p>
                  <p className="font-light mx-2">CUSAT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
