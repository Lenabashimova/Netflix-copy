import { useState, useEffect } from "react";
import { requests } from "../Requests";
import axios from "axios";
import "./main.css";
import {Row} from './Row';

export const Main = () => {
  const [moviesList, setMoviesList] = useState([]);
  const movie = moviesList[Math.floor(Math.random() * moviesList.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMoviesList(response.data.results);
    });
  }, []);
  //console.log(moviesList);

  const shortInfo = (str, num) => {
    if(str?.length > num){
      return str.slice (0, num) + '...'
    } return str
  }
  return (
    <div className="movie_wrap">
      <div className="movie_container">
        <div className="div bg-gradient-to-r from-black"></div>
        <img className="movie_img"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="movie_info">
          <h1 className="movie_title">{movie?.title}</h1>
          <button className="movie_btn">Смотреть</button>
          <button className="movie_btn btn_later">Смотреть позже</button>
          <p className="movie_date">{movie?.release_date}</p>
          <p className="movie_overview">{shortInfo(movie?.overview, 150)}</p>
        </div>
      </div>
      <Row rowId='1' title='Скоро' fetchURL={requests.requestUpcoming}/>
      <Row rowId='2' title='Популярное' fetchURL={requests.requestPopular}/>
      <Row rowId='3' title='В тренде' fetchURL={requests.requestTrending}/>
      <Row rowId='4' title='В топе' fetchURL={requests.requestTopRated}/>
      <Row rowId='5' title='Ужасы' fetchURL={requests.requestHorror}/>
    </div>
  );
};
