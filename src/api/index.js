const KEY =
    '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const axios = require('axios');

const URL = 'https://api.unsplash.com/photos';

export const fetchImages = async page => {
    const response = await axios.get(`${URL}${KEY}&per_page=3&page=${page}`);
    const myData = await response.data;
    if (response.status >= 400) {
        throw new Error(myData.errors);
    }
    return myData;
};

export const fetchImagesStats = async id => {
    const res = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = await res.json();
    if (res.status >= 400) {
        throw new Error(data.error);
    }
    return data;
};
