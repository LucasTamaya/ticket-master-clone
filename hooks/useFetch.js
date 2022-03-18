import axios from "axios";
import { useState, useEffect } from "react";
import { start, apiKey } from "../utils/urlsTemplate";

// Hook perso, afin de fetch de la data

const useFetch = (parameter) => {
  const [page, setPage] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //   on crée l'url à partir du paramètre donné
  const url = `${start}${parameter}${apiKey}`;

  useEffect(() => {
    //   envoit de la requête vers l'api
    const req = axios
      .get(url)
      //   si data correctement réceptionné
      .then((data) => {
        setLoading(false);
        setPage(data.data);
        setEvents(data.data._embedded.events);
        console.log(events)
      })
      //   si erreur
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return {
    events: events,
    page: page,
    loading: loading,
    error: error,
  };
};

export default useFetch;
