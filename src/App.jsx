import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import LayOutPage from "./pages/LayOutPage";
import ErrorBoundary from "./components/ErrorBoundary";
import BookMakePage from "./pages/BookMakePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import TvDetailsPage from "./pages/TvDetailsPage";
import TelevisionPage from "./pages/TelevisionPage";
import NotFoundPage from "./pages/NotFoundPage";


import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

import { loader as getMovieDetails } from "./components/MovieDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOutPage />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          // path: "contact",
          element: <Home />,
          errorElement: <ErrorBoundary />
        },
        {
          path: "movie/:id",
          element: <MovieDetailsPage />,
          errorElement: <ErrorBoundary />,
          loader: getMovieDetails
        },
        {
          path: "tv",
          element: <TelevisionPage />,
          errorElement: <ErrorBoundary />
        },
        {
          path: "tv/:id",
          element: <TvDetailsPage />,
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
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
          <ModeToggle />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
