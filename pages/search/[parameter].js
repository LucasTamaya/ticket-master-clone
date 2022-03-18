import { useRouter } from "next/router";
import DataLoading from "../../components/DataLoading";
import useFetch from "../../hooks/useFetch";
import Header from "../../components/Header";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import { apiKey, start } from "../../utils/urlsTemplate";
import { data } from "autoprefixer";

const Parameter = ({ events, page }) => {
  console.log(events);

  return (
    <div>
      <Header />

      {events && page && (
        <div className="p-4">
          <h2 className="text-blue-600 text-xl text-center font-bold my-4">
            {/* We found {page.page.totalElements} events */}
          </h2>
          {events.map((x) => (
            <div key={x.id} className="mb-10 md:flex md:items-center">
              <div className="flex items-center gap-x-2 mb-2 md:flex-1 md:gap-x-4">
                <KeyboardArrowDownIcon />
                <div
                  className="min-w-[110px] h-[80px] bg-cover bg-center"
                  style={{ backgroundImage: `url("${x.images[0].url}")` }}
                ></div>
                <span className="text-sm text-fuchsia-600 font-bold">
                  {x.dates.start.localDate}
                </span>
                <div className="ml-auto md:ml-0 md:ml-10">
                  <h3 className="font-bold">{x.name}</h3>
                  <div className="flex gap-x-1">
                    <span className="text-sm text-gray-600 hidden md:block md:after:content-[',']">
                      {x._embedded.venues[0].address.line1} 
                    </span>{" "}
                    {/* sur sm screen ajouter cette section dans les details */}
                    <span className="text-sm text-gray-600">
                      {x._embedded.venues[0].city.name}
                    </span>
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 px-2 py-1 text-white rounded ml-auto w-full hover:bg-blue-700 md:w-fit md:h-fit">
                See Tickets
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Parameter;

export async function getServerSideProps(context) {
  const parameter = `keyword=${context.query.parameter}`;

  const req = await axios.get(`${start}${parameter}${apiKey}`);

  // console.log(req)

  // récupère les events
  const events = req.data._embedded.events;

  // récupère l'ensemble de la data adin d'accéder aux nombres total d'events
  const page = req.data;

  // console.log("Events", events)
  // console.log("Page", page)

  return {
    props: {
      events,
      page,
    },
  };
}

/*


*/
