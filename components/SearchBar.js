import useAxios from "../hooks/useAxios";
import { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { start, apiKey } from "../utils/urlsTemplate";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [keyword, setKeyword] = useState("");

  //   const validDate = Date.parse("2022-05-01");
  //   console.log(validDate);

  // va contenir le ou les paramètres
  let parameter;

  const handleSubmit = (e) => {
    e.preventDefault();

    // si input nécessaire vide
    if (location === "" && keyword === "") {
      return;
    }

    // si tous les inputs remplis
    if (location !== "" && date !== "" && keyword !== "") {
      alert("all inputs fulfilled");
    }

    // si input location remplie uniquement
    if (!location !== "" && date === "" && keyword === "") {
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
    if (keyword !== "" && location === "" && date === "") {
      parameter = `keyword=${keyword}`;
    }

    // crée l'url final
    const url = `${start}${parameter}${apiKey}`;

    // récupère la data avec un hook perso
    useAxios(url).then((data) => {
      console.log(data);
    });
  };

  return (
    <form
      className="flex items-center border-none w-full max-w-[1000px] bg-white rounded mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center h-12 border-r border-gray-900 p-3">
        <input
          type="text"
          placeholder="City or Zip Code"
          className="outline-none border-none"
          onChange={(e) => setLocation(e.target.value)}
        />
        <LocationOnOutlinedIcon className="text-blue-600" />
      </div>
      <div className="flex items-center h-12 border-r border-gray-900 p-3">
        <input
          type="text"
          placeholder="All Dates"
          className="outline-none border-none"
          onChange={(e) => setDate(e.target.value)}
        />
        <KeyboardArrowDownIcon />
      </div>
      <div className="flex-1 flex items-center pr-1">
        <div className="flex-1 flex items-center">
          <SearchIcon className="mx-2" />
          <input
            type="text"
            placeholder="Search for artists, venues and events"
            className="outline-none border-none flex-1"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-5 p-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
