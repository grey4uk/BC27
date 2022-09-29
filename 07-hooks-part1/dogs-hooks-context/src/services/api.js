import axios from 'axios';

export const getImages = async (count) => {
  //   const result = await axios.get(
  //     `https://dog.ceo/api/breeds/image/random/${count}`
  //   );
  //   const result = await axios(
  //     `https://dog.ceo/api/breeds/image/random/${count}`
  //   );
  const result = await axios({
    url: `https://dog.ceo/api/breeds/image/random/${count}`,
    method: 'get',
  });

  return result;
};
