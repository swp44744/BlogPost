import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST= 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=swapnil_swp44744';

export function fetchPost() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  //console.log('url', request)
  return {
    type: FETCH_POST,
    payload: request

  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,props);
  return {
    type: CREATE_POST,
    payload: request
  }
}