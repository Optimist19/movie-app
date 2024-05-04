import { useRouteError } from "react-router-dom"


function PageNotFound() {
	const error = useRouteError();
	// console.error(error);
  return (
	<div>PageNotFound</div>
  )
}

export default PageNotFound