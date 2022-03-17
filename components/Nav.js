import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  return (
    // Nav container
    <nav className="flex justify-between items-center w-full">
      {/* Nav left */}
      <ul className="flex items-center gap-x-10">
        <li>
          <img
            src="/ticketmaster.svg"
            alt="logo ticket master"
            className="filter-white"
          />
        </li>
        <li className="cursor-pointer text-white font-bold hidden md:block">
          Concerts
        </li>
        <li className="cursor-pointer text-white font-bold hidden md:block">
          Sports
        </li>
        <li className="cursor-pointer text-white font-bold hidden md:block">
          Arts &amp; Theater
        </li>
        <li className="cursor-pointer text-white font-bold hidden md:block">
          Family
        </li>
        <li className="cursor-pointer text-white font-bold hidden md:block">
          More
        </li>
      </ul>
      {/* Nav right */}
      <ul className="flex items-center gap-x-10">
        <li className="cursor-pointer text-white font-bold">
          <Link href="/signin">Sign In</Link>
        </li>
        <li className="cursor-pointer text-white font-bold hidden lg:block">
          Sell
        </li>
        <li className="cursor-pointer text-white font-bold hidden lg:block">
          Gift Cards
        </li>
        <li className="cursor-pointer text-white font-bold hidden lg:block">
          Help
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
