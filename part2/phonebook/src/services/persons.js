import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const add = (personObject) => {
  return axios.post(baseUrl, personObject);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`); // DELETE http://localhost:3001/persons/:id
};

const update = (id, updatedPerson) => {
  return axios.put(`${baseUrl}/${id}`, updatedPerson); // PUT http://localhost:3001/
};

export default {
  getAll,
  add,
  remove,
  update,
};
