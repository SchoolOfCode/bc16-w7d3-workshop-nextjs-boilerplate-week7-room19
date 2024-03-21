
import Link from "next/link";

import "../Header/Header.css";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1 id="main-title">🔥 Fireplace Palace</h1>
      </Link>
      <Link href="/founders">
        <button className="founderBtn">Founders page</button>
      </Link>
    </header>
  );
}
