import { useParams } from "react-router-dom";
import useSuperHeroData from "../hooks/useSuperHeroData";

const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error, isFetching } =
    useSuperHeroData(heroId);

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) return <h1>Loading...</h1>;
  if (isError) return <h3>{error.message}</h3>;

  return (
    <div>
      {data?.data.name} - {data?.data.alterego}{" "}
    </div>
  );
};

export default RQSuperHeroPage;
