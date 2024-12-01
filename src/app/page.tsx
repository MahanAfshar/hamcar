"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  breadcrumbs,
  cars,
  dropdowns,
  infoCars,
  infoCarsTwo,
} from "@/constants";
import { numberWithCommas } from "@/utils";
import home from "@/../public/icons/home.svg";
import arrow from "@/../public/icons/arrow.svg";
import time from "@/../public/icons/time.svg";
import menu from "@/../public/icons/menu.svg";
import Button from "@/components/reuseable/Button";
import Dropdown from "@/components/reuseable/Dropdown";
import mvm from "@/../public/icons/mvm.svg";
import banner from "@/../public/images/banner.png";
import filterIcon from "@/../public/icons/filter.svg";
import polygonGreen from "@/../public/icons/polygonGreen.svg";
import polygonRed from "@/../public/icons/polygonRed.svg";
import amico from "@/../public/icons/amico.svg";
import barGreen from "@/../public/icons/barGreen.svg";
import barRed from "@/../public/icons/barRed.svg";
import Filter from "@/components/Filter";
import Card from "@/components/Card";

export default function HomePage() {
  const [sliceEnd, setSliceEnd] = useState(1);

  return (
    <main className="relative py-3 px-2 mx-auto sm:p-4 lg:py-5 lg:px-20">
      <ul className="hidden sm:flex items-center gap-3">
        <Image src={home} width={16} height={16} alt="home" className="pb-1" />
        {breadcrumbs.map((breadcrumb) => (
          <li
            key={breadcrumb.title}
            className="flex gap-3 [&:first-of-type_:first-child]:hidden"
          >
            <Image
              src={arrow}
              width={12}
              height={12}
              alt="arrow"
              className="rotate-90"
            />
            <Link href={breadcrumb.href}>{breadcrumb.title}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between text-sm sm:my-4">
        <div className="font-bold lg:text-lg">
          <span className="md:hidden">آگهی های خرید خودرو</span>
          <span className="hidden md:block">
            همه آگهی های فروش خودرو فلان بیسار ( آگهی ۱،۲۳۴ )
          </span>
        </div>
        <div className="flex items-center gap-1 sm:gap-5">
          <Button
            className="bg-white-100 p-2 sm:hidden"
            srcIcon={time}
            classNameIcon="w-3 h-3 brightness-0"
            altIcon="history"
          />
          <Link
            href="#"
            className="hidden sm:flex items-center gap-2 text-blue-primary pl-5 border-l-2 border-white-100"
          >
            <Image src={time} width={16} height={16} alt="history" />
            جستجو های اخیر من
          </Link>
          <Button
            className="bg-white-100 p-2"
            srcIcon={menu}
            classNameIcon="w-3 h-3 sm:w-5 sm:h-5"
            altIcon="menu"
          />
          <Dropdown
            placeholder="ترتیب آگهی ها"
            className="bg-white-100 gap-4 sm:py-2 sm:min-w-[200px]"
            optionsClassName="bg-white-100 sm:*:py-2"
            options={dropdowns}
            dynamicValue
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="bg-white-100 p-2 mt-4 rounded-md md:hidden">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">قیمت روز مدیران خودرو</h3>
          <Image src={mvm} width={64} height={21} alt="brand" />
        </div>
        <ul>
          {infoCars.slice(0, sliceEnd).map((infoCar, index) => (
            <li
              key={index}
              className="font-bold text-sm *:flex *:items-center *:justify-between *:mt-4"
            >
              <div>
                <span>{infoCar.name}</span>
                <span>{numberWithCommas(infoCar.price)} تومان</span>
              </div>
              <div>
                <span>
                  {infoCar.model} | {infoCar.brand}
                </span>
                {infoCar.percentage.startsWith("-") ? (
                  <div className="flex items-center gap-2">
                    <span className="text-red-primary">
                      % {infoCar.percentage}
                    </span>
                    <Image
                      src={polygonRed}
                      width={12}
                      height={12}
                      alt="arrow"
                      className="mb-1.5"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-green-primary">
                      % {infoCar.percentage}
                    </span>
                    <Image
                      src={polygonGreen}
                      width={12}
                      height={12}
                      alt="arrow"
                      className="mb-1.5"
                    />
                  </div>
                )}
              </div>
              <div className="text-gray-600 text-sm font-light">
                <span>{infoCar.time} ساعت پیش</span>
                <span>{infoCar.type}</span>
              </div>
            </li>
          ))}
          <div
            className="relative w-full py-1.5 grid place-content-center cursor-pointer"
            onClick={() =>
              sliceEnd == 1 ? setSliceEnd(infoCars.length) : setSliceEnd(1)
            }
          >
            <Image
              src={arrow}
              width={16}
              height={16}
              alt="arrow"
              className={sliceEnd == 1 ? "rotate-0" : "rotate-180"}
            />
          </div>
        </ul>
      </div>
      <div className="grid grid-cols-4 items-start gap-4">
        <Filter />
        <div className="col-span-4 md:col-span-3 text-sm lg:text-base">
          <div className="hidden md:block p-3 bg-white-200 rounded-md shadow-lg shadow-black-200/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold">
                <Image src={amico} width={45} height={45} alt="amico" />
                <h3>قیمت روز خودرو های آمیکو</h3>
              </div>
              <Link href="#" className="text-blue-primary flex gap-2">
                مشاهده لیست قیمت ها
                <Image
                  src={arrow}
                  width={10}
                  height={10}
                  alt="arrow"
                  className="rotate-90"
                  style={{
                    filter:
                      "invert(36%) sepia(80%) saturate(3907%) hue-rotate(199deg) brightness(100%) contrast(109%)",
                  }}
                />
              </Link>
            </div>
            <ul className="w-full">
              <div className="flex flex-col gap-6 mt-6">
                {infoCarsTwo.map((infoCar, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">{infoCar.name}</span>
                      <span className="text-black-100 mr-1 text-sm">
                        {infoCar.model}
                      </span>
                    </div>
                    <div className="font-bold">
                      {infoCar.type} - {infoCar.time} روز پیش
                    </div>
                    {infoCar.percentage.startsWith("-") ? (
                      <>
                        <div>
                          <Image
                            src={barRed}
                            width={48}
                            height={20}
                            alt="decending"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-red-primary">
                            % {infoCar.percentage}
                          </span>
                          <Image
                            src={polygonRed}
                            width={12}
                            height={12}
                            alt="arrow"
                            className="mb-1.5"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <Image
                            src={barGreen}
                            width={48}
                            height={20}
                            alt="accending"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-primary">
                            % {infoCar.percentage}
                          </span>
                          <Image
                            src={polygonGreen}
                            width={12}
                            height={12}
                            alt="arrow"
                            className="mb-1.5"
                          />
                        </div>
                      </>
                    )}
                    <div className="font-bold">
                      <span>{numberWithCommas(infoCar.price)}</span>
                      <span className="text-black-100 mr-1">تومان</span>
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </div>
          {cars.slice(0, 4).map((car) => (
            <Card key={car.name} {...car} />
          ))}
          <Image
            src={banner}
            width={900}
            height={140}
            alt="banner"
            quality={100}
            placeholder="blur"
            className="rounded-2xl my-4 min-h-24"
          />
          {cars.slice(4).map((car) => (
            <Card key={car.name} {...car} />
          ))}
          <Button
            title="اعمال فیلتر آگهی"
            className="bg-black-200 font-bold text-white-100 fixed bottom-3 left-1/2 -translate-x-1/2 w-11/12 !rounded-full flex flex-row-reverse items-center justify-center gap-3 py-3 md:hidden"
            srcIcon={filterIcon}
            classNameIcon="w-5 h-5"
            altIcon="filter"
          />
        </div>
      </div>
    </main>
  );
}
