import React, { useState } from 'react'
import "../RegistrationContent/RegistrationContent.css"
import Axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


const RegistrationContent = () => {
  const API = "http://localhost/LaptopDataBaseV3/hs/api/usersReg";

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    setLogin(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  function examinationReg() {
    if (!login.trim()) {
      alert("Заполните Поля!")
      return
    }

    if (!password.trim()) {
      alert("Заполните Поля!")
      return
    }

    Axios.get(API)
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          if (String(login) === String(response.data[i].Логин)) {
            if (String(password) === String(response.data[i].Пароль)) {
              navigate("/home/" + response.data[i].ИмяПользователя)
              
              return
            } 
          } 
        }
        
        alert("Неправильный Логин Или Пароль!")
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className='headerBlock'>
      <div className='regBlock'>
        <div className='textElement'>
          <h3>Вход</h3>
          <p>Введите Ваш логин и пароль:</p>
        </div>

        <div className='loginBlock'>
          <p>Логин</p>
          <input type="text" onChange={handleLogin} className='loginReg' />
        </div>

        <div className='passwordBlock'>
          <p>Пароль</p>
          <input type="password" onChange={handlePassword} className='passwordReg' />
        </div>

        <button className='regBtn' onClick={examinationReg}>Войти</button>
      </div>
    </div>
  )
}

export default RegistrationContent