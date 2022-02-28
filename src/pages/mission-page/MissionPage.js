import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ListMission from '../../components/list-mission/ListMissions';
import { fetchMissions } from '../../api/api';

function MissionPage() {
  const missions = useSelector(({ missionReducer }) => missionReducer);
  useEffect(() => {
    fetchMissions().then((dat) => console.log(dat));
  });
  return (
    <div>
      <div className="container">
        <h1> Welcome to missions </h1>
      </div>
      <div className="container">
        <ListMission missionProp={missions} />
      </div>
    </div>
  );
}

export default MissionPage;
