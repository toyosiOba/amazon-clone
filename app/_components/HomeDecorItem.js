import Image from "next/image";

export default function HomeDecorItem({ number, width }) {
  return (
    <div className="shrink-0">
      <Image
        src={`/images/home-decor-under-20-${number}.jpg`}
        width={width}
        height={200}
        alt="Home decoration item"
      />
    </div>
  );
}
