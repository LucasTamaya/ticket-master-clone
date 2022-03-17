import useAxios from "../hooks/useAxios";
import { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { start, apiKey } from "../utils/urlsTemplate";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("");

  // va contenir le ou les paramètres
  let parameter;

  const handleSubmit = (e) => {
    e.preventDefault();

    // si input nécessaire vide
    if (location === "" && keyword === "") {
      return;
    }

    // si tous les inputs remplis
    if (location !== "" && keyword !== "") {
      alert("all inputs fulfilled");
    }

    // si input location remplie uniquement
    if (!location !== "" && keyword === "") {
      // si la location est un nombre
      if (!isNaN(location)) {
        parameter = `postalCode=${location}`;
      }

      // si la location est une string
      if (isNaN(location)) {
        // si la location à une longueur de 2, on utilise la parameter countryCode
        if (location.length === 2) {
          parameter = `countryCode=${location.toUpperCase()}`; //met tout en majuscule
          //   sinon on utilise le parameter city
        } else {
          parameter = `city=${
            location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()
          }`; //met la première lettre en majuscule et les autres en minuscules
        }
      }
    }
    // si input keyword remplie uniquement
    if (keyword !== "" && location === "") {
      parameter = `keyword=${keyword}`;
    }

    // crée l'url final
    const url = `${start}${parameter}${apiKey}`;

    // récupère la data avec un hook perso
    useAxios(url).then((data) => {
      console.log(data);
    });
  };
  // className="flex items-center border-none w-full max-w-[1000px] bg-white rounded mx-auto h-12"
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
