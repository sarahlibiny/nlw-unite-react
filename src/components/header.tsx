import HeaderIcon from "../assets/header-icon.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <header className=" flex gap-5 items-center py-2">
      <img src={HeaderIcon} alt="tags open close html with orange background" />
      <nav className="flex gap-5 items-center">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </header>
  );
}
