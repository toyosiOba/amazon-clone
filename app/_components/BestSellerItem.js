import Image from "next/image";

export default function BestSellerItem({ category, width, top }) {
  return (
    <div className="shrink-0">
      <Image
        src={`/images/${top ? "top" : "best"}-sellers-in-${category}.jpg`}
        width={width}
        height={200}
        alt="kitchen and dining item"
      />
    </div>
  );
}
