import "./row.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Movie } from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const Row = ({ title, fetchURL, rowId }) => {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMoviesList(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="row_title">{title}</h2>
      <div className="row_container">
        <MdChevronLeft onClick={slideLeft} className="row_arrow" size={40} />
        <div id={"slider" + rowId} className="slider">
          {moviesList.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="row_arrow rightArrow"
          size={40}
        />
      </div>
    </>
  );
};
