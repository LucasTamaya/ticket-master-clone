import Header from "../../components/Header";
import axios from "axios";
import { apiKey, start } from "../../utils/urlsTemplate";
import Event from "../../components/Event";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";

const Parameter = ({ events, nbTotalElements, links }) => {
  console.log("Links: ", `${start}${links.next.href}${apiKey}`);

  const [pageIndex, setPageIndex] = useState(0);

  ("/discovery/v2/events.json?size=20&page=1");
  const loadMoreData = async () => {
    const url = `${start}${links.next.href}${apiKey}`;

    const req = await axios
      .get(url)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              key={x.id}
              id={x.id}
              image={x.images[0].url}
              date={x.dates.start.localDate}
              name={x.name}
              address={
                x._embedded?.venues[0].address.line1 || x.place.address.line1
              }
              city={x._embedded?.venues[0].city.name || x.place.city.name}
              priceMin={x.priceRanges ? x.priceRanges[0].min : "Not Specified"}
              priceMax={x.priceRanges ? x.priceRanges[0].max : "Not Specified"}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
      <div className="flex justify-center items-center">
        <button
          className="border border-blue-600 text-blue-600 rounded px-3 py-2 transition ease-out hover:text-white hover:bg-blue-600"
          onClick={() => loadMoreData()}
        >
          Load More
        </button>
      </div>
      <Footer />
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
  let links;

  const req = await axios
    .get(url)
    .then((data) => {
      console.log("pas d'erreur");
      console.log(data);
      events = data.data._embedded.events;
      nbTotalElements = data.data.page.totalElements;
      links = data.data._links;
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
      links,
    },
  };
}
