import { CiWarning } from "react-icons/ci";

import technicalDifficulties from "../assets/360_F_471346449_EPhL2CNDHlb1fJH4VxOm9qJ33esvkfqw.jpg";

function TvDetails() {

  
  return (
    <section className="">
      <div
        className="flex flex-col justify-center items-center gap-3 pt-[12vh] h-[100vh]"
        >
        <div className="flex flex-col items-center">
          <h1 className="sm:text-3xl text-center ">
            Kindly check back tomorrow, we have an error.
          </h1>
          <CiWarning className="text-[#f43f5e] sm:text-2xl" />
          <div className="w-[30vw] mt-4">

          <img src={technicalDifficulties} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TvDetails;
