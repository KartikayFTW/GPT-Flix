export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
  },
};
