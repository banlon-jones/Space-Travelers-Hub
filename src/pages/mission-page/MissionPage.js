import React from 'react';
import ListMission from '../../components/list-mission/ListMissions';

function MissionPage() {
  return (
    <div>
      <div className="container-fluid">
        <h1> Welcome to missions </h1>
      </div>
      <div className="container-fluid">
        <ListMission />
      </div>
    </div>
  );
}

export default MissionPage;
