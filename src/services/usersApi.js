import axios from "axios";

axios.defaults.baseURL = "https://649d36db9bac4a8e669d6306.mockapi.io/";

export const getUsersTweets = async (page = 1) => {
  const { data } = await axios("/users", {
    params: {
      page,
      limit: 3,
    },
  });
  return data;
};
export const getUsersTweetsNext = async (page) => {
  const { data } = await axios("/users", {
    params: {
      page,
      limit: 3,
    },
  });
  return data;
};
export const updateUsersTweets = async ({ id, ...card }) => {
  const { data } = await axios.put(`/users/${id}`, card);
  return data;
};
