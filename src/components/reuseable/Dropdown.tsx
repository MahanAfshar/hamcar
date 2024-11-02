"use client";
import { useState } from "react";
import Image from "next/image";
import arrow from "@/../public/icons/arrow.svg";

interface Props {
  className?: string;
  placeholder: string;
  options: string[];
  optionsClassName?: string;
  onClick: (value: string) => void;
}

export default function Dropdown({
  className,
  placeholder,
  options,
  optionsClassName,
  onClick,
}: Props) {
  const [value, setValue] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative font-medium dropdown">
      <button
        className={`w-full rounded-md px-2 py-1 flex items-center justify-between cursor-pointer ${className}`}
        onClick={() => setIsOpen((prev) => !prev)}
        onBlur={() => setTimeout(() => setIsOpen(false), 100)}
      >
        {value}
        <Image
          src={arrow}
          width={12}
          height={12}
          alt="arrow"
          className={isOpen ? "rotate-180" : "rotate-0"}
        />
      </button>
      {isOpen && (
        <ul
          className={`absolute z-50 w-full mt-1 rounded-md ${optionsClassName}`}
        >
          {options.map((option) => (
            <li
              key={option}
              className="px-2 py-1 cursor-pointer [&:not(:last-of-type)]:border-b border-white-200"
              onClick={() => {
                setValue(option);
                setIsOpen(false);
                onClick(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
