import useSuperHeroesData from "../hooks/useSuperHeroesData";

const RQSuperHeroesPage = () => {
  const onSuccess = (data) =>
    console.log("Perform side effect after successful fetch!", data);
  const onError = (data) =>
    console.log("Perform side effect after encountering error!", data);

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) return <h2>Loading...</h2>;
  if (isError) return <h3>{error.message}!</h3>;

  return (
    <div>
      <h2>HQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data.map((heroNames) => (
        <div key={heroNames}>{heroNames}</div>
      ))}
    </div>
  );
};

export default RQSuperHeroesPage;
