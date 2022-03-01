import React from 'react';
import './mission.css';
import { useDispatch } from 'react-redux';
import { toggleStatus } from '../../redux/missions/missions';

function Mission(Props) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(toggleStatus(e.target.value));
  };
  const { mission } = Props;
  return (
    <tr>
      <th scope="row">
        { mission.name }
      </th>
      <td className="fit">
        {mission.description}
      </td>
      <td>
        <span className={mission.status ? 'badge bg-info' : 'badge bg-secondary'}>
          { (mission.status) ? 'Active Member' : 'Not a Member' }
        </span>
      </td>
      <td>
        <button className={mission.status ? 'btn btn-sm btn-danger' : 'btn btn-sm btn-info'} type="button" value={mission.id} onClick={handleClick}>
          {mission.status ? 'Leave mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
}

export default Mission;
