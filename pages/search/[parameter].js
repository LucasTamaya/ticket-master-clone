import Header from "../../components/Header";
import axios from "axios";
import { apiKey, start } from "../../utils/urlsTemplate";
import Event from "../../components/Event";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import getMaxIndex from "../../utils/getMaxIndex";

const Parameter = ({ events, nbTotalElements, links }) => {
  const [eventsData, setEventsData] = useState([]);

  // permet d'indiquer si il reste encore de la data à fetch afin d'afficher ou non le bouton "Load More" tout en bas
  const [maxData, setMaxData] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setEventsData(events);
    setMaxData(false)
  }, [router]);

  // permet d'avancer dans l'index de l'api
  const [pageIndex, setPageIndex] = useState(0);

  // récupère l'index max de l'api
  const maxIndex = getMaxIndex(links);

  // fonction afin de fetch de la data supplémentaire si il y en a à chaque fois qu'on l'appelle
  const loadMoreData = async () => {
    setPageIndex(pageIndex + 1);

    // si on a pas encore atteint l'index max, on load la data en plus
    if (pageIndex <= maxIndex) {
      // création de l'url avec l'index de page incrémenté de 1 à chaque fois, afin de faire la requête à l'api
      const url = `${start}${router.query.parameter}&page=${
        pageIndex + 1
      }&size=20${apiKey}`;

      // requête à l'api
      const req = await axios
        .get(url)
        // si data reçu
        .then((data) => {
          // fusionne le tableau d'object contenant les events courants avec le tableau d'object contenant les nouveaux events
          setEventsData([...eventsData, ...data.data._embedded.events]);
          // si on atteint la limite d'index de l'api, on enlève le bouton "Load More"
          if (pageIndex === maxIndex - 1) {
            setMaxData(true);
          }
        })
        // si erreur
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Header />

      {nbTotalElements === 0 && (
        <h2 className="text-blue-600 text-xl text-center font-bold my-4">
          We found 0 events
        </h2>
      )}

      {eventsData && nbTotalElements ? (
        <div className="p-4">
          <h2 className="text-blue-600 text-2xl md:text-4xl text-center font-bold my-4">
            We found {nbTotalElements} events
          </h2>
          {eventsData?.map((x) => (
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
      {!maxData && (
        <div className="flex justify-center items-center">
          <button
            className="border border-blue-600 text-blue-600 rounded px-3 py-2 transition ease-out hover:text-white mb-4 hover:bg-blue-600"
            onClick={() => loadMoreData()}
          >
            Load More
          </button>
        </div>
      )}
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
      events = data.data._embedded.events;
      nbTotalElements = data.data.page.totalElements;
      links = data.data._links;
    })
    .catch((err) => {
      console.log("erreur")
      console.log(err);
      events = [];
      nbTotalElements = 0;
      links = 0;
    });

  return {
    props: {
      events,
      nbTotalElements,
      links,
    },
  };
}
