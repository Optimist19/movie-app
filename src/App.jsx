import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import MovieDetails, {
  loader as getMovieDetails
} from "./components/MovieDetails";

import LayOutPage from "./pages/LayOutPage";

import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ErrorBoundary from "./components/ErrorBoundary";
import TVPage from "./pages/TVPage";
import BookMakePage from "./pages/BookMakePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOutPage />,
      errorElement: <PageNotFound />,
      children: [
        {
          index: true,
          // path: "contact",
          element: <Home />,
          errorElement: <ErrorBoundary />
        },
        {
          path: "movie/:id",
          element: <MovieDetails />,
          errorElement: <ErrorBoundary />,
          loader: getMovieDetails
        },
        {
          path: "tv",
          element: <TVPage />,
          errorElement: <ErrorBoundary />
        },
        {
          path: "bookmarks",
          element: <BookMakePage />,
          errorElement: <ErrorBoundary />
        }

      ]
    }
  ]);

  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
