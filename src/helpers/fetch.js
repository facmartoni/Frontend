const baseUrl = process.env.REACT_APP_API_URL;

const fetchSinToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

const fetchConToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem("token") || "";
  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  }
};

const getNewById = async (_id) => {
  const url = `${baseUrl}/news/${_id}`;
  const resp = await fetch(url);
  const yourNew = await resp.json();
  return yourNew;
};

const getNewsByCategory = async (category) => {
  const url = `${baseUrl}/news/category/${category}`;
  const resp = await fetch(url);
  const newsCategory = await resp.json();
  return newsCategory;
};

export { fetchSinToken, fetchConToken, getNewById, getNewsByCategory };
