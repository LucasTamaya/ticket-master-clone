import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import EventDetails from "./EventDetails";

const Event = ({
  id,
  image,
  date,
  name,
  address,
  city,
  priceMin,
  priceMax,
}) => {
  // permet de fermer et d'ouvrir les détails d'un event
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="mb-10">
      <div key={id} className="md:flex md:items-center">
        <div className="flex items-center gap-x-2 mb-2 md:flex-1 md:gap-x-4">
          <KeyboardArrowDownIcon
            className={`cursor-pointer transition ease-out ${
              showDetails && "rotate-180"
            }`}
            onClick={() => setShowDetails(!showDetails)}
          />
          <div
            className="min-w-[110px] h-[80px] bg-cover bg-center"
            style={{ backgroundImage: `url("${image}")` }}
          ></div>
          <span className="text-sm text-fuchsia-600 font-bold">{date}</span>
          <div className="ml-auto md:ml-0 md:ml-10">
            <h3 className="font-bold text-sm truncate max-w-[200px] overflow-hidden md:max-w-[270px] md:text-base lg:max-w-full">
              {name}
            </h3>

            {/* <div className="flex gap-x-1">
              <span className="text-sm text-gray-600 hidden md:block md:after:content-[',']">
                {address}
              </span>{" "}
              <span className="text-sm text-gray-600">{city}</span>
            </div> */}
          </div>
        </div>
        <button className="bg-blue-600 px-2 py-1 text-white rounded ml-auto w-full hover:bg-blue-700 md:w-fit md:h-fit">
          See Tickets
        </button>
      </div>
      {showDetails && (
        <EventDetails
          priceMin={priceMin}
          priceMax={priceMax}
          address={address}
          city={city}
        />
      )}
    </div>
  );
};

export default Event;
