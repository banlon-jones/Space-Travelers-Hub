import React from 'react';
import { useSelector } from 'react-redux';
import ProfileRockets from './ProfileRockets';
import './MyProfile.css';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  const renderReservedRockets = reservedRockets.map((rocket) => (
    <ProfileRockets
      key={rocket.id}
      name={rocket.name}
    />
  ));

  const missions = useSelector(({ missionReducer }) => missionReducer);
  const myMissions = missions.filter((item) => item.status);

  return (
    <div className="my-profile">
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">My Missions</h3>
              </div>
              <ul className="list-group list-group-flush">
                {
                  myMissions.map((item) => <li key={item.id} className="list-group-item">{item.name}</li>)
                }
              </ul>
            </div>
            <div className="col-6">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
