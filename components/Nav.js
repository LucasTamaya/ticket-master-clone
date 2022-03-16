import Link from "next/link";

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
        <li className="cursor-pointer text-white font-bold">Concerts</li>
        <li className="cursor-pointer text-white font-bold">Sports</li>
        <li className="cursor-pointer text-white font-bold">
          Arts &amp; Theater
        </li>
        <li className="cursor-pointer text-white font-bold">Family</li>
        <li className="cursor-pointer text-white font-bold">More</li>
      </ul>
      {/* Nav right */}
      <ul className="flex items-center gap-x-10">
        <li className="cursor-pointer text-white font-bold">
          <Link href="/signin">Sign In</Link>
        </li>
        <li className="cursor-pointer text-white font-bold">Sell</li>
        <li className="cursor-pointer text-white font-bold">Gift Cards</li>
        <li className="cursor-pointer text-white font-bold">Help</li>
      </ul>
    </nav>
  );
};

export default Nav;
