/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import type { Metadata } from "next";
import "@styles/scss/main.scss";
import { Children } from "@lib/types";
import Header from "@widgets/Header";
import Footer from "@widgets/Footer";

export const metadata: Metadata = {
  title: "Slash Key 4.0",
  description:
    "Slash Key is a 30-hour offline hackathon organized by the IEEE Computer Society Kerala Chapter, which aims to bring together aspiring developers, coders and tech enthusiasts from various backgrounds to collaborate and create cutting edge solutions.",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
