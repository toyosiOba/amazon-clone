"use client";

import { ArrowDownIcon, SearchIcon } from "@/app/_assets/icons/Icons";
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
      <div className="bg-clr-grey-1 gap-3 px-2 h-10 flex items-center rounded-l-md text-[#555]">
        <div className="text-xs leading-8">All</div>
        <ArrowDownIcon className="text-xs" />
      </div>
      <input
        type="text"
        className="search-input text-sm leading-none pl-0 pt-2 h-10 grow text-[#111] indent-2 pb-[0.65rem] focus:outline-none"
        placeholder="Search Amazon"
        onFocus={() => setSearchFocused(true)}
        onBlur={() => setSearchFocused(false)}
      />
      <button
        type="submit"
        className="bg-[#febd69] px-3 flex items-center h-10 text-2xl leading-none rounded-r-md"
      >
        <SearchIcon />
      </button>
    </form>
  );
}
export default NavForm;
