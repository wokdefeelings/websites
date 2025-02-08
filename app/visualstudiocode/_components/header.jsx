"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/vscodelogo.png";
import {
  button,
  buttonGhost,
  hiddenDesktop,
  hover__primaryBlack,
  navbar__actions,
  navbar__brand,
  navbar__collapsible,
  navbar__collapsibleOpen,
  navbar__logo,
  navbar__menu,
  navbar__wrapper,
  navbar,
} from "../_modules/header.module.css";

function MobileMenuBtn({ handleClick }) {
  return (
    <button
      className={`${button} ${buttonGhost} ${hover__primaryBlack} ${hiddenDesktop}`}
      onClick={handleClick}
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
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </button>
  );
}

function SearchBtn() {
  return (
    <button className={`${button} ${buttonGhost} ${hover__primaryBlack}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </button>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarMenu = [
    { text: "Docs" },
    { text: "Updates" },
    { text: "Blog" },
    { text: "API" },
    { text: "Extensions" },
    { text: "FAQ" },
    { text: "GitHub Copilot" },
  ];

  return (
    <header className={navbar}>
      <div className={navbar__wrapper}>
        <div className={navbar__brand}>
          <Link href="/visualstudiocode" className={navbar__logo}>
            <Image src={logo} alt="vscode logo" width={24} height={24} />
            <span>Visual Studio Code</span>
          </Link>
          <MobileMenuBtn handleClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
        <nav
          className={`${navbar__collapsible} ${
            isMenuOpen ? navbar__collapsibleOpen : ""
          }`}
        >
          <ul className={navbar__menu}>
            {navbarMenu.map((item, index) => (
              <li key={index}>
                <Link href="/visualstudiocode">{item.text}</Link>
              </li>
            ))}
          </ul>
          <div className={navbar__actions}>
            <SearchBtn />
            <button className={`${button} ${hover__primaryBlack}`}>
              Download
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
