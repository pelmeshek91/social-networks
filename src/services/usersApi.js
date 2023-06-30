import axios from "axios";

axios.defaults.baseURL = "https://649d36db9bac4a8e669d6306.mockapi.io/";

export const getUsersTweets = async () => {
  const { data } = await axios("/users");
  return data;
};
export const updateUsersTweets = async ({ id, ...card }) => {
  const { data } = await axios.put(`/users/${id}`, card);
  return data;
};
