export const exerciseOptions = {
  method: "GET",
  headers: {
    'x-rapidapi-key': '219c4f910emsh8720a86b2833ba8p1121fdjsn3146c6a1c138',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    'x-rapidapi-key': '219c4f910emsh8720a86b2833ba8p1121fdjsn3146c6a1c138',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};


  