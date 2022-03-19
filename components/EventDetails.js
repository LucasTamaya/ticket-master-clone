import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const EventDetails = ({ priceMin, priceMax }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-600">
      <div className="flex gap-x-1 my-2">
        <h3 className="text-gray-600 text-sm">Price range:</h3>
        <span className="text-fuchsia-600 text-sm">{priceMin}$</span>
        <span className="text-fuchsia-600 text-sm">-</span>
        <span className="text-fuchsia-600 text-sm">{priceMax}$</span>
      </div>
      <InfoOutlinedIcon className="text-fuchsia-600"/>
    </div>
  );
};

export default EventDetails;
