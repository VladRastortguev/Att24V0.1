import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APITasks } from '../../Helpers/Consts'
import axios from 'axios'
import CommentContent from '../CommentContent/CommentContent'

const DetailsContent = () => {
    const { id } = useParams()
    const [task, setTask] = useState([])

    useEffect(()=>{
        async function getData() {
            const req = await axios.get(APITasks)
            setTask(req.data)
            return req
        }
        getData()
    }, [])

    console.log(task);

    if (task[0] != undefined) {
        return (
            <>
                {task.map((item, index) => {
                    if (Number(item.id) === Number(id)) {
                        return (
                            <div>
                                <div className='numberTask'>
                                    <p>№</p>
                                    <p>{item.id}</p>    
                                </div>            
                                <div className='nameAndDescription'>
                                    <div className='name'>
                                        <p>Наименование:</p>
                                        <p>{item.Наименование}</p>
                                    </div>
                                    <div className='description'>
                                        <p>Описание:</p>
                                        <p>{item.Описание}</p>
                                    </div>
                                </div>
                                <div className='executorAndInitiator'>
                                    <div className='executor'>
                                        <p>Исполнитель:</p>
                                        <p>{item.Исполнитель}</p>
                                    </div>
                                    <div className='initiator'>
                                        <p>Инициатор:</p>
                                        <p>{item.Инициатор}</p>
                                    </div>
                                </div>
                                <div className='ImportanceAndStartAndComplete'>
                                    <div className='importance'>
                                        <p>Важность:</p>
                                        <p>{item.Важность}</p>
                                    </div>
                                    <div className='Start'>
                                        <p>Приступили к исполнению:</p>
                                        <input type="checkbox" className={item.ПринятаКИсполнению ? 'checboxTrue' : 'checboxFalse'} />
                                    </div>
                                    <div className='complete'>
                                        <p>Выполнена:</p>
                                        <input type="checkbox" className={item.Выполнена ? 'checboxTrue' : 'checboxFalse'} />
                                    </div>
                                </div>
                                <div className='date'>
                                    <p>Конечный срок выполнения:</p>
                                    <p>{String(item.СрокИсполнения).split("T")[0]}</p>
                                </div>
                            </div>
                        )
                    }
                })}

                <CommentContent task={task}/>
            </>
        )
    }
}

export default DetailsContent