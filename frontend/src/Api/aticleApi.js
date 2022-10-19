import axios  from "axios";

export const addArticle = async (article) => {
  await axios.post("http://localhost:5000/clothes/newarticle", article);
};

export const getAticles = async ()=>{
  const {data} = await axios.get("http://localhost:5000/clothes/getAll");
  return data;
}


