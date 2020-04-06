import axios from "axios";

const apiUrl = "http://localhost:3000/";
const post = (resourcePath: string, body: any) => axios.post(`${apiUrl}${resourcePath}`, body);
const crudService = {
  post
};
export { crudService };
