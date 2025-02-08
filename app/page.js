import { container } from "./page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <p className={container}>
        <Link href="/visualstudiocode">mi version de visualstudio</Link> -{" "}
        <Link href="https://code.visualstudio.com/blogs/2024/12/18/free-github-copilot">
          la original
        </Link>
      </p>
    </main>
  );
}
