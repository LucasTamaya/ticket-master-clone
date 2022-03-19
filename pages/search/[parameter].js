import Header from "../../components/Header";
import axios from "axios";
import { apiKey, start } from "../../utils/urlsTemplate";
import Event from "../../components/Event";

const Parameter = ({ events, nbTotalElements }) => {
  console.log(events);

  return (
    <div>
      <Header />

      {nbTotalElements === 0 && (
        <h2 className="text-blue-600 text-xl text-center font-bold my-4">
          We found 0 events
        </h2>
      )}

      {events && nbTotalElements ? (
        <div className="p-4">
          <h2 className="text-blue-600 text-2xl md:text-4xl text-center font-bold my-4">
            We found {nbTotalElements} events
          </h2>
          {events.map((x) => (
            <Event
              id={x.id}
              image={x.images[0].url}
              date={x.dates.start.localDate}
              name={x.name}
              address={
                x._embedded?.venues[0].address.line1 || x.place.address.line1
              }
              city={x._embedded?.venues[0].city.name || x.place.city.name}
              priceMin={x.priceRanges[0].min}
              priceMax={x.priceRanges[0].max}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Parameter;

export async function getServerSideProps(context) {
  const parameter = context.query.parameter;

  const url = `${start}${parameter}${apiKey}`;
  console.log(url);

  let events;
  let nbTotalElements;

  const req = await axios
    .get(url)
    .then((data) => {
      console.log("pas d'erreur");
      console.log(data);
      events = data.data._embedded.events;
      nbTotalElements = data.data.page.totalElements;
    })
    .catch((err) => {
      "erreur";
      console.log(err);
      events = [];
      nbTotalElements = 0;
    });

  return {
    props: {
      events,
      nbTotalElements,
    },
  };
}
