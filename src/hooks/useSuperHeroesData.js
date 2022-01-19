import { useQuery } from "react-query";
import axios from "axios";

// This is written in one line but never forget return. Returns a promise:
const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes");

const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // staleTime: 30000,             // default 0
    // refetchOnMount: false,        // default true
    // refetchOnWindowFocus: false,  // default true
    // refetchInterval: false,       // default false
    // enabled: false,               // default true

    onSuccess,
    onError,

    // data transformation
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};

export default useSuperHeroesData;
