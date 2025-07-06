/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Dialog from "@core/Dialog";
import IconClose from "@icons/IconClose";
import { editionOptions, navLinks } from "@utils/constants";
import { Disclosure } from "@headlessui/react";
import IconChevronDown from "@icons/IconChevronDown";
import Link from "@components/Link";
import SlashKeyLogo from "@components/Logo";

interface NavMobileViewProps {
  mobileMenuOpen: boolean;
  handleCloseMobileMenu: () => void;
}

function classNames(...classes: string[]) {
  return classes?.filter(Boolean)?.join(" ");
}

export default function NavMobileView({
  mobileMenuOpen,
  handleCloseMobileMenu,
}: NavMobileViewProps) {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={handleCloseMobileMenu}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <SlashKeyLogo />
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={handleCloseMobileMenu}
          >
            <span className="sr-only">Close menu</span>
            <IconClose className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navLinks?.map((item, index) => (
                <Link
                  href={item?.url}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  key={`navlink_Key${index + 1}`}
                  onClick={handleCloseMobileMenu}
                >
                  {item?.name}
                </Link>
              ))}
              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Editions
                      <IconChevronDown
                        className={classNames(
                          open ? "rotate-180" : "",
                          "h-5 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {editionOptions?.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item?.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={handleCloseMobileMenu}
                        >
                          {item?.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
