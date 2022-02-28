const rocketsUrl = 'https://...'; //TODO: Add your url code here
const missionsUrl = 'https://...'; //TODO: Add your url code here

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchRockets = () => getData(rocketsUrl);

export const fetchMissions = () => getData(missionsUrl);