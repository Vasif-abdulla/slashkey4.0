import React from "react";
import Link from "@components/Link";
import Image from "@components/Image";
import { imageAlts } from "@utils/constants";

export default function SlashKeyLogo() {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <Image
        src="/images/logos/slashkey/white3.png"
        alt={imageAlts?.LOGO}
        width={180}
        height={60}
        className="h-10 w-auto"
      />
    </Link>
  );
}
