export const key = "de5887b9e9a563e2ded0015a9d318a63";
export const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ru-RU&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=ru-RU&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ru-RU&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=ru-RU&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=ru-RU&page=1`,
    requestDetails: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${key}&language=ru-RU`
  };