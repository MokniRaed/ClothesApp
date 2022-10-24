import axios from "axios";

export const addArticle = async (article) => {
  const added= await axios.post("http://localhost:5000/clothes/newarticle", article);
  return added;
};

export const getAticles = async () => {
  const {data} = await axios.get("http://localhost:5000/clothes/getAll");
  return data;
};
export const editAticles = async (id, obj) => {
  const edited = await axios.put(`http://localhost:5000/clothes/editarticle/${id}`, obj);
  return edited;
  
};
export const deleteAticles = async (id) => {
  const deleted = await axios.delete(`http://localhost:5000/clothes/deletearticle/${id}`);
  return deleted
};
