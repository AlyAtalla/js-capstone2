import { INVOLVEMENT_API, APP_ID } from '../constants.js';

export const getLikes = async () => {
  try {
    const response = await fetch(`${INVOLVEMENT_API}/apps/${APP_ID}/likes`);
    return response.json();
  } catch (error) {
    // Empty catch block intentionally left blank
  }
};

export default getLikes;