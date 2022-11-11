import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import {UserAuth}  from '../context/Auth'; 

export const Navbar = () => {
  const {user, logOut} = UserAuth();
  const nav = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      nav('/');
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo netflixTitle" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflixTitle" />
      </Link>
      {user?.email ? <div>
        <Link to="/account">
          <img className="profile_img" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="profile" />
        </Link>
          <button onClick={handleLogOut} className="signUp_btn">Выйти</button>
      </div> : <div>
        <Link to="/logIn">
          <button className="logIn_btn">Войти</button>
        </Link>
        <Link to="/signUp">
          <button className="signUp_btn">Регистрация</button>
        </Link>
      </div>}
    </div>
  );
};
