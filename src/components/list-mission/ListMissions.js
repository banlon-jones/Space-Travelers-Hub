import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from '../mission/Mission';
import { getMissions } from '../../redux/missions/missions';

function ListMission() {
  const dispatch = useDispatch();
  const missions = useSelector(({ missionReducer }) => missionReducer);
  useEffect(() => { dispatch(getMissions()); }, []);
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col" colSpan="2">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((item) => <Mission key={item.id} mission={item} />)
          }
        </tbody>
      </table>
    </div>
  );
}

export default ListMission;
