import Link from "next/link";
import {
  IconArrowDownSFill,
  IconArrowUpSFill,
  IconChevronRight,
  IconGlobe,
} from "../_assets/icons";
import Image from "next/image";
import FooterDescItem from "./FooterDescItem";

export default function Footer() {
  return (
    <footer className="">
      <Link
        href="#"
        className="block bg-[#37475A] p-5 py-4 text-center text-sm text-white"
      >
        Back to top
      </Link>

      {/* FOOTER LINKS */}
      <div className="flex justify-center bg-clr-secondary pb-12 pt-10">
        <div className="flex items-start gap-24 text-sm text-clr-grey-2">
          {/* GROUP 1 */}
          <ul className="space-y-4">
            <h4 className="text-base font-bold text-white">Good to Know Us</h4>
            <li>
              <Link className="hover:underline" href="#">
                Careers
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                About Amazon
              </Link>
            </li>
            <li>
              <Link className=" hover:underline" href="#">
                Investor Relations
              </Link>
            </li>
            <li>
              <Link className=" hover:underline" href="#">
                Amazon Devices
              </Link>
            </li>
            <li>
              <Link className=" hover:underline" href="#">
                Amazon Science
              </Link>
            </li>
          </ul>
          {/* GROUP 1 END */}

          {/* GROUP 2 */}
          <ul className="space-y-4">
            <h4 className="text-base font-bold text-white">
              Make Money with Us
            </h4>
            <li>
              <Link className="hover:underline" href="#">
                Sell products on Amazon
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Sell on Amazon business
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Sell apps on Amazon
              </Link>
            </li>
            <li>
              <Link className=" hover:underline" href="#">
                Become an Affiliate
              </Link>
            </li>
            <li>
              <Link className=" hover:underline" href="#">
                Advertise Your Products
              </Link>
            </li>
            <li>
              <Link className=" hover:underline" href="#">
                Self-Publish with Us
              </Link>
            </li>
            <li>
              <Link className=" hover:underline" href="#">
                Host an Amazon Hub
              </Link>
            </li>
            <li>
              <IconChevronRight className="inline text-xs" />{" "}
              <Link className=" hover:underline" href="#">
                See More Make Money <br /> with Us
              </Link>
            </li>
          </ul>
          {/* GROUP 2 END */}

          {/* GROUP 3 */}
          <ul className="space-y-4">
            <h4 className="text-base font-bold text-white">
              Amazon Payment Products
            </h4>
            <li>
              <Link className="hover:underline" href="#">
                Amazon Business Card
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Shop with Points
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Reload Your Balance
              </Link>
            </li>
            <li>
              <Link className=" hover:underline" href="#">
                Amazon Currency Converter
              </Link>
            </li>
          </ul>
          {/* GROUP 3 END */}

          {/* GROUP 4 */}
          <ul className="space-y-4">
            <h4 className="text-base font-bold text-white">Let Us Help You </h4>
            <li>
              <Link className="hover:underline" href="#">
                Amazon and COVID-19
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Your Account
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Your Orders
              </Link>
            </li>
            <li>
              <Link className=" hover:underline" href="#">
                Shipping Rates & Policies
              </Link>
            </li>
            <li>
              <Link className=" hover:underline" href="#">
                Returns & Replacements
              </Link>
            </li>
            <li>
              <Link className=" hover:underline" href="#">
                Manage Your Content and Devices
              </Link>
            </li>
            <li>
              <Link className=" hover:underline" href="#">
                Amazon Assistant
              </Link>
            </li>
            <li>
              <IconChevronRight className="inline text-xs" />
              <Link className=" hover:underline" href="#">
                Help
              </Link>
            </li>
          </ul>
          {/* GROUP 4 END */}
        </div>
      </div>

      {/* FOOTER LOGO SECTION */}
      <div className="flex justify-center border-t border-[#3A4553]  bg-clr-secondary px-5 pb-10 pt-5 ">
        <div className="flex items-center justify-center gap-20">
          {/* LOGO CONTAINER */}
          <div className="h-[1.4375rem] w-19 bg-amazon-media-logo bg-[-10px_-90px]"></div>
          {/* BUTTONS CONTAINER */}
          <div className="flex gap-2 text-sm leading-none text-clr-grey-1">
            <button className="flex items-center gap-2 rounded border border-clr-grey-3 p-2 leading-none">
              <IconGlobe /> <span className="mr-5">English</span>
              <div className="-space-y-2 text-sm text-clr-grey-3">
                <IconArrowUpSFill className="" />
                <IconArrowDownSFill className="" />
              </div>
            </button>

            <button className="rounded border border-clr-grey-3 p-2 pr-8 leading-none">
              <span className="mr-2 font-bold text-white">$</span>USD - U.S.
              Dollar
            </button>

            <button className="flex items-center gap-2 rounded border border-clr-grey-3 p-2 pr-8 leading-none">
              {/* FLAG CONTAINER */}
              <div className="relative h-3 w-4">
                <Image
                  src="/images/usa-flag.png"
                  fill
                  alt="USA flag"
                  sizes="20px"
                />
              </div>
              United States
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER DESCRIPTION */}
      <div className="flex flex-col items-center justify-center gap-8 bg-clr-bg-main-2 px-2 py-7 text-xs">
        <ul className="grid max-w-250 grid-cols-7 gap-7 text-clr-grey-3">
          {/* ROW 1 START */}
          <FooterDescItem
            heading="Amazon Music"
            description="Streaming millions of songs"
          />
          <FooterDescItem
            heading="Amazon Ads"
            description="Reach customers wherever they spend their time"
          />
          <FooterDescItem
            heading="6pm"
            description="Score deals on fashion brands"
          />
          <FooterDescItem
            heading="AbeBooks"
            description="Books, art & collections"
          />
          <FooterDescItem
            heading="ACX"
            description="Audiobook Publishing Made easy"
          />
          <FooterDescItem
            heading="Sell on Amazon"
            description="Start a Selling Account"
          />
          <FooterDescItem
            heading="Amazon Business"
            description="Everything for Your Business"
          />
          {/* ROW 1 END */}

          {/* ROW 2 START */}
          <FooterDescItem
            heading="AmazonGlobal"
            description="Ship Orders Internationally"
          />
          <FooterDescItem
            heading="Home Services"
            description="Experienced Pros Happiness Guarantee"
          />
          <FooterDescItem
            heading="Amazon Web Services"
            description="Scalable Cloud Computing Services"
          />
          <FooterDescItem
            heading="Audible"
            description="Listen to Books & Original Audio Performances"
          />
          <FooterDescItem
            heading="Box Office Mojo"
            description="Find Movie Box Office Data"
          />
          <FooterDescItem
            heading="Goodreads"
            description="Book reviews & recommendations"
          />
          <FooterDescItem
            heading="IMDb"
            description="Movies, TV & Celebrities"
          />
          {/* ROW 2 END */}

          {/* ROW 3 START */}
          <FooterDescItem
            heading="IMDbPro"
            description="Get Info Entertainment Professionals Need"
          />
          <FooterDescItem
            heading="Kindle Direct Publishing"
            description="Indie Digital & Print Publishing Made Easy"
          />
          <FooterDescItem
            heading="Prime Video Direct"
            description="Video Distribution Made Easy"
          />
          <FooterDescItem
            heading="Shopbop"
            description="Designer Fashion Brands"
          />
          <FooterDescItem heading="Woot!" description="Deals and Shenanigans" />
          <FooterDescItem heading="Zappos" description="Shoes & Clothing" />
          <FooterDescItem
            heading="Ring"
            description="Smart Home Security Systems"
          />
          {/* ROW 3 END */}

          {/* ROW 4 START */}
          <div>{/* EMPTY ITEM */}</div>
          <FooterDescItem
            heading="eero WiFi"
            description="Stream 4K Video in Every Room"
          />
          <FooterDescItem
            heading="Blink"
            description="Smart Security for Every Home"
          />
          <FooterDescItem
            heading="Neighbors App"
            description="Real-Time Crime & Safety Alerts"
          />
          <FooterDescItem
            heading="Amazon Subscription Boxes"
            description="Top subscription boxes – right to your door"
          />
          <FooterDescItem
            heading="PillPack"
            description="Pharmacy Simplified"
          />
          <div>{/* EMPTY ITEM */}</div>
          {/* ROW 4 END */}
        </ul>

        {/* COPYRIGHT SECTION */}
        <div className="space-y-1 text-center text-white">
          <ul className="flex gap-3 ">
            <li>
              <Link className="hover:underline" href="#">
                Condition of use
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Privacy Notice
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Your Ads Privacy Choices
              </Link>
            </li>
            <li className="h-4 w-8 bg-amazon-media-logo bg-[-136px_-380px]"></li>
          </ul>
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
}
