import Image from "next/image";

interface Props {
  title?: string;
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  srcIcon?: string;
  classNameIcon?: string;
  altIcon?: string;
}

export default function Button({
  title,
  className,
  type = "button",
  disabled,
  srcIcon,
  classNameIcon,
  altIcon = "icon",
}: Props) {
  return (
    <button
      className={`rounded-md gird place-content-center ${className}`}
      type={type}
      disabled={disabled}
    >
      {title && title}
      {srcIcon && (
        <Image
          src={srcIcon}
          width={20}
          height={20}
          alt={altIcon}
          className={classNameIcon}
        />
      )}
    </button>
  );
}
