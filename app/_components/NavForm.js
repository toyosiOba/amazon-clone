"use client";

import { ArrowDownIcon, SearchIcon } from "@/app/_assets/icons";
import { useState } from "react";

function NavForm() {
  const [searchFocused, setSearchFocused] = useState(false);
  return (
    <form
      action=""
      className={`relative flex grow overflow-hidden rounded-md ${
        searchFocused ? "outline outline-4 outline-[#febd69]" : ""
      }`}
    >
      <div className="flex h-10 items-center gap-3 rounded-l-md bg-clr-grey-1 px-2 text-[#555]">
        <div className="text-xs leading-8">All</div>
        <ArrowDownIcon className="text-xs" />
      </div>
      <select
        name=""
        id=""
        className="absolute left-0 top-1 h-9 cursor-pointer text-sm opacity-0"
      >
        <option selected value="">
          All Departments
        </option>
        <option value=""> Arts &amp; Crafts</option>
        <option value="">Automotive</option>
        <option value="">Baby</option>
        <option value="">Beauty & Personal care</option>
        <option value="">Books</option>
        <option value="">Boys&apos; Fashion</option>
        <option value="">Computers</option>
        <option value="">Deals</option>
        <option value="">Digital Music</option>
        <option value="">Electronics</option>
        <option value="">Girls&apos; Fashion</option>
      </select>
      <input
        type="text"
        className="search-input relative h-10 grow pb-[0.65rem] pl-0 pt-2 indent-2 text-sm leading-none text-[#111] focus:outline-none"
        placeholder="Search Amazon"
        onFocus={() => setSearchFocused(true)}
        onBlur={() => setSearchFocused(false)}
      />
      <button
        type="submit"
        className="flex h-10 items-center rounded-r-md bg-[#febd69] px-3 text-2xl leading-none"
      >
        <SearchIcon />
      </button>
    </form>
  );
}
export default NavForm;
