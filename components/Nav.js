import Link from "next/link";

const Nav = () => {
  return (
    // Nav container
    <nav className="flex justify-between items-center w-full">
      {/* Nav left */}
      <ul className="flex items-center gap-x-10">
        <li>
          <Link href="/">
            <img
              src="/ticketmaster.svg"
              alt="logo ticket master"
              className="filter-white cursor-pointer"
            />
          </Link>
        </li>
        <li className="cursor-pointer text-white font-bold hidden md:block">
          <Link href="/search/keyword=concerts">Concerts</Link>
        </li>
        <li className="cursor-pointer text-white font-bold hidden md:block">
          <Link href="/search/keyword=sports">Sports</Link>
        </li>
        <li className="cursor-pointer text-white font-bold hidden md:block">
          <Link href="/search/keyword=arts & theater">Arts &amp; Theater</Link>
        </li>
        <li className="cursor-pointer text-white font-bold hidden md:block">
          <Link href="/search/keyword=family">Family</Link>
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
