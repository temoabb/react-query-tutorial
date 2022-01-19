import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHero = ({ queryKey }) => {
  // queryKey is an array below: ["super-hero", heroId]

  const heroId = queryKey[1]; // heroId
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const useSuperHeroData = (heroId) => {
  return useQuery(["super-hero", heroId], fetchSuperHero);
};

export default useSuperHeroData;
