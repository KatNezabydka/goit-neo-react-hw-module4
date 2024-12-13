import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = 'AWCG20UETxPAF5nGc-7b9M4gEN2G9NRrHV5ghkVvIeI';


export const getImages = async (query, page) => {

  const { data } = await axios.get(API_URL, {
    params: { query, page, per_page: 12 },
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  });

  return data;
};