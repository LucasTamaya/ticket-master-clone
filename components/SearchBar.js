import useAxios from "../hooks/useAxios";
import { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { start, apiKey } from "../utils/urlsTemplate";
import { useRouter } from "next/router";
import getLocationType from "../utils/getLocationType";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // si input vide
    if (!location && !keyword) {
      return;
    }

    // si les deux inputs sont remplis
    if (location && keyword) {
      // on récupère le type de location (ex: city/countryCode/postalCode)
      const locationUrl = getLocationType(location);

      const keywordUrl = `keyword=${keyword}`;

      router.push(`/search/${locationUrl}&${keywordUrl}`);
    }

    // si uniquement la location remplie
    if (location && !keyword) {
      const locationUrl = getLocationType(location);
      router.push(`/search/${locationUrl}`);
    }

    // si uniquement le keyword rempli
    if (keyword && !location) {
      const keywordUrl = `keyword=${keyword}`;
      router.push(`/search/${keywordUrl}`);
    }
  };

  return (
    <form
      className="mt-7 flex flex-col gap-y-3 mx-auto w-full max-w-[650px] lg:max-width-[1000px] lg:flex-row lg:items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center h-full border-r border-gray-900 p-3 bg-white w-fit rounded lg:rounded-tr-none lg:rounded-br-none">
        <input
          type="text"
          placeholder="City or Zip Code"
          className="outline-none border-none"
          onChange={(e) => setLocation(e.target.value)}
        />
        <LocationOnOutlinedIcon className="text-blue-600" />
      </div>

      <div className="flex-1 flex items-center gap-x-3 w-full lg:bg-white rounded lg:rounded-tl-none lg:rounded-bl-none">
        <div className="flex-1 flex items-center bg-white p-3 rounded">
          <input
            type="text"
            placeholder="Search for artists, venues and events"
            className="outline-none border-none flex-1"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <SearchIcon className=" text-blue-600" />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-5 p-3"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
