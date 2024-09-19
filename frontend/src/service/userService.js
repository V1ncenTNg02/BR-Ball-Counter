import axios from 'axios';

const Backend_URL='http://localhost:5050';

export const createOrFetch = async (username) => {
  console.log("Called Successfully");
  try{
    const response = await axios.post(`${Backend_URL}/user`,{username});
    return response.data;
  }catch(e){
    throw new Error(e.response?.data?.error || 'Error happens in connecting to backend');
  }
}

export const getAllUser = async () => {
  try{
    const response = await axios.get(`${Backend_URL}/stat`);
    return response.data;
  }catch(e){
    throw new Error(e.response?.data?.error || 'Error getting all user data');
  }
}

export const getUser = async(username) => {
  try{
    const response = await axios.get(`${Backend_URL}/stat/${username}`);
    return response.data;
  }catch(e){
    throw new Error(e.response?.data?.error || `Error getting user: ${username}`);
  }
}

export const updateRow = async (username, ballcolor, number) => {
  try{
    const response = await axios.put(`${Backend_URL}/user/${username}`,{ballcolor,number});
    
    return response.data;
  }catch(e){
    throw new Error(e.response?.data?.error || 'Error updating data');
  };
}