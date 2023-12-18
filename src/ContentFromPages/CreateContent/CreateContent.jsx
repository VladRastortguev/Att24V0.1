import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { useParams } from 'react-router-dom'
import { APITasks } from '../../Helpers/Consts'
import { addTask } from '../../Store/Tasks/tasksActions'

const CreateContent = () => {

    const { name } = useParams()
    
    const [userName, setUserName]         = useState("")
    const [companyName, setComanyName]    = useState("")
    const [phoneNumber, setPhoneNumber]   = useState("")
    const [taskName, setTaskName]         = useState("")
    const [service, setService]           = useState("")
    const [priorityTask, setPriorityTask] = useState("")
    const [detailsTask, setDetailsTask]   = useState("")

    const dispatch = useDispatch()

    function postData() {
        let tasksObj = [];

        if (!taskName.trim() || !detailsTask.trim() ) {
            alert("Заполните все поля!")
            return
        }

        if (String(priorityTask) !== "Средний" || String(priorityTask) !== "Высокий") {
            tasksObj = [
                {
                    Наименование: taskName,
                    Описание: detailsTask,
                    Важность: "Низкий",
                    Инициатор: name, 
                }
            ] 
        } else {
            tasksObj = [
                {
                    Наименование: taskName,
                    Описание: detailsTask,
                    Важность: priorityTask,
                    Инициатор: name, 
                }
            ]
        }
        
        dispatch(addTask(tasksObj))

        setUserName("");
        setComanyName("");
        setPhoneNumber("");
        setTaskName("");
        setService("");
        setPriorityTask("");
        setDetailsTask("");

        alert("Задача успешно отправлена!");
    }

    return (
        <div>
            <div className='NameBlock'>
                <p>Имя</p>
                <input 
                    type="text"
                    placeholder='Имя' 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}/>
            </div>

            <div className='companyName'>
                <p>Компания:</p>
                <select 
                  name="company" 
                  id="comanyName" 
                  value={companyName} 
                  onChange={(e) => setComanyName(e.target.value)}>
                    <option value=""></option>
                    <option value="Алтын Тулпар">Алтын Тулпар</option>
                    <option value="Джи Моторс">Джи Моторс</option>
                    <option value="ДТ Техник">ДТ Техник</option>
                    <option value="Киа Моторс">Киа Моторс</option>
                    <option value="ОДА БАКР">ОДА БАКР</option>
                    <option value="Проф-Перспектива">Проф-Перспектива</option>
                    <option value="Тойота Центр">Тойота Центр</option>
                    <option value="Форвард Трейд">Форвард Трейд</option>
                    <option value="Эстокада">Эстокада</option>
                </select>
            </div>

            <div className='phoneNumber'>
                <p>Номер Телефона:</p>
                <input 
                  type="text" 
                  placeholder='Ваш Номер Телефона'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>

            <div className='taskName'>
                <p>Тема Обращения:</p>
                <input 
                  type="text" 
                  placeholder='Тема Вашего Обращения'
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}/>
            </div> 

            <div className='service'>
                <p>Выберите Услугу:</p>
                <select 
                  name="service" 
                  id="serviceTask"
                  value={service}
                  onChange={(e) => setService(e.target.value)}>
                    <option value=""></option>
                    <option value="Настройки">Настройки</option>
                    <option value="Обслуживание">Обслуживание</option>
                    <option value="Типовые Задачи">Типовые Задачи</option>
                    <option value="Доработка/Разработка">Доработка/Разработка</option>
                    <option value="Задачи Финотдела/Бухгалтерии 1С">Задачи Финотдела/Бухгалтерии 1C</option>
                    <option value="Задачи it">Задачи it</option>
                </select>
            </div>

            <div className='priorityTask'>
                <p>Приоритет Заявки:</p>
                <select 
                  name="priority" 
                  id="priorityTask"
                  value={priorityTask}
                  onChange={(e) => setPriorityTask(e.target.value)}>
                    <option value="Низкий">Низкий</option>
                    <option value="Средний">Средний</option>
                    <option value="Высокий">Высокий</option>
                </select>
            </div>

            <div className='detailsTask'>
                <p>Подробное Описание:</p>
                <textarea 
                    name="detailsTask" 
                    id="detTas" 
                    cols="50" 
                    rows="5"
                    value={detailsTask}
                    onChange={(e) => setDetailsTask(e.target.value)}></textarea>
            </div>

            <button onClick={() => postData()}>Отправить</button>
        </div>
    )
}

export default CreateContent