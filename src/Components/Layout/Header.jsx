import LogoFylo from "../../assets/images/logo.svg";

import { Link } from "react-scroll";

const Header = () => {
  const navItems = [
    { title: "Features", href: "features" },
    { title: "Team", href: "team" },
    { title: "Sign In", href: "sigin" },
  ];
  return (
    <header className="flex items-center justify-between py-8 px-11 max-sm:px-5">
      <img className="w-24" src={LogoFylo} alt="Fylo" />
      <nav>
        <ul className="flex items-center gap-8 text-xs">
          {navItems.map((nav, index) => (
            <li
              key={index}
              className="text-gray-500 cursor-pointer hover:underline hover:text-white font-medium"
            >
              <Link to={`${nav.href}`} smooth={true} duration={500}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
