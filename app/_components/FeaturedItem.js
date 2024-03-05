import Image from "next/image";
import Link from "next/link";

export function FeaturedItemSingle({ src, heading, link }) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] bg-white p-5 pb-4">
      <h4 className="pb-2 text-xl font-bold">{heading}</h4>
      <div className="relative mb-7">
        <Image
          src={src}
          alt="Desktop"
          sizes="25vw"
          fill
          className="object-cover"
        />
      </div>
      <Link
        href="#"
        className="text-xs text-clr-link hover:text-clr-link-hover"
      >
        {link}
      </Link>
    </div>
  );
}

export function FeaturedItemMultiple({
  src1,
  src2,
  src3,
  src4,
  heading,
  caption1,
  caption2,
  caption3,
  caption4,
}) {
  return (
    <div className="bg-white p-5 pb-4">
      <h4 className="pb-2 text-xl font-bold">{heading}</h4>
      {/* GAMING ACCESSORIES CONTAINER */}
      <div className="mb-7 grid grid-cols-2 gap-x-4 gap-y-7">
        {/* SINGLE ACCESSORY */}
        <div className="">
          {/* IMG CONTAINER */}
          <div className="relative h-28">
            <Image
              src={src1}
              alt=""
              className="object-cover"
              sizes="13vw"
              fill
            />
          </div>
          <p className="text-xs">{caption1}</p>
        </div>
        {/* SINGLE ACCESSORY */}
        <div className="">
          {/* IMG CONTAINER */}
          <div className="relative h-28">
            <Image
              src={src2}
              alt=""
              className="object-cover"
              sizes="13vw"
              fill
            />
          </div>
          <p className="text-xs">{caption2}</p>
        </div>
        {/* SINGLE ACCESSORY */}
        <div className="">
          {/* IMG CONTAINER */}
          <div className="relative h-28">
            <Image
              src={src3}
              alt=""
              className="object-cover"
              sizes="13vw"
              fill
            />
          </div>
          <p className="text-xs">{caption3}</p>
        </div>
        {/* SINGLE ACCESSORY */}
        <div className="">
          {/* IMG CONTAINER */}
          <div className="relative h-28">
            <Image
              src={src4}
              alt=""
              className="object-cover"
              sizes="13vw"
              fill
            />
          </div>
          <p className="text-xs">{caption4}</p>
        </div>
      </div>
      <Link
        href="#"
        className="text-xs text-clr-link hover:text-clr-link-hover hover:underline"
      >
        See more
      </Link>
    </div>
  );
}
