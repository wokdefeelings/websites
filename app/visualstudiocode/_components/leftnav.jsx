import Link from "next/link";
import {
  hiddenDesktop,
  hiddenMobile,
  leftNav,
  navMenu,
  navMenuItem,
  smallNav__select,
  smallNav,
} from "../_modules/leftnav.module.css";

export default function Leftnav() {
  const navbarMenu = [
    { text: "Announcing Copilot Free in VS Code" },
    { text: "GitHub Copilot for Azure" },
    { text: "Introducing Copilot Edits" },
    { text: "Copilot extensions are all you need" },
    { text: "VS Code Extensions and WebAssembly - Part Two" },
    { text: "VS Code Extensions and WebAssembly" },
    { text: "VS Code Day 2024" },
    { text: "Pursuit of wicked smartness in VS Code" },
    { text: "Shrinking VS Code with name mangling" },
    { text: "VS Code and WebAssemblies" },
    { text: "VS Code Day" },
    { text: "VS Code and Copilot" },
    { text: "Remote Development Even Better" },
    { text: "VS Code Sandboxing" },
    { text: "VS Code Community Discussions" },
    { text: "Dev Container Features" },
    { text: "Markdown Language Server" },
    { text: "The VS Code Server" },
    { text: "Dev container CLI" },
    { text: "Moving from Local to Remote Development" },
    { text: "The problem with tutorials" },
    { text: "Custom Notebooks" },
    { text: "vscode.dev" },
    { text: "Webview UI Toolkit" },
    { text: "Bracket Pair Colorization" },
    { text: "Notebooks" },
    { text: "Workspace Trust" },
    { text: "Remote Repositories" },
    { text: "Build 2021" },
    { text: "Extension bisect" },
    { text: "VS Code on Chromebook" },
    { text: "Development Containers in Education" },
    { text: "Dev Containers in WSL 2" },
    { text: "The Go experience" },
    { text: "VS Code at Build" },
    { text: "GitHub Issues Integration" },
    { text: "Docker in WSL 2" },
    { text: "Custom Data Format" },
    { text: "Improving CI Build Times" },
    { text: "Inspecting Containers" },
    { text: "SSH Tips and Tricks" },
    { text: "WSL 2" },
    { text: "Remote SSH" },
    { text: "Strict null checking" },
    { text: "Remote Development" },
    { text: "Language Server Index Format" },
  ];

  return (
    <>
      <nav className={`${smallNav} ${hiddenDesktop}`}>
        <label htmlFor="small-nav-dropdown">
          <h4>BLOG POSTS</h4>
        </label>
        <select id="small-nav-dropdown" className={smallNav__select}>
          {navbarMenu.map((item, index) => (
            <option key={index}>{item.text}</option>
          ))}
        </select>
      </nav>
      <nav className={`${leftNav} ${hiddenMobile}`}>
        <h4>BLOG POSTS</h4>
        <ul className={navMenu}>
          {navbarMenu.map((item, index) => (
            <li key={index}>
              <Link className={navMenuItem} href="#">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
