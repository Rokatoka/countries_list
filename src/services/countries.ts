import request from "./api";

export const getAllCountries = () => {
  return request.get("/region/Europe");
};

export const getCountryByName = (name: string) => {
  return request.get(`/name/${name}`);
};
