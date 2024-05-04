const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDAzZmIyYmM5ZDE3NjhiMDZmMDAzYzUyNWM0NmMyYyIsInN1YiI6IjY0YjgyNDdjNTViMGMwMDBmZmIwZGZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n0Cuf1zswhdiK3E4m5ZEdbDUimZcX8AWZWBnJC3e6WI"
  }
};

export async function recommendedMovies() {
    // Top rated
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      const data = await response.json();
      return data?.results;
    } catch (err) {
      // console.error("Error fetching movies:", err);
      return err;
    }
}

export async function trendMovies() {
  // Popular
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const data = await response.json();
    return data?.results;
  } catch (err) {
    // console.error("Error fetching movies:", err);
    return err;
  }
}

export async function movieDetails(id){
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const data = await response.json();
    // console.log(data)
    return data
  } catch (err) {
    // console.error("Error fetching movies:", err);
    return err;
  }
}

export async function movieTriller(id){
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e003fb2bc9d1768b06f003c525c46c2c&append_to_response=videos`
      // options
    );
    const data = await response.json();
    console.log(data)
    // console.log(data.videos.results)
    return data.videos.results
  } catch (err) {
    console.error("Error fetching movies:", err);
    return err;
  }
}




