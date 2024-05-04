import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { GrMultimedia } from "react-icons/gr";
import { MdBookmarkBorder } from "react-icons/md";

import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "@/features/bookMarkSlice";



function Movies({ trendingmovie, recommendedmovie, fromRecommended }) {

  const dispatch = useDispatch()

  const a = useSelector(store => store.bookmark)

// console.log(a)


  function addM(result){
  dispatch(addMovie(result))
  }


  // What I did here is to make sure that code in the conditional statement shows in the expected component(RecommendedMovies). You can see that the code in the conditional statement is similar to the real component return. So, I made this selective due to the props I passed here from the parent component(RecommendedMovies). The first return goes to RecomendedMovies while the second goes to TrendingMovies

  //   console.log(movie, "movie")
  if (fromRecommended === "fromRecommended") {
    return (
      <section >
        <div className="grid  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
          {Array.isArray(recommendedmovie) &&
            recommendedmovie.map((result) => {
              return (
                <div
                  key={result.id}
>
                  <Link to={`/movie/${result.id}`}>
                    <Card className="relative w-[80vw] sm:w-[40vw] md:w-[30vw] mx-2 my-2 h-[25vh] lg:w-[20vw]"  style={{
                    backgroundImage: `url(
                      'https://image.tmdb.org/t/p/w500${result.poster_path}'
                    )`
                  }}>
                      <CardHeader>
                        <CardTitle className="w-[15vw] text-xs bg-slate-300 px-2 py-1 rounded-sm">
                          {result.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center absolute bottom-2 gap-2 text-xs bg-slate-300 px-2 py-1 rounded-sm">
                          <p>{result.release_date} </p> -
                          <GrMultimedia /> -<p>PG</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <div className="w-[40px] h-[40px] bg-slate-700 absolute right-3 top-3 rounded-full flex justify-center items-center" onClick={addM(result)}>
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
  return (
    <section className="w-full">
      <h1 className="text-2xl py-3 pl-3">Trending now</h1>
      <div>
        <Marquee>
          {Array.isArray(trendingmovie) &&
            trendingmovie.map((result) => {
              {
                /* {movie?.map((result) => { */
                /* This works too */
              }
              return (
                <div key={result.id} className="">
                  <Link to={"/movie/" + result.id}>
                    <Card className="relative w-[80vw] sm:w-[40vw] md:w-[30vw] mx-2 my-2 h-[25vh]"  style={{
                    backgroundImage: `url(
                      'https://image.tmdb.org/t/p/w500${result.poster_path}'
                    )`
                  }}>
                      <CardHeader>
                        <CardTitle className="w-[15vw] text-xs bg-slate-300 px-2 py-1 rounded-sm">
                          {result.title}
                        </CardTitle>
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
        </Marquee>
      </div>
    </section>
  );
}

export default Movies;
