/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Video from "@core/Video";
import HeroView from "@widgets/LandingPage/components/HeroView";
import CallForHost from "./components/CallForHostView";
import CallForHostView from "./components/CallForHostView";
import OurHostView from "../Host/view";
import Sponsors from "@widgets/Sponsors/view";
import FeatureView from "./components/FeatureView";

export default function LandingPageview() {
  return (
    <>
    
      <div className="bg-slk-black-200 relative overflow-hidden w-full min-h-screen">
        <Video className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-1 bg-black-100 opacity-80" />
        <div className="container m-auto px-6 py-20 md:pb-0 md:pt-40 md:px-12 lg:py-0 lg:px-10 relative z-10">
          <HeroView />
        </div>
      </div>
      <FeatureView />
      <Sponsors />
    </>
  );
}
