import { IconChevronLeft } from "../_assets/icons";

export default function ButtonProductLeftScroll() {
  return (
    <button className="absolute left-0 top-16 flex items-center rounded-r bg-white px-3 py-9 shadow-sm shadow-black">
      <IconChevronLeft className="text-lg" />
    </button>
  );
}
