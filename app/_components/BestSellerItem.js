import Image from "next/image";

export default function BestSellerItem({ category, width }) {
  return (
    <div className="shrink-0">
      <Image
        src={`/images/best-sellers-in-${category}.jpg`}
        width={width}
        height={200}
        alt="kitchen and dining item"
      />
    </div>
  );
}
