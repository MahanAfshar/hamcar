"use clinet";
import { useState } from "react";
import Image from "next/image";

interface Props {
  srcIcon?: string;
  altIcon?: string;
}

export default function Toggle({
    srcIcon,
    altIcon = "icon"
}: Props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className="bg-gray-300 rounded-full w-11 h-6 relative"
      onClick={() => setIsActive((prev) => !prev)}
    >
      <div
        className={`bg-white-200 w-5 h-5 rounded-full grid place-content-center absolute top-1/2 -translate-y-1/2 ${
          isActive ? "left-0.5" : "right-0.5"
        }`}
      >
        {srcIcon && (
          <Image
            src={srcIcon}
            width={14}
            height={14}
            alt={altIcon}
            priority
            className={isActive ? "contrast-0" : "filter-none"}
          />
        )}
      </div>
    </button>
  );
}
