import * as constants from '../constants/themoviedbApi';
 
export const post = async (url, formData) => {
  let response = await fetch(url, {
        method: "POST",
        body: formData
    });
  
  let data = await response.json();  
  return data;
};

export const get = async (url, formData) => {
  let response = await fetch(url, {
        method: "GET"
    });
  
  let data = await response.json();  
  return data;
};

export const discoverMovies = async () => {
  return await get(constants.DISCOVER_MOVIES_URL);
};

export const getMovieInfo = async (mdbId) => {
  return await get(constants.GET_MOVIE_INFO.replace("__ID__", mdbId));
};