import Image, { StaticImageData } from "next/image";
import { numberWithCommas } from "@/utils";
import shop from "@/../public/icons/shop.svg";
import camera from "@/../public/icons/camera.svg";
import marker from "@/../public/icons/marker.svg";
import hamcarBadge from "@/../public/icons/hamcarBadge.svg";
import verifiedBadge from "@/../public/icons/verifiedBadge.svg";

interface Props {
  image: StaticImageData;
  name: string;
  time: number;
  model: number;
  usage: number;
  type: string;
  isStore: boolean;
  location: string;
  price: number;
}

export default function Card({
  image,
  name,
  time,
  model,
  usage,
  type,
  isStore,
  location,
  price,
}: Props) {
  return (
    <div className="relative p-3 grid grid-cols-6 gap-4 bg-white-200 rounded-md shadow-lg shadow-black-200/20 mt-4 text-xs md:text-base">
      <div className="relative col-span-2 rounded-md min-h-32 md:min-h-36 grid grid-rows-5">
        <Image
          src={image}
          width={250}
          height={145}
          alt={name}
          placeholder="blur"
          className="rounded-md object-cover self-stretch row-span-4 md:row-span-5"
        />
        <span className="text-xs text-center mt-0.5 md:hidden">{location}</span>
        <span
          className="hidden md:flex items-center justify-center gap-2 bg-white-100 rounded-full absolute top-2 right-2 w-12 h-6 font-sans text-sm text-gray-500"
        >
          <Image
            src={camera}
            width={12}
            height={12}
            alt="camera"
          />
          5
        </span>
      </div>
      <div className="grid gap-2 col-span-4">
        <div className="flex items-center gap-2 md:gap-4">
          <h2 className="text-base font-bold">{name}</h2>
          <span className="text-black-100">{time} دقیقه پیش</span>
        </div>
        <ul className="flex items-center font-medium *:px-2 [&>:not(:last-child)]:border-l *:border-black-100">
          <li className="!pr-0">{model}</li>
          <li>{usage} کیلومتر</li>
          <li>{type}</li>
        </ul>
        {isStore && (
          <div className="bg-gray-200 text-gray-500 rounded-md flex items-center gap-2 py-1 px-2 w-fit">
            <Image src={shop} width={14} height={14} alt="shop" />
            <span>نمایشگاه</span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="font-medium hidden md:flex items-center gap-2">
            <Image
              src={marker}
              width={16}
              height={16}
              alt="marker"
            />
            {location}
          </span>
          <span className="font-bold mr-auto">
            {numberWithCommas(price)} تومان
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 absolute top-4 left-0">
        <Image src={verifiedBadge} width={16} height={16} alt="verified" />
        <Image src={hamcarBadge} width={16} height={16} alt="verified" />
      </div>
    </div>
  );
}
