import { fetchMissions } from '../../api/api';

const ADD_MISSION = 'missions/ADD_MISSION';
const TOGGLE_STATUS = 'mission/JOIN/LEAVE';

const initialState = [];

// Action creator
export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

export const toggleStatus = (payload) => ({
  type: TOGGLE_STATUS,
  payload,
});

export const getMissions = () => async (dispatch) => {
  const data = await fetchMissions();
  data.forEach((item) => {
    dispatch(addMission({
      id: item.mission_id,
      name: item.mission_name,
      description: item.description,
      status: false,
    }));
  });
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];
    case TOGGLE_STATUS:
      return state.map((item) => {
        if (item.id === action.payload) {
          console.log({ ...item, status: !item.status });
          return { ...item, status: !item.status };
        }
        return item;
      });
    default:
      return state;
  }
};

export default missionReducer;
