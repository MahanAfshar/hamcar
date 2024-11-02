"use client";
import { useState } from "react";
import Image from "next/image";
import { filterItems } from "@/constants";
import close from "@/../public/icons/close.svg";
import Dropdown from "./reuseable/Dropdown";

export default function Filter() {
  const [filters, setFilters] = useState<string[]>([]);

  return (
    <div className="hidden md:flex flex-col gap-4">
      {filters.length > 0 && (
        <div className="bg-white-200 rounded-md shadow-lg shadow-black-200/20 p-1 xl:p-3 hidden md:block text-[13px] lg:text-base">
          <div className="flex items-center justify-between">
            <h5 className="font-medium lg:font-bold">فیلتر های انتخاب شده</h5>
            <span
              className="text-red-primary cursor-pointer"
              onClick={() => setFilters([])}
            >
              حذف همه
            </span>
          </div>
          <ul className="flex items-center gap-2 flex-wrap mt-4">
            {filters.map((filter) => (
              <li
                key={filter}
                className="flex items-center gap-4 rounded-full py-1 px-4 text-blue-primary border border-blue-primary bg-blue-200/50"
              >
                {filter}
                <div>
                  <Image
                    src={close}
                    width={12}
                    height={12}
                    alt="close"
                    className="cursor-pointer"
                    onClick={() =>
                      setFilters((prev) =>
                        prev.filter((item) => item !== filter)
                      )
                    }
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ul className="flex flex-col gap-4">
        {filterItems.map((filterItem) => (
          <li key={filterItem.placeholder}>
            <Dropdown
              className="bg-white-200 rounded-md shadow-md shadow-black-200/20 !p-3"
              placeholder={filterItem.placeholder}
              options={filterItem.value}
              optionsClassName="bg-[#fff] rounded-md shadow-md shadow-black-200/20 *:p-3 *:border-b *:border-gray-200 !relative !z-0"
              onClick={(value) => setFilters([...filters, value])}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
