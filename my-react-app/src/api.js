import axios from 'axios';
export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/articles');
    return response.data.data;
  } catch (error) {
    throw new Error('Error fetching data from Strapi');
  }
};