/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";


export default function TracksView() {
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-20 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="flex flex-wrap  py-8">
            <div
              className="w-full m-4"
            >


              <div className="flex flex-col items-center py-10">
                <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-black-100 justify-center">
                  Tracks
                </h2>
              </div>
              {/* <div className="max-w-sm p-6 bg-slk-dark border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <p className="font-bold text-gray-800 text-center">Sustainability</p>

              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
