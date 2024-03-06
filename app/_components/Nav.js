import {
  ArrowDownIcon,
  CartIcon,
  IconHamburgerMenu,
  LocationIcon,
} from "@/app/_assets/icons";
import Image from "next/image";
import NavForm from "./NavForm";
import Link from "next/link";

function Nav() {
  return (
    <header className="">
      {/* NAV MAIN */}
      <div className="flex items-center gap-4 bg-clr-bg-main-1 px-2 py-2">
        {/* amazon logo */}
        <div className="mx-2 my-2 h-7 w-24 bg-amazon-media-logo bg-[-10px_-51px]"></div>
        <div className="my-1 flex items-center gap-px pr-1 text-sm font-bold leading-none text-white">
          <LocationIcon className="mr-1 text-lg" />
          <div>
            <span className="text-nowrap text-xs font-normal text-clr-grey-1">
              Deliver to
            </span>
            <br />
            Nigeria
          </div>
        </div>

        {/* SEARCH FORM */}
        <NavForm />

        <div className="flex items-end gap-1 text-white">
          {/* LANGUAGE */}
          <div className="mx-2 flex gap-x-1">
            <div className="relative h-4 w-5">
              <Image
                src="/images/usa-flag.png"
                alt="USA flag"
                fill
                sizes="20px"
              />
            </div>
            <div className="text-sm font-bold">
              EN
              <ArrowDownIcon className="inline text-clr-grey-1" />
            </div>
          </div>

          {/* SIGN IN */}
          <div className="mx-2 text-sm font-bold leading-none">
            <span className="text-nowrap text-xs leading-tight text-clr-grey-1">
              Hello, sign in
            </span>
            <br />
            Account & Lists <ArrowDownIcon className="inline text-clr-grey-1" />
          </div>

          {/* RETURNS */}
          <div className="mx-2 text-sm font-bold leading-none">
            <span className="text-nowrap text-xs leading-tight text-clr-grey-1">
              Returns
            </span>
            <br />& Orders
          </div>

          {/* CART */}
          <div className="mx-2 flex items-end text-sm font-bold leading-none">
            <CartIcon className="inline text-4xl" />
            Cart
          </div>
        </div>
      </div>

      {/* SHOP CONTAINER */}
      <div className="flex bg-clr-secondary px-2 text-sm leading-none text-white">
        {/* SIDEBAR BUTTON */}
        <button className="flex items-center gap-1 px-2 font-bold">
          <IconHamburgerMenu className="text-xl" /> All
        </button>

        {/* SHOP LINKS */}
        <div className="flex">
          <Link
            href="/"
            className="border border-transparent hover:border-white"
          >
            <span className="my-1 inline-block px-3 py-2">
              Today&apos;s Deals
            </span>
          </Link>
          <Link
            href="/"
            className="border border-transparent hover:border-white"
          >
            <span className="my-1 inline-block px-3 py-2 ">
              Customer Service
            </span>
          </Link>
          <Link
            href="/"
            className="border border-transparent hover:border-white"
          >
            <span className="my-1 inline-block px-3 py-2 ">Registry</span>
          </Link>
          <Link
            href="/"
            className="border border-transparent hover:border-white"
          >
            <span className="my-1 inline-block px-3 py-2 ">Gift Cards</span>
          </Link>
          <Link
            href="/"
            className="border border-transparent hover:border-white"
          >
            <span className="my-1 inline-block px-3 py-2 ">Sell</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Nav;
