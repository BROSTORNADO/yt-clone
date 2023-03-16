import axios from 'axios'

import API_KEY from './config'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching data from API')
  }
}

// export async function fetchFromAPI(url) {
//   const response = await fetch(`${BASE_URL}/${url}`, options)
//   const data = await response.json()
//   return data
// }
