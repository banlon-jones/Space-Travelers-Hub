import React from 'react';
import { useSelector } from 'react-redux';
import Mission from '../mission/Mission';

function ListMission() {
  const missions = useSelector(({ missionReducer }) => missionReducer);
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
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
