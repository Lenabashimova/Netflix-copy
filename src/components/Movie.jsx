import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { useState } from "react";
import {UserAuth}  from '../context/Auth';
import { db } from '../firebase';
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'

export const Movie = ({item}) => {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const {user} = UserAuth();

    const movieId = doc(db, 'users', `${user?.email}`)
    const saveMovie = async () => {
      if(user?.email){
        setLike(!like);
        setSaved(!saved);
        await updateDoc(movieId, {
          saveMovie: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path
          })
        })
      } alert('Войдите чтобы сохранить')
    }

    return (
    <div className="slider_items">
      <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
      <div className="slide_itemHover">
        <p className="slide_itemTitle">{item?.title}</p>
        <p onClick={saveMovie}>
           {like ? <FaHeart className="likeIcon" /> : <FaRegHeart className="likeIcon" />}
         </p>
      </div>
   </div>
    )
}