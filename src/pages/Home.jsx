import { useSelector } from "react-redux";
import RecomendedMovies from "../components/RecomendedMovies";
import TrendingMovies from "../components/TrendingMovies";

import Search from "@/components/Search";
import SearchResult from "@/components/SearchResult";

function Home() {
  const { searchInput } = useSelector((state) => state.search);

  // console.log(searchInput);

  return (
    <section className="w-[100%]">
      <div className="">
        <div className="w-[99%]">
          <Search />
          <TrendingMovies />
          {searchInput === "" ? <RecomendedMovies /> : <SearchResult />}
        </div>
      </div>
    </section>
  );
}
export default Home;
