import { movieDetails } from "@/services/fetchMovies";
import { useLoaderData } from "react-router-dom";

import { FaRegStar } from "react-icons/fa6";
import Loading from "./Loading";

import { movieTriller } from "@/services/fetchMovies";
import { useState } from "react";
import YouTube from "react-youtube";
import { FaCirclePlay } from "react-icons/fa6";


function MovieDetails() {
  const data = useLoaderData();

  const [videoData, setVideoData] = useState([]);

  async function videoTriller() {
    const videoResult = await movieTriller(data.id);
    setVideoData(videoResult);
  }

  function renderTrailer() {
    const trailer = videoData[0];

    return (
      <div>
        <YouTube
          videoId={trailer.key}
          containerClassName={"youtube-container"}
          opts={{
            width: "100%"
            // height: "100"
          }}
        />
      </div>
    );
  }

  // function renderTrailer(){
  //   const trailer = videoData.find(vid => vid.name === "Documentary: The Tail of Mr. Jingles")

  //   return(
  //     <YouTube videoId={trailer.key} containerClassName={"youtube-container"} opts={{
  //       // width: "100%",
  //       // height: "50vh"
  //     }}/>
  //   )
  // }

  // console.log(data);
  // console.log(videoData, "videoData");

  const rating = Array.from({ length: data?.vote_average }, (_, i) => i + 1);

  const time = data.runtime / 60;
  const playTime = Math.floor(time);

  return (
    <section className="bg-gradient-to-r from-purple-950 to-slate-950 w-[100%]">
      {data === null ? (
        <Loading />
      ) : (
        <div className="py-4">
          <div className="	">
            <div className="h-[]">
              {videoData.length === 0 ? (
                <div className="flex justify-center">
                  <div className="w-[20vw]">
                    <img
                      className="w-[100%]"
                      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                renderTrailer()
              )}
            </div>

            <div className=" text-slate-400">
              <div className="flex gap-3 justify-evenly py-5">
                <div>
                  <h1 className="text-4xl">GENRE</h1>
                  {data.genres.map((genre) => {
                    return (
                      <p className="text-xl my-1" key={genre.id}>
                        {genre.name}
                      </p>
                    );
                  })}

                  <p className="my-1">{data.original_language}</p>
                  <p className="my-1">{data.release_date}</p>
                  <p className="my-1">{data.revenue}</p>
                  <p className="my-1">
                    {data.spoken_languages[0].english_name}
                  </p>
                  <p className="my-1">{data.spoken_languages[0].name}</p>
                  <div onClick={videoTriller}><FaCirclePlay className="text-4xl cursor-pointer pt-1"/></div>
                </div>

                <div className="">
                  <div className="text-4xl">
                    <p>{data.title}</p>
                  </div>
                  <div className="text-xl my-1">
                    <p>{playTime}hr(s)</p>
                  </div>
                  <div className="text-xl my-1 w-[30vw]">
                    <p>{data.overview}</p>
                  </div>
                  <div className="flex items-center">
                    {rating.map((a, i) => {
                      return (
                        <FaRegStar key={i} className="text-2xl text-blue-600" />
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-[10vw]">
                    <img
                      className="w-[100%]"
                      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export const loader = async (params) => {
  const { id } = params.params;

  const data = await movieDetails(id);
  return data;
};

export default MovieDetails;
