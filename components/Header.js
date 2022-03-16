import SearchBar from "./SearchBar";
import HeaderTitle from "./HeaderTitle";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="bg-gray-800 p-4">
      <Nav />
      <HeaderTitle />
      <SearchBar />
    </div>
  );
};

export default Header;
