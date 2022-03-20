import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useState, useEffect } from "react";

const EventDetails = ({ date, priceMin, priceMax, address, city }) => {
  const [isPriceDefined, setIsPriceDefined] = useState(false);

  useEffect(() => {
    if (priceMin === "Not Specified" && priceMax === "Not Specified") {
      setIsPriceDefined(false);
    }

    if (priceMin !== "Not Specified" && priceMax !== "Not Specified") {
      setIsPriceDefined(true);
    }
  }, []);

  return (
    <div className="flex justify-between items-start mt-2 p-4 border rounded border-blue-600">
      <div className="flex-1 flex-col">
        <div>
          <h3 className="text-gray-600 text-sm uppercase md:text-base">
            Price range
          </h3>
          {!isPriceDefined ? (
            <span className="text-blue-600 text-sm">Not Specified</span>
          ) : (
            <div>
              <span className="text-blue-600 text-sm">{priceMin}$</span>
              <span className="text-blue-600 text-sm">-</span>
              <span className="text-blue-600 text-sm">{priceMax}$</span>
            </div>
          )}
        </div>
        <div className="flex-1 mt-2 md:hidden">
          <h3 className="text-gray-600 text-sm uppercase">Date</h3>
          <span className="text-sm text-fuchsia-600 font-bold">{date}</span>
        </div>
      </div>

      <div className="flex-1 flex items-start gap-x-1">
        <MapOutlinedIcon className="text-gray-600" />
        <div>
          <h3 className="text-gray-600 text-sm uppercase md:text-base">
            Address info
          </h3>
          <span className="text-sm text-blue-600 after:content-[',']">
            {address}
          </span>{" "}
          {/* sur sm screen ajouter cette section dans les details */}
          <span className="text-sm text-gray-600">{city}</span>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
