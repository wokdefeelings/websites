"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useBackToTop from "../_hooks/useBackToTop";
import {
  backTop,
  button,
  buttonGhost,
  hiddenTablet,
  hover__primaryBlack,
  smallNav__select,
  smallNav,
} from "../_modules/rightnav.module.css";

export default function RightnavMobile({ navbarMenu }) {
  const router = useRouter();
  const observerRef = useRef(null);
  const isNavbarHidden = useBackToTop(observerRef);

  function BackToTopBtn() {
    return (
      <Link
        className={`${button} ${buttonGhost} ${hover__primaryBlack} ${backTop}`}
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m16 12-4-4-4 4" />
          <path d="M12 16V8" />
        </svg>
      </Link>
    );
  }

  function handleSelectChange(event) {
    const selectedRef = navbarMenu[event.target.selectedIndex].ref;
    router.push(selectedRef);
  }

  return (
    <>
      <nav className={`${smallNav} ${hiddenTablet}`} ref={observerRef}>
        <label htmlFor="small-rightnav-dropdown">
          <h4>IN THIS BLOG POST</h4>
        </label>
        <select
          id="small-rightnav-dropdown"
          className={smallNav__select}
          onChange={handleSelectChange}
        >
          {navbarMenu.map((item, index) => (
            <option key={index}>{item.text}</option>
          ))}
        </select>
      </nav>
      {isNavbarHidden && <BackToTopBtn />}
    </>
  );
}
