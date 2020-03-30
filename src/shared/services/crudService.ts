import axios from "axios";

const apiUrl = "http://localhost:3000/";
const create = (resourcePath: string, body: any) => axios.post(`${apiUrl}${resourcePath}`, body);
const crudService = {
  create
};
export { crudService };
