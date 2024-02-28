import Image from "next/image";
import { IconChevronLeft, IconChevronRight } from "./_assets/icons/Icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-clr-bg-grey-2">
      {/* HERO */}
      <section className="max-w-375 h-150 relative mx-auto">
        <Image
          src="/images/hero-img-1.jpg"
          sizes="100vw"
          alt="International women's day shop gifts"
          fill
        />
        <div className="absolute left-0 top-0 flex h-56 w-20 items-center justify-center rounded-sm border-green-800 text-5xl outline-1 outline-white hover:border-2 hover:outline">
          <IconChevronLeft />
        </div>
        <div className="absolute right-0 top-0 flex h-56 w-20 items-center justify-center rounded-sm border-green-800 text-5xl outline-1 outline-white hover:border-2 hover:outline">
          <IconChevronRight />
        </div>
        <div className="gradient-1 absolute bottom-0 left-0 right-0 top-56"></div>
      </section>

      {/* FEATURE HOST */}
      <section className="max-w-375 -mt-94 relative mx-auto px-4">
        {/* FEATURED CONTAINER */}
        <div className="grid grid-cols-4 gap-5">
          {/* ROW 1 START */}
          {/* FEATURE 1 */}
          <div className="bg-white p-5 pb-4">
            <h4 className="pb-2 text-xl font-bold">Gaming accessories</h4>
            {/* GAMING ACCESSORIES CONTAINER */}
            <div className="mb-7 grid grid-cols-2 gap-x-4 gap-y-7">
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/gaming-acc-headset-jpeg.jpg"
                    alt="headset"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Headsets</p>
              </div>
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/gaming-acc-keyboard-jpeg.jpg"
                    alt="headset"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Keyboards</p>
              </div>
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/gaming-acc-mouse-jpeg.jpg"
                    alt="computer mouse"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Computer mice</p>
              </div>
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/gaming-acc-chair-jpeg.jpg"
                    alt="chair"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Chairs</p>
              </div>
            </div>
            <Link
              href="#"
              className="text-xs text-clr-link hover:text-clr-link-hover hover:underline"
            >
              See more
            </Link>
          </div>

          {/* FEATURE 2 */}
          <div className="grid grid-rows-[auto_1fr_auto] bg-white p-5 pb-4">
            <h4 className="pb-2 text-xl font-bold">Deals in PC</h4>
            <div className="relative mb-7 border">
              <Image
                src="/images/Deals-in-PC-Desktop-jpeg.jpg"
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
              See more
            </Link>
          </div>

          {/* FEATURE 3 */}
          <div className="bg-white p-5 pb-4">
            <h4 className="pb-2 text-xl font-bold">Refresh your space</h4>
            {/* GAMING ACCESSORIES CONTAINER */}
            <div className="mb-7 grid grid-cols-2 gap-x-4 gap-y-7">
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/refresh-your-space-dining.jpg"
                    alt="Glass filled with water"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Dining</p>
              </div>
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/refresh-your-space-home.jpg"
                    alt="hanged clothes"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Home</p>
              </div>
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/refresh-your-space-kitchen.jpg"
                    alt="raw food ingredients on a table"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Kitchen</p>
              </div>
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/refresh-your-space-health-and-beauty.jpg"
                    alt="body spray"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Health and Beauty</p>
              </div>
            </div>
            <Link
              href="#"
              className="text-xs text-clr-link hover:text-clr-link-hover hover:underline"
            >
              See more
            </Link>
          </div>

          {/* FEATURE 4 */}
          <div className="grid grid-rows-[auto_1fr_auto] bg-white p-5 pb-4 ">
            <h4 className="pb-2 text-xl font-bold">Amazon Gadget Store</h4>
            {/* STORE CONTAINER */}
            <div className="mb-7 grid grid-rows-[3fr_2fr] gap-y-7">
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-full">
                  <Image
                    src="/images/amazon-gadget-store-smartphones.jpg"
                    alt="headset"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-sm">Smartphones</p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="grid grid-rows-[1fr_auto]">
                  {/* IMG CONTAINER */}
                  <div className="relative">
                    <Image
                      src="/images/amazon-gadget-store-tablets.jpg"
                      alt="man holding a tablet"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <p className="text-sm">Tablets</p>
                </div>

                <div className="grid grid-rows-[1fr_auto]">
                  {/* IMG CONTAINER */}
                  <div className="relative">
                    <Image
                      src="/images/amazon-gadget-store-laptops.jpg"
                      alt="lady smiling at a laptop"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <p className="text-sm">Laptops</p>
                </div>

                <div className="grid grid-rows-[1fr_auto]">
                  {/* IMG CONTAINER */}
                  <div className="relative">
                    <Image
                      src="/images/amazon-gadget-store-tvs.jpg"
                      alt="TV in a living room"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <p className="text-sm">TVs</p>
                </div>
              </div>
            </div>

            <Link
              href="#"
              className="text-xs text-clr-link hover:text-clr-link-hover"
            >
              See more from Amazon Gadgets
            </Link>
          </div>
          {/* ROW 1 END */}

          {/* ROW 2 START */}
          {/* FEATURE 5 */}
          <div className="bg-white p-5 pb-4">
            <h4 className="pb-2 text-xl font-bold">
              Handpicked music and audio
            </h4>
            {/* GRID CONTAINER */}
            <div className="mb-7 grid grid-cols-2 gap-x-4 gap-y-7">
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/music-and-audio-headphones.jpg"
                    alt="female dress on a green background"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Headphones</p>
              </div>
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/music-and-audio-guitar.jpg"
                    alt="hanged dress"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Guitars</p>
              </div>
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/music-and-audio-keyboard.jpg"
                    alt="computer mouse"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Keyboards</p>
              </div>
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/music-and-audio-microphone.jpg"
                    alt="chair"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Microphones</p>
              </div>
            </div>
            <Link
              href="#"
              className="text-xs text-clr-link hover:text-clr-link-hover hover:underline"
            >
              See more curated tech
            </Link>
          </div>

          {/* FEATURE 6 */}
          <div className="grid grid-rows-[auto_1fr_auto] bg-white p-5 pb-4">
            <h4 className="pb-2 text-xl font-bold">Top Deal </h4>
            <div className="flex justify-center">
              <div className="relative mb-7 w-24">
                <Image
                  src="/images/top-deal.jpg"
                  alt="woman in dress"
                  sizes="25vw"
                  fill
                  className=""
                />
              </div>
            </div>
            <Link
              href="#"
              className="text-xs text-clr-link hover:text-clr-link-hover"
            >
              See all deals
            </Link>
          </div>

          {/* FEATURE 7 */}
          <div className="grid grid-rows-[auto_1fr_auto] bg-white p-5 pb-4">
            <h4 className="pb-2 text-xl font-bold">
              Celebrate the women in your life
            </h4>
            <div className="relative mb-7">
              <Image
                src="/images/womens-day-dash-card.jpg"
                alt="various women item"
                sizes="25vw"
                fill
                className="object-cover"
              />
            </div>
            <Link
              href="#"
              className="text-xs text-clr-link hover:text-clr-link-hover"
            >
              Shop gifts
            </Link>
          </div>

          {/* FEATURE 8 */}
          <div className="bg-white p-5 pb-4">
            <h4 className="pb-2 text-xl font-bold">Fashion trends you like</h4>
            {/* GRID CONTAINER */}
            <div className="mb-7 grid grid-cols-2 gap-x-4 gap-y-7">
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/fashion-trends-dresses.jpg"
                    alt="female dress on a green background"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Dresses</p>
              </div>
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/fashion-trends-knits.jpg"
                    alt="hanged dress"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Knits</p>
              </div>
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/fashion-trends-jackets.jpg"
                    alt="computer mouse"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Jackets</p>
              </div>
              {/* SINGLE ACCESSORY */}
              <div className="">
                {/* IMG CONTAINER */}
                <div className="relative h-28">
                  <Image
                    src="/images/fashion-trends-jewelry.jpg"
                    alt="chair"
                    className="object-cover"
                    fill
                  />
                </div>
                <p className="text-xs">Jewelry</p>
              </div>
            </div>
            <Link
              href="#"
              className="text-xs text-clr-link hover:text-clr-link-hover hover:underline"
            >
              Explore more
            </Link>
          </div>
          {/* ROW 2 END */}
        </div>
      </section>
    </main>
  );
}
