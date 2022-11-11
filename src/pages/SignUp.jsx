import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import {UserAuth}  from '../context/Auth';
import { useState } from "react";

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user, signUp} = UserAuth();
    const  nav = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await signUp(email, password)
            nav('/')
        } catch (error){
            console.log(error)
        }
    }
  return (
    <>
      <div className="signUp_page">
        <img
          className="signUp_img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
        <div className="signUp_overlay"></div>
        <div className="signUp_wrapper">
          <div className="signUp_formContainer">
            <div className="signUp_formWrapper">
              <h1 className="form_title">Регистрация</h1>
              <form onSubmit={handleSubmit} className="signUp_form">
                <input onChange={(e) => setEmail(e.target.value)} className="signUp_input"
                  type="email"
                  placeholder="Введите email"
                  autoComplete="email"
                />
                <input onChange={(e) => setPassword(e.target.value)} className="signUp_input"
                  type="password"
                  placeholder="Введите пароль"
                  autoComplete="current-password"
                />
                <button className="form_btn" >Зарегистрироваться</button>
                <div className="form_settings">
                    <p className="cursor-pointer">Нужна помощь?</p>
                </div>
                <p className="py-8"><span className="text-gray-600">Уже зарегистрированы на Netflix? </span> <Link className="px-1" to='/logIn'>Войдите</Link> </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
