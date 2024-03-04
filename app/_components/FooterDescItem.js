import Link from "next/link";

export default function FooterDescItem({ heading, description }) {
  return (
    <li className="px-2">
      <Link href="#" className="hover:underline">
        <span className="text-white">{heading}</span> <br />
        {description}
      </Link>
    </li>
  );
}
