import Image from "next/image";
import { IconChevronLeft, IconChevronRight } from "./_assets/icons/Icons";
import Link from "next/link";
import BestSellerItem from "./_components/BestSellerItem";
import {
  FeaturedItemSingle,
  FeaturedItemMultiple,
} from "./_components/FeaturedItem";

export default function Home() {
  return (
    <main className="bg-clr-bg-grey-2">
      {/* HERO */}
      <section className="relative mx-auto h-150 max-w-375">
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
      <section className="relative mx-auto -mt-94 max-w-375 px-4">
        {/* FEATURED CONTAINER */}
        <div className="mb-5 grid grid-cols-4 gap-5">
          {/* ROW 1 START */}
          {/* FEATURE 1 */}
          <FeaturedItemMultiple
            heading="Gaming accessories"
            link="See more"
            src1="/images/gaming-acc-headset-jpeg.jpg"
            caption1="Headsets"
            src2="/images/gaming-acc-keyboard-jpeg.jpg"
            caption2="Keyboards"
            src3="/images/gaming-acc-mouse-jpeg.jpg"
            caption3="Computer mice"
            src4="/images/gaming-acc-chair-jpeg.jpg"
            caption4="Chairs"
          />

          {/* FEATURE 2 */}
          <FeaturedItemSingle
            heading="Deals in PC"
            link="See more"
            src="/images/Deals-in-PC-Desktop-jpeg.jpg"
          />

          {/* FEATURE 3 */}
          <FeaturedItemMultiple
            heading="Refresh your space"
            link="See more"
            src1="/images/refresh-your-space-dining.jpg"
            caption1="Dining"
            src2="/images/refresh-your-space-home.jpg"
            caption2="Home"
            src3="/images/refresh-your-space-kitchen.jpg"
            caption3="Kitchen"
            src4="/images/refresh-your-space-health-and-beauty.jpg"
            caption4="Health and Beauty"
          />

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
          <FeaturedItemMultiple
            heading="Handpicked music and audio"
            link="See more"
            src1="/images/music-and-audio-headphones.jpg"
            caption1="Headphones"
            src2="/images/music-and-audio-guitar.jpg"
            caption2="Guitars"
            src3="/images/music-and-audio-keyboard.jpg"
            caption3="Keyboards"
            src4="/images/music-and-audio-microphone.jpg"
            caption4="Microphones"
          />

          {/* FEATURE 6 */}
          <div className="grid grid-rows-[auto_1fr_auto] bg-white p-5 pb-4">
            <h4 className="pb-2 text-xl font-bold">Top Deal </h4>
            <div className="mb-7 grid grid-rows-[1fr_auto] text-xs">
              <div className="relative mx-auto w-24">
                <Image
                  src="/images/top-deal.jpg"
                  alt="woman in dress"
                  sizes="25vw"
                  fill
                  className=""
                />
              </div>
              <div className="flex items-center gap-1 font-bold">
                <p className="rounded-sm bg-clr-deal px-2 py-1 text-white">
                  Up to 40% off
                </p>
                <p className="text-clr-deal">Limited time deal</p>
              </div>
              Women&apos;s dresses, Tops and Jumpsuits from Prettygarden, BTFBM
              and Kirundo
            </div>
            <Link
              href="#"
              className="text-xs text-clr-link hover:text-clr-link-hover"
            >
              See all deals
            </Link>
          </div>

          {/* FEATURE 7 */}
          <FeaturedItemSingle
            heading="Celebrate the women in your life"
            link="Shop gifts"
            src="/images/womens-day-dash-card.jpg"
          />

          {/* FEATURE 8 */}
          <FeaturedItemMultiple
            heading="Fashion trends you like"
            link="Explore more"
            src1="/images/fashion-trends-dresses.jpg"
            caption1="Dresses"
            src2="/images/fashion-trends-knits.jpg"
            caption2="Knits"
            src3="/images/fashion-trends-jackets.jpg"
            caption3="Jackets"
            src4="/images/fashion-trends-jewelry.jpg"
            caption4="Jewelry"
          />

          {/* ROW 2 END */}
        </div>

        {/* BEST SELLERs IN KITCHEN AND DINING */}
        <div className="mb-5 bg-white p-5 pb-4">
          <h4 className="pb-2 text-xl font-bold">
            Best Sellers in Kitchen & dining
          </h4>

          {/* FLEX ITEMS CONTAINER */}
          <div className="relative flex flex-nowrap gap-4 overflow-x-scroll">
            {/* SINGLE ITEM */}
            <BestSellerItem width={186} category={"kitchen-and-dinning-1"} />
            <BestSellerItem width={92} category={"kitchen-and-dinning-2"} />
            <BestSellerItem width={251} category={"kitchen-and-dinning-3"} />
            <BestSellerItem width={288} category={"kitchen-and-dinning-4"} />
            <BestSellerItem width={250} category={"kitchen-and-dinning-5"} />
            <BestSellerItem width={340} category={"kitchen-and-dinning-6"} />
            <BestSellerItem width={59} category={"kitchen-and-dinning-7"} />
            <BestSellerItem width={321} category={"kitchen-and-dinning-8"} />
            <BestSellerItem width={68} category={"kitchen-and-dinning-9"} />
            <BestSellerItem width={200} category={"kitchen-and-dinning-10"} />
            <BestSellerItem width={252} category={"kitchen-and-dinning-11"} />
            <BestSellerItem width={197} category={"kitchen-and-dinning-12"} />
            <BestSellerItem width={145} category={"kitchen-and-dinning-13"} />
            <BestSellerItem width={189} category={"kitchen-and-dinning-14"} />
            <BestSellerItem width={196} category={"kitchen-and-dinning-15"} />
            <BestSellerItem width={196} category={"kitchen-and-dinning-16"} />
            <BestSellerItem width={268} category={"kitchen-and-dinning-17"} />
            <BestSellerItem width={341} category={"kitchen-and-dinning-18"} />
            <BestSellerItem width={200} category={"kitchen-and-dinning-19"} />
            <BestSellerItem width={200} category={"kitchen-and-dinning-20"} />
            <BestSellerItem width={277} category={"kitchen-and-dinning-21"} />
            <BestSellerItem width={187} category={"kitchen-and-dinning-22"} />
            <BestSellerItem width={287} category={"kitchen-and-dinning-23"} />
            <BestSellerItem width={123} category={"kitchen-and-dinning-24"} />
            <BestSellerItem width={189} category={"kitchen-and-dinning-25"} />
            <BestSellerItem width={184} category={"kitchen-and-dinning-26"} />
            <BestSellerItem width={169} category={"kitchen-and-dinning-27"} />
            <button className="absolute left-0 top-16 flex items-center rounded-r bg-white px-3 py-9 shadow-sm shadow-black">
              <IconChevronLeft className="text-lg" />
            </button>
            <button className="absolute right-0 top-16 flex items-center rounded-l bg-white px-3 py-9 shadow-sm shadow-black">
              <IconChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* BEST SELLERS IN BOOKS */}
        <div className=" mb-5 bg-white p-5 pb-4">
          <h4 className="pb-2 text-xl font-bold">Best Sellers in Books</h4>

          {/* FLEX ITEMS CONTAINER */}
          <div className="relative flex flex-nowrap gap-4 overflow-x-scroll">
            {/* SINGLE ITEM */}
            <BestSellerItem width={132} category={"books-1"} />
            <BestSellerItem width={136} category={"books-2"} />
            <BestSellerItem width={133} category={"books-3"} />
            <BestSellerItem width={131} category={"books-4"} />
            <BestSellerItem width={133} category={"books-5"} />
            <BestSellerItem width={133} category={"books-6"} />
            <BestSellerItem width={147} category={"books-7"} />
            <BestSellerItem width={124} category={"books-8"} />
            <BestSellerItem width={132} category={"books-9"} />
            <BestSellerItem width={133} category={"books-10"} />
            <BestSellerItem width={200} category={"books-11"} />
            <BestSellerItem width={135} category={"books-12"} />
            <BestSellerItem width={131} category={"books-13"} />
            <BestSellerItem width={133} category={"books-14"} />
            <BestSellerItem width={141} category={"books-15"} />
            <BestSellerItem width={133} category={"books-16"} />
            <BestSellerItem width={132} category={"books-17"} />
            <BestSellerItem width={229} category={"books-18"} />
            <BestSellerItem width={133} category={"books-19"} />
            <BestSellerItem width={140} category={"books-20"} />
            <BestSellerItem width={132} category={"books-21"} />
            <BestSellerItem width={187} category={"books-22"} />
            <BestSellerItem width={125} category={"books-23"} />
            <BestSellerItem width={194} category={"books-24"} />
            <BestSellerItem width={144} category={"books-25"} />
            <BestSellerItem width={130} category={"books-26"} />
            <BestSellerItem width={133} category={"books-27"} />
            <BestSellerItem width={133} category={"books-28"} />
            <BestSellerItem width={133} category={"books-29"} />
            <BestSellerItem width={133} category={"books-30"} />
            <button className="absolute left-0 top-16 flex items-center rounded-r bg-white px-3 py-9 shadow-sm shadow-black">
              <IconChevronLeft className="text-lg" />
            </button>
            <button className="absolute right-0 top-16 flex items-center rounded-l bg-white px-3 py-9 shadow-sm shadow-black">
              <IconChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* ROW START */}
        <div className="mb-5 grid grid-cols-4 gap-5">
          <FeaturedItemSingle
            heading="Shop activity tracker and smartwatches"
            link="Shop now"
            src="/images/shop-activity-trackers-and-smartwatches.jpg"
          />

          <FeaturedItemMultiple
            heading="Gaming merchandise"
            link="See more"
            src1="/images/gamming-merchandise-apparel.jpg"
            caption1="Apparel"
            src2="/images/gamming-merchandise-cap.jpg"
            caption2="Hats"
            src3="/images/gamming-merchandise-action-figure.jpg"
            caption3="Action figures"
            src4="/images/gamming-merchandise-mugs.jpg"
            caption4="Mugs"
          />

          <FeaturedItemSingle
            heading="Player's paradise starts here"
            link="Shop video game"
            src="/images/players-paradise.jpg"
          />

          <FeaturedItemSingle
            heading="Shop activity tracker and smartwatches"
            link="Shop personal computers"
            src="/images/a-new-way-to-work.jpg"
          />
        </div>
        {/* ROW END */}

        {/* BEST SELLERS IN PERSONAL CARE */}
        <div className="mb-5 bg-white p-5 pb-4">
          <h4 className="pb-2 text-xl font-bold">
            Best Sellers in Beauty & Personal Care
          </h4>

          {/* FLEX ITEMS CONTAINER */}
          <div className="relative flex flex-nowrap gap-4 overflow-x-scroll">
            {/* SINGLE ITEM */}
            <BestSellerItem width={92} category={"beauty-1"} />
            <BestSellerItem width={124} category={"beauty-2"} />
            <BestSellerItem width={156} category={"beauty-3"} />
            <BestSellerItem width={177} category={"beauty-4"} />
            <BestSellerItem width={194} category={"beauty-5"} />
            <BestSellerItem width={170} category={"beauty-6"} />
            <BestSellerItem width={98} category={"beauty-7"} />
            <BestSellerItem width={52} category={"beauty-8"} />
            <BestSellerItem width={103} category={"beauty-9"} />
            <BestSellerItem width={100} category={"beauty-10"} />
            <BestSellerItem width={59} category={"beauty-11"} />
            <BestSellerItem width={80} category={"beauty-12"} />
            <BestSellerItem width={249} category={"beauty-13"} />
            <BestSellerItem width={91} category={"beauty-14"} />
            <BestSellerItem width={90} category={"beauty-15"} />
            <BestSellerItem width={92} category={"beauty-16"} />
            <BestSellerItem width={197} category={"beauty-17"} />
            <BestSellerItem width={148} category={"beauty-18"} />
            <BestSellerItem width={158} category={"beauty-19"} />
            <BestSellerItem width={426} category={"beauty-20"} />
            <BestSellerItem width={222} category={"beauty-21"} />
            <BestSellerItem width={40} category={"beauty-22"} />
            <BestSellerItem width={78} category={"beauty-23"} />
            <BestSellerItem width={113} category={"beauty-24"} />
            <button className="absolute left-0 top-16 flex items-center rounded-r bg-white px-3 py-9 shadow-sm shadow-black">
              <IconChevronLeft className="text-lg" />
            </button>
            <button className="absolute right-0 top-16 flex items-center rounded-l bg-white px-3 py-9 shadow-sm shadow-black">
              <IconChevronRight className="text-lg" />
            </button>
          </div>

          {/* DEALS UNDER $25 */}
        </div>
      </section>
    </main>
  );
}
