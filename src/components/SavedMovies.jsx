// import { useState, useEffect } from "react";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import {UserAuth}  from '../context/Auth';
// import {db} from '../firebase'
// import {updateDoc, doc, onSnapshot} from '/firebase/firestore'
                                // !!!!!!!!!!!не работает из-за того, что не появляется в firebase массив из юзеров. в чем проблема хз!!!!!!!!!!!


// export const SavedMovies = () => {
//     const [moviesList, setMoviesList] = useState([]); 
//     const {user} = UserAuth();
//     const slideLeft = () => {
//         let slider = document.getElementById("slider");
//         slider.scrollLeft = slider.scrollLeft - 500;
//       };
    
//       const slideRight = () => {
//         let slider = document.getElementById("slider");
//         slider.scrollLeft = slider.scrollLeft + 500;
//       }; 

//       useEffect(() => {onSnapshot(doc(db, 'users', `${user?.email}`, (doc)=>{
//         setMoviesList(doc.data()?.savedMovies)
//       }))}, [user?.email])
//     return (
//         <>
//         <h2 className="row_title">Избранное</h2>
//         <div className="row_container">
//         <MdChevronLeft onClick={slideLeft} className="row_arrow" size={40} />
//         <div id={"slider"} className="slider">
//           {moviesList.map((item, id) => (
//            <div className="slider_items">
//            <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item.title} />
//            <div className="slide_itemHover">
//              <p className="slide_itemTitle">{item?.title}</p>
//            </div>
//         </div>
//           ))}
//         </div>
//         <MdChevronRight
//           onClick={slideRight}
//           className="row_arrow rightArrow"
//           size={40}
//         />
//         </div>
//         </>
//     )
// }