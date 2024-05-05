import { CiWarning } from "react-icons/ci";

import technicalDifficulties from "../assets/sportsmanias-technical-difficulties.gif";

function TvDetails() {
  const style = {
    backgroundImage: `url(${technicalDifficulties})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  
  return (
    <section className="">
      <div
        className=" h-[100vh]"
        style={style}>
        <div className="flex flex-col justify-center items-center gap-3 ">
          <h1 className="sm:text-3xl text-center">
            Kindly check back tomorrow, we have an error.
          </h1>
          <CiWarning className="text-[#f43f5e] sm:text-2xl" />
        </div>
      </div>
    </section>
  );
}

export default TvDetails;
