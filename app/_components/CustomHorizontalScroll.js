"use client";

import { useEffect, useRef, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "../_assets/icons";

function CustomHorizontalScroll({ children }) {
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const scrollThumbRef = useRef(null);
  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);
  const [thumbWidth, setThumbWidth] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current,
      content = scrollContentRef.current,
      thumb = scrollThumbRef.current,
      leftButton = leftButtonRef.current,
      rightButton = rightButtonRef.current;

    // determine scroll thumb width respect to display content ratio
    const newThumbWidth =
      (container.offsetWidth / content.scrollWidth) * container.offsetWidth;
    setThumbWidth(newThumbWidth);
    const maxLeft = container.offsetWidth - thumbWidth;

    // add event listener
    container.addEventListener("scroll", handleScroll);
    thumb.addEventListener("mousedown", handleThumbDrag);
    rightButton.addEventListener("click", handleRightButton);
    leftButton.addEventListener("click", handleLeftButton);

    // Move  thumb as container's content scrolls
    function handleScroll() {
      const scrollPercentage =
        container.scrollLeft / (content.scrollWidth - container.offsetWidth);
      const thumbLeft = scrollPercentage * (container.offsetWidth - thumbWidth);
      thumb.style.left = thumbLeft + "px"; // state can be used to hold this value
    }

    // handle scrollbar's thumb drag
    function handleThumbDrag(e) {
      e.preventDefault();
      // get mouse position relative to scroll thumb position
      const startX = e.clientX - thumb.offsetLeft;

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);

      function onMouseMove(e) {
        const newLeft = e.clientX - startX;

        if (newLeft >= 0 && newLeft <= maxLeft) {
          // thumb.style.left = newLeft + "px"; //redundant - handleScroll perform this operation
          const scrollPercentage = newLeft / maxLeft;
          // set container scrollLeft property to scroll its content
          container.scrollLeft =
            scrollPercentage * (content.scrollWidth - container.offsetWidth); //state can be used to hold this value
        }
      }

      function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      }
    }

    function handleRightButton() {
      if (content.scrollWidth - container.scrollLeft < container.offsetWidth) {
        container.scrollTo({
          left: content.scrollWidth - container.offsetWidth,
          behavior: "smooth",
        });
        return;
      }

      container.scrollTo({
        left: container.scrollLeft + container.offsetWidth,
        behavior: "smooth",
      });
    }

    function handleLeftButton() {
      if (container.scrollLeft < container.offsetWidth) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        return;
      }

      container.scrollTo({
        left: container.scrollLeft - container.offsetWidth,
        behavior: "smooth",
      });
    }

    return () => {
      container.removeEventListener("scroll", handleScroll);
      thumb.removeEventListener("mousedown", handleThumbDrag);
      rightButton.removeEventListener("click", handleRightButton);
      leftButton.removeEventListener("click", handleLeftButton);
    };
  }, [thumbWidth]);

  return (
    <div className="group relative">
      <div ref={scrollContainerRef} className="w-full overflow-x-hidden">
        <div ref={scrollContentRef} className="flex flex-nowrap gap-4 pb-4">
          {children}
        </div>
      </div>

      {/* SCROLL BUTTONS */}
      <button
        ref={leftButtonRef}
        className="absolute left-0 top-16 flex items-center rounded-r bg-white px-3 py-9 opacity-0 transition-opacity duration-500 active:opacity-100 group-hover:opacity-100"
      >
        <IconChevronLeft className="text-lg" />
      </button>
      <button
        ref={rightButtonRef}
        className="absolute right-0 top-16 flex items-center rounded-l bg-white px-3 py-9 opacity-0 transition-opacity duration-500 active:opacity-100 group-hover:opacity-100"
      >
        <IconChevronRight className="text-lg" />
      </button>

      {/* SCROLL BAR */}
      <div className="absolute bottom-0 left-0 h-2 w-full bg-transparent">
        <div
          ref={scrollThumbRef}
          className="absolute h-full cursor-pointer rounded-md bg-clr-scroll-thumb opacity-0 transition-opacity duration-500 active:opacity-100 group-hover:opacity-100"
          style={{ width: thumbWidth }}
        ></div>
      </div>
    </div>
  );
}
export default CustomHorizontalScroll;
