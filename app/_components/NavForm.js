"use client";

import { ArrowDownIcon, SearchIcon } from "@/app/_assets/icons";
import { useState } from "react";

function NavForm() {
  const [searchFocused, setSearchFocused] = useState(false);
  return (
    <form
      action=""
      className={`flex grow rounded-md ${
        searchFocused ? "outline outline-4 outline-[#febd69]" : ""
      }`}
    >
      <div className="flex h-10 items-center gap-3 rounded-l-md bg-clr-grey-1 px-2 text-[#555]">
        <div className="text-xs leading-8">All</div>
        <ArrowDownIcon className="text-xs" />
      </div>
      <input
        type="text"
        className="search-input h-10 grow pb-[0.65rem] pl-0 pt-2 indent-2 text-sm leading-none text-[#111] focus:outline-none"
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
