import { useQuery } from "@tanstack/react-query";

import Movies from "./Movies";

import { trendMovies } from "@/services/fetchMovies";
import Loading from "./Loading";

function TrendingMovies() {
  const { data, isLoading } = useQuery({
    queryKey: ["trending"],
    queryFn: trendMovies
  });

  return (
    <div>{isLoading ? <Loading /> : <Movies trendingmovie={data} />} </div>
  );
}

export default TrendingMovies;
