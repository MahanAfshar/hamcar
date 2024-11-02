"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Toggle from "./reuseable/Toggle";
import Input from "./reuseable/Input";
import Button from "./reuseable/Button";
import { menuItems } from "@/constants";
import logo from "@/../public/icons/logo.svg";
import logoPersian from "@/../public/icons/logoPersian.svg";
import arrow from "@/../public/icons/arrow.svg";
import theme from "@/../public/icons/theme.svg";
import search from "@/../public/icons/search.svg";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b-2 border-white-100 bg-[#fff]">
      <div className="flex items-center justify-between px-2 py-3 sm:p-4 xl:hidden">
        <div className="flex items-center gap-2">
          <div
            className="*:w-4 *:h-0.5 *:rounded-xl *:bg-black-200 flex flex-col gap-1 bg-white-100 p-3 rounded-lg cursor-pointer"
            onClick={() => setIsActive(true)}
          >
            <div />
            <div />
            <div />
          </div>
          <div className="p-2.5 bg-white-100 rounded-md grid place-content-center cursor-pointer">
            <Image src={search} width={18} height={18} alt="search" />
          </div>
        </div>
        <Link href="/">
          <Image src={logo} width={120} height={30} alt="logo" priority />
        </Link>
        {isActive && (
          <>
            <div
              className="bg-black-200/25 backdrop-blur-lg fixed inset-0"
              onClick={() => setIsActive(false)}
            />
            <div className="fixed top-0 right-0 bottom-0 min-w-[250px] bg-white-100 p-5 overflow-y-auto">
              <Image
                src={logo}
                width={120}
                height={30}
                alt="logo"
                priority
                className="mx-auto"
              />
              <ul className="*:mt-5">
                <li>
                  <Link href="#" className="flex items-center justify-between">
                    ورود و ثبت نام
                    <Image
                      src={arrow}
                      width={14}
                      height={14}
                      alt="arrow"
                      className="rotate-90"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center justify-between">
                    ثبت آگهی
                    <Image
                      src={arrow}
                      width={14}
                      height={14}
                      alt="arrow"
                      className="rotate-90"
                    />
                  </Link>
                </li>
                {menuItems.map((menuItem) => (
                  <li key={menuItem.title}>
                    <Link
                      href={menuItem.href}
                      className="flex items-center justify-between"
                    >
                      {menuItem.title}
                      <Image
                        src={arrow}
                        width={14}
                        height={14}
                        alt="arrow"
                        className="rotate-90"
                      />
                    </Link>
                  </li>
                ))}
                <li className="flex items-center justify-between">
                  تغییر تم
                  <Toggle srcIcon={theme} altIcon="toggle theme" />
                </li>
                <li>
                  <Input
                    className="text-gray-400 placeholder:text-gray-400"
                    placeholder="جستجو..."
                    srcIcon={search}
                    srcClassName=""
                    altIcon="search"
                  />
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      <div className="hidden px-8 py-6 text-lg xl:flex xl:items-center xl:justify-between *:font-bold">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image src={logoPersian} width={120} height={30} alt="logo" />
          </Link>
          <ul className="flex items-center *:flex *:items-center gap-8 pt-2">
            {menuItems.map((menuItem) => (
              <li key={menuItem.title}>
                <Link href={menuItem.href}>{menuItem.title}</Link>
              </li>
            ))}
            <li className="border-l-2 border-white-100 pl-8">
              <Toggle srcIcon={theme} altIcon="toggle theme" />
            </li>
            <li>
              <Input
                className="text-gray-400 placeholder:text-gray-400"
                placeholder="جستجو..."
                srcIcon={search}
              />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <Link href="#" className="font-normal">
            ورود | ثبت نام
          </Link>
          <Button
            title="ثبت آگهی"
            className="bg-blue-primary py-2 px-8 text-white-100 font-normal"
          />
        </div>
      </div>
    </header>
  );
}
