import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListMission from '../../components/list-mission/ListMissions';
import { fetchMissions } from '../../api/api';
import { addMission } from '../../redux/missions/missions';

function MissionPage() {
  const missions = useSelector(({ missionReducer }) => missionReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMissions().then((dat) => {
      dispatch(addMission(dat));
    });
  }, []);
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
