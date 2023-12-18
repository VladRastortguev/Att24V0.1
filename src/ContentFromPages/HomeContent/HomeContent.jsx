import axios from 'axios';
import '../HomeContent/HomeContent.css'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { APITasks } from '../../Helpers/Consts';
import TableContentTr from '../TableContentTr/TableContentTr.jsx'
import image from '../../image/AttLogoSvg.svg'

const HomeContent = () => {

    const {name} = useParams()
    const navigate = useNavigate()

    const [task, setTask] = useState([])

    useEffect(()=>{
        async function getData() {
            const req = await axios.get(APITasks)
            setTask(req.data)
            return req
        }
        getData()
    }, [])

    if (task[0] != undefined) {
        return (
            <div className='allHead'>
                <div className='headerTable'>
                    <div>
                        <div className='tHeadBlock'>
                            <ul>
                                <li>№</li>
                                <li>Детали заявки</li>
                                <li>Дата</li>
                                <li>Принята к исполнению</li>
                                <li>Выполнена</li>
                            </ul>
                        </div>
                        <div className='tBodyBlock'>
                            {task.map((item, index) => {
                                if (String(item.Инициатор) === String(name)) {
                                    return <TableContentTr name={name} item={item} key={index} index={index}/>
                            }
                            })}
                        </div>
                    </div>
                    <div className='createTask'>
                        <img src={image} alt="" width="55px" height="55px"/>
                        <button onClick={() => navigate(`/home/${name}/create`)}>Создать Задачу</button>
                    </div>
                </div>
            </div>
        )
    }
        

}

export default HomeContent