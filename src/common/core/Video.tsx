/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";

export default function Video({ className }: { className: string }) {
  return (
    <video
      width="320"
      height="240"
      controls={false}
      preload="none"
      autoPlay
      muted
      loop
      playsInline
      className={className}
    >
      <source src="/home.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
