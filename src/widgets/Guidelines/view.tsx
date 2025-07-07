/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";

export default function GuidelinesView() {
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-20 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="flex flex-wrap  py-8">
            <div className="w-full  bg-white border border-slk-light rounded-lg shadow m-4">
              <div className="flex flex-col items-center py-10">
                <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slk-regular justify-center">
                  Guidelines
                </h2>
                <div>
                  <ul className="max-w-5xl space-y-1 text-gray-700 list-disc list-inside mt-10 mb-20 mx-5">
                    <li className="list-disc marker:[color:#F35B19]">
                      <strong>Event Details:</strong>
                      <ul className="list-disc marker:text-gray-600 ml-10 guidelines">
                        <li>
                          Slash Key is a 30-hour offline hackathon organized by
                          the IEEE Computer Society Kerala Chapter 
                          {/* and hosted by
                          NIT Calicut. */}
                        </li>
                        {/* <li>Date: July 19th and 20th, 2024.</li> */}
                        {/* <li>
                          Prize Pool: 50K and exciting goodies for all
                          registered teams.
                        </li> */}
                      </ul>
                    </li>
                    <li className="list-disc marker:[color:#F35B19] pt-5">
                      <strong>Team Composition:</strong>
                      <ul className="list-disc marker:text-gray-600 ml-10 guidelines">
                        <li>
                          Participants can either form teams of up to 4 members
                          or choose to participate individually. All
                          participants, whether in a team or individual, must be
                          registered accordingly.
                        </li>
                        <li>
                          The team members are expected to bring laptops for
                          their use.
                        </li>
                        <li>
                          All the team members have to register individually on
                          Yepdesk.
                        </li>
                      </ul>
                    </li>
                    <li className="list-disc marker:[color:#F35B19] pt-5">
                      <strong>Event Phases:</strong>
                      <ul className="list-disc marker:text-gray-600 ml-10 guidelines">
                        <li>
                          <strong>Ideation Phase (First 6 hours):</strong>
                          <ul className="list-disc marker:text-gray-500 ml-10 ">
                            <li>
                              Participants brainstorm ideas on provided themes
                              and problem statements.
                            </li>
                            <li>
                              Professional mentors available for guidance.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Building Phase (20-22 hours):</strong>
                          <ul className="list-disc marker:text-gray-500 ml-10">
                            <li>Teams work on developing their solutions.</li>
                            <li>Progress evaluation every 6 hours.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Presentation Phase (Last 2 hours):</strong>
                          <ul className="list-disc marker:text-gray-500 ml-10">
                            <li>Qualified teams present their solutions.</li>
                            <li>Winners announced after presentations.</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="list-disc marker:[color:#F35B19] pt-5">
                      <strong>Consent and Terms:</strong>
                      <ul className="list-disc marker:text-gray-600 ml-10 guidelines">
                        <li>
                          By registering for the hackathon, the participant
                          shall thereby provide their consent to the organizers
                          to use his/her contact details provided in the form to
                          contact him/her for updates regarding this event
                        </li>
                        <li>
                          By registering for the hackathon, the participant
                          shall thereby provide his/her consent to the
                          organizers of the event to use the contact details
                          provided in the form to contact him/her for updates
                          regarding future events conducted by the IEEE Computer
                          Society Kerala Chapter.
                        </li>
                        <li>
                          By registering for the hackathon, the participants
                          shall thereby agree with the terms and conditions and
                          assure his/her enthusiastic participation in this
                          event.
                        </li>
                      </ul>
                    </li>
                    <li className="list-disc marker:[color:#F35B19] pt-5">
                      <strong>Decision Authority:</strong> The organizing
                      committee's decisions are final and binding.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
