import Image from "next/image";

export function DealItem({
  src,
  width,
  discount,
  newPrice,
  listPrice,
  description,
}) {
  return (
    <div className="shrink-0">
      <div className="flex justify-center bg-clr-bg-fade">
        <Image
          src={src}
          alt=""
          width={width}
          height={200}
          className="mix-blend-multiply"
        />
      </div>
      <div className="mt-1 flex items-center gap-1 text-xs font-bold">
        <p className="rounded-sm bg-clr-deal px-2 py-1 text-white">
          {discount}% off
        </p>
        <p className="text-clr-deal">Limited time deal</p>
      </div>
      <p className="text-xs">
        <span className="text-base font-bold">${newPrice}</span> List Price:
        <span className="line-through"> ${listPrice}</span>
      </p>
      <p className="text-xs">{description}</p>
    </div>
  );
}
