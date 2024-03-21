import MenuBarDesktop from "@/app/Navigations/MenuBarDesktop";
import "../Header/Header.css";

export default function Header() {
  return (
    <header>
      <a id="main-title">🔥 Fireplace Palace</a>
      <MenuBarDesktop/>
    </header>
  );
}