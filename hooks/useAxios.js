import axios from "axios";

// hook qui permet de récupérer de la data selon une url donnée

const useAxios = async (url) => {
  const req = await axios.get(url);

  return req
};

export default useAxios;