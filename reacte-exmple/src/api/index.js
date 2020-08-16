import axios from 'axios';

const http = axios.create({
  baseURL: 'https://randomuser.me/api/',
  responseType: 'json',
});

export const getData = async () => {
  try {
    const {
      data: { results },
    } = await http.get();

    return results;
  } catch (err) {
    console.log(err);
  }
};
