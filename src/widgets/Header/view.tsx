/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

"use client";

import dynamic from "next/dynamic";
import Link from "@components/Link";
import Image from "@components/Image";
import Icon3Bars from "@icons/Icon3Bars";
import { Fragment, useState } from "react";
import SlashKeyLogo from "@components/Logo";
import IconChevronDown from "@icons/IconChevronDown";
import { Popover, Transition } from "@headlessui/react";
import { editionOptions, navLinks } from "@utils/constants";
const NavMobileView = dynamic(
  () => import("@widgets/Header/components/NavMobileView")
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleCloseMobileMenu = (): void => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 custom-header ">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <SlashKeyLogo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Icon3Bars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {navLinks?.map((item, index) => (
            <Link
              href={item?.url}
              className="text-sm font-medium leading-6 text-gray-100"
              key={`navlink_Key${index + 1}`}
            >
              {item?.name}
            </Link>
          ))}
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-medium leading-6 text-gray-100">
              Editions
              <IconChevronDown
                className="h-5 w-5 flex-none text-gray-200"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -right-1 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {editionOptions?.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
                    >
                      <Link href={item?.href} className="flex items-center">
                        {/* Wrap image and content in Link */}
                        <div className="flex h-4 w-12 flex-none items-center justify-center rounded-lg mr-4">
                          <Image
                            src={item?.imgSrc as string}
                            alt={item?.alt}
                            className="h-6 w-12"
                            width={180}
                            height={60}
                          />
                        </div>
                        <div className="flex-shrink text-gray-600 group-hover:text-slk-light">
                          {item?.name}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="https://www.yepdesk.com/slashkey-3-0"
            target="_blank"
            className="text-sm font-semibold leading-6 text-gray-200"
          >
            Register<span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <NavMobileView
        mobileMenuOpen={mobileMenuOpen}
        handleCloseMobileMenu={handleCloseMobileMenu}
      />
    </header>
  );
}
