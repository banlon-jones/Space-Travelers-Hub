import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleStatus } from '../../redux/missions/missions';

function Mission(Props) {
  const dispatch = useDispatch;
  const updateStatus = (id) => {
    dispatch(toggleStatus(id));
  };
  const handleClick = (e) => {
    updateStatus(e.target.value);
  };
  const { mission } = Props;
  return (
    <tr>
      <th scope="row">
        { mission.name }
      </th>
      <td colSpan="2">
        {mission.description}
      </td>
      <td>
        <span className={mission.status ? 'badge bg-info' : 'badge bg-secondary'}>
          { (mission.status) ? 'Active Member' : 'Not a Member' }
        </span>
      </td>
      <td>
        <button className={mission.status ? 'btn btn-danger' : 'btn btn-outline-dark'} type="button" value={mission.id} onClick={handleClick}> Join Mission </button>
      </td>
    </tr>
  );
}

export default Mission;
