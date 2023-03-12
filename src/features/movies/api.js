import axios from "axios";


const FETCH_API = `https://www.omdbapi.com/?apikey=77c74f4f`;
export const fetchResult = async (movieName) =>{
  const response = await axios.get(`${FETCH_API}&s=${movieName}`);
  return response;
}

export const fetchMovie = async (movieId) =>{
  const response = await axios.get(`${FETCH_API}&i=${movieId}`);
  return response;
}


