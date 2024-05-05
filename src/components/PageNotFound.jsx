import { Link, useRouteError } from "react-router-dom";
import pageNotFound from "../assets/404_error_blog.png";
import { MdArrowBackIosNew } from "react-icons/md";

function PageNotFound() {
  const error = useRouteError();
  // console.error(error);

  const style = {
    backgroundImage: `url(${pageNotFound})`,
  };

  return (
    <section>
      <div className="h-[100vh] relative" style={style}>
        <Link to="/" className="absolute top-4 right-6">
          <div className="flex items-center gap-2 text-xl sm:text-2xl">
            <MdArrowBackIosNew />
            <p>Back Home</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound;
