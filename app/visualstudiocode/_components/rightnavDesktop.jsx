"use client";

import Link from "next/link";
import Links from "./links";
import useActiveSection from "../_hooks/useActiveSection";
import {
  rightNav__item,
  rightNav__itemActive,
  rightNav,
} from "../_modules/rightnav.module.css";

export default function RightnavDesktop({ navbarMenu }) {
  const activeSection = useActiveSection();

  return (
    <nav className={rightNav}>
      <h4>IN THIS BLOG POST</h4>
      <ul>
        {navbarMenu.map((item, index) => (
          <li key={index}>
            <Link
              className={`${rightNav__item} ${
                activeSection === item.ref.slice(1) && rightNav__itemActive
              }`}
              href={item.ref}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <Links />
    </nav>
  );
}
