import React from "react";
import { useNavigate } from "react-router-dom";
import '../TableContentTr/TableContentTr.css'

const TableContentTr = ({name, item, index}) => {

  const navigate = useNavigate()

  return (
    <div className="allHeadTr">
      <ul onClick={() => navigate(`/home/${name}/details/${item.id}`)}>
        <li key={'id'}>{item.id}</li>
        <li key={'tableName'}>{item.Наименование}</li>
        <li key={'tableDate'}>{item.СрокИсполнения}</li>
        <li key={'startTask'}>
          <input type="checkbox" className={`${item.ПринятаКИсполнению ? 'checboxTrue' : 'checboxFalse'}`} />
        </li>
        <li key={'doneTask'}>
          <input type="checkbox" className={`${item.Выпонена ? 'checboxTrue' : 'checboxFalse' } `} />
        </li>
      </ul>
    </div>
  )
}

export default TableContentTr