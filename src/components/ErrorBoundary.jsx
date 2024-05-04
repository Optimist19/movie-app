import { useRouteError } from "react-router-dom"

useRouteError
function ErrorBoundary() {

	const err = useRouteError()
	// console.log(err)
  return (
	<div>Sorry, we have a problem. Kindly check back later</div>
  )
}

export default ErrorBoundary