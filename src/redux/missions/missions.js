const ADD_MISSION = 'missions/ADD_MISSION';

const initialState = [];

// Action creator
export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default missionReducer;
