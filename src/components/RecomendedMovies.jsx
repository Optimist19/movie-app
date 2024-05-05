import { useQuery } from "@tanstack/react-query";

import Movies from "./Movies";
import { recommendedMovies } from "@/services/fetchMovies";
import Loading from "./Loading";

function RecomendedMovies() {
  const { data, isLoading } = useQuery({
    queryKey: ["recommended"],
    queryFn: recommendedMovies
  });

  return (
    <section className="w-full flex justify-center">
      <div className="">
      <h2 className="text-xl py-6 sm:text-2xl">Recommended for you</h2>
        {isLoading ? (
          <Loading />
        ) : (
          <Movies recommendedmovie={data} fromRecommended="fromRecommended" />
        )}
      </div>
      {/* recommendedmovie="fromRecommended", this what I will use to determine what will be rendered into the component*/}
    </section>
  );
}

export default RecomendedMovies;
