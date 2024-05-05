import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card";
import { MdBookmarkBorder } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { tv } from "@/services/fetchMovies";
import Loading from "./Loading";

function Television() {
  const { data, isLoading } = useQuery({
    queryKey: "tv",
    queryFn: tv
  });

  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex justify-center py-3">
          <div className="grid  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
            {Array.isArray(data) &&
              data.map((result) => {
                return (
                  <div key={result.id}>
                    <Link to={`/tv/${result.id}`}>
                      <Card
                        className="relative w-[80vw] sm:w-[40vw] md:w-[30vw] mx-2 my-2 h-[25vh] lg:w-[20vw]"
                        style={{
                          backgroundImage: `url(
                  'https://image.tmdb.org/t/p/w500${result.backdrop_path}'
                )`
                        }}>
                        <CardHeader>
                          <CardTitle className=" text-xs bg-slate-300 px-2 py-1 rounded-sm">
                            {result.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center absolute bottom-2 gap-2 text-xs bg-slate-300 px-2 py-1 rounded-sm">
                            <p>{result.first_air_date}</p>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <div className="w-[40px] h-[40px] bg-slate-700 absolute right-3 top-3 rounded-full flex justify-center items-center">
                            <MdBookmarkBorder className="text-white" />
                          </div>
                        </CardFooter>
                      </Card>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </section>
  );
}

export default Television;
