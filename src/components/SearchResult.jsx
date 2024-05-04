import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { GrMultimedia } from "react-icons/gr";
import { MdBookmarkBorder } from "react-icons/md";
import Loading from "./Loading";

function SearchResult() {
  const { pending, results } = useSelector((state) => state.search);

  // console.log(pending, "pending");
  // console.log(results, "results");


  if(pending === "loading"){
	return <Loading />
  }

  return (
    <section className="flex flex-col items-center">
		<h2 className="text-2xl py-3">Your searched results</h2>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 lg:gap-3">
        {Array.isArray(results) &&
          results.map((result) => {
            return (
              <div key={result.id}>
                <Link to={`/movie/${result.id}`}>
                  <Card  className="relative w-[80vw] sm:w-[40vw] md:w-[30vw] mx-2 my-2 h-[25vh] lg:w-[20vw]" style={{
                    backgroundImage: `url(
                      'https://image.tmdb.org/t/p/w500${result.poster_path}'
                    )`
                  }}>
                    <CardHeader>
                      <CardTitle className="w-[15vw] text-xs bg-slate-300 px-2 py-1 rounded-sm">{result.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center absolute bottom-2 gap-2 text-xs bg-slate-300 px-2 py-1 rounded-sm">
                        <p>{result.release_date} </p> -
                        <GrMultimedia /> -<p>PG</p>
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
    </section>
  );
}

export default SearchResult;
