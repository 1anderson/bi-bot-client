import axios from "axios";

const apiUrl = "http://localhost:3000/";
const create = function(resourcePath: string, body: any) {
    console.log("entrou")
  return axios.post(`${apiUrl}${resourcePath}`, body);
};

const crudService = {
  create
};
export { crudService };
