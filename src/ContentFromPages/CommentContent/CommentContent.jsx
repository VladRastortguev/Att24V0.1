import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { APIComment } from '../../Helpers/Consts'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addComment } from '../../Store/Tasks/tasksActions';

const CommentContent = ( {task} ) => {
  const [comment, setCommnet] = useState([]);
  const [commentText, setCommnetText] = useState("");
  const { id } = useParams();
  const { name } = useParams();
  const filteredArray = [];
  const dispatch = useDispatch()

  useEffect(() => {
    async function getData() {
        const req = await axios.get(APIComment);
        setCommnet(req.data)
        return req
    }
    getData()
  }, [])

  function postComment() {

    let commentObj = [
        {
            Комментарий: commentText,
            Имя: name,
            id: id
        }
    ]

    dispatch(addComment(commentObj))

    setCommnetText("");

  }

  if (comment[0] !== undefined) {
    for (let i in comment) {
        if (Number(comment[i].id) === Number(id)) {
            filteredArray.push(comment[i]);
        }
      }
  }
    return (
        <div>
            <div className='putCommentBlock'>
                <textarea name="commentBlock" id="commentBlockid" cols="50" rows="4" onChange={(e) => setCommnetText(e.target.value)}></textarea>
                <button onClick={() => postComment()}>Отправить</button>
            </div>
            
            <div className='showCommnetBlock'>
                {filteredArray.map((item, index) => {
                    return (
                        <div key={index}>
                            <p key={index}>{item.Имя}</p>
                            <p key={Number(index + 1)}>{item.Наименование}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      )
  }


export default CommentContent