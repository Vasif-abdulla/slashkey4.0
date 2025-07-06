/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

"use client";
import React, { useState } from "react";
import Image from "@components/Image";
import IconChevronDown from "@icons/IconChevronDown";
const faqs = [
  {
    id: 1,
    question: "Who can participate in the hackathon?",
    answer: "Teams of 3 or 4 members are eligible to participate.",
  },
  {
    id: 2,
    question: "What should participants bring to the event?",
    answer:
      "Each member should bring their laptops for use during the hackathon.",
  },
  {
    id: 3,
    question: "How long is the hackathon?",
    answer: "The event spans 30 hours, held on July 19th and 20th, 2024.",
  },
  {
    id: 4,
    question: "How are the event phases structured?",
    answer:
      "The first 6 hours are dedicated to ideation, followed by 20-22 hours for building and development. The last 2 hours are for presentations.",
  },
  {
    id: 5,
    question: "Is there a refund policy for registration fees?",
    answer:
      "No, refunds are not provided once registered, regardless of participation.",
  },
  {
    id: 6,
    question: "Who evaluates the progress of the teams during the hackathon?",
    answer:
      "The organizing committee conducts progress evaluations every 6 hours.",
  },
  {
    id: 7,
    question: "How are winners determined?",
    answer:
      "Winners are selected based on the presentations of qualified teams at the end of the hackathon.",
  },
  {
    id: 8,
    question: "What happens if there are ties or disputes?",
    answer:
      "The decisions of the organizing committee are final and binding in all matters related to the event.",
  },
];

export default function FAQView() {
  const [tab, setTab] = useState(0);

  const handleClick = (idx: number) => {
    setTab(tab === idx ? 0 : idx);
  };

  const handleRotate = (idx: number) => {
    return tab === idx ? "rotate-180" : "";
  };

  const handleToggle = (idx: number) => {
    return tab === idx ? "100%" : "0";
  };
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-20 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="flex justify-center items-start my-2">
            <div className="w-full sm:w-10/13 md:w-3/5 my-1">
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-black-100 text-center m-10">
                Frequently Asked Questions
              </h2>
              <ul className="flex flex-col">
                {faqs.map((faq) => (
                  <li className="bg-white my-2 shadow-lg" key={faq.id}>
                    <h2
                      onClick={() => handleClick(faq.id)}
                      className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <IconChevronDown
                        className={`h-5 w-5 flex-none text-slk-light transform transition-transform duration-500 ${handleRotate(
                          faq.id
                        )}`}
                        aria-hidden="true"
                      />
                    </h2>
                    <div
                      className="border-l-2 border-slk-light overflow-hidden duration-500 transition-all"
                      style={{ maxHeight: handleToggle(faq.id) }}
                    >
                      <p className="p-3 text-gray-900 text-sm">{faq.answer} </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
