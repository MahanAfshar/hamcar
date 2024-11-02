import Image from "next/image";

interface Props {
  className?: string;
  placeholder?: string;
  srcIcon?: string;
  srcClassName?: string;
  altIcon?: string;
}

export default function Input({
  className,
  placeholder,
  srcIcon,
  srcClassName,
  altIcon = "icon"
}: Props) {
  return (
    <div className="relative">
      {srcIcon && (
        <Image
          src={srcIcon}
          width={16}
          height={16}
          alt={altIcon}
          className={`absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer contrast-0 ${srcClassName}`}
        />
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full outline-none border-none rounded-md pl-4 py-1 ${srcIcon ? "pr-8" : "pr-4"} ${className}`}
      />
    </div>
  );
}
