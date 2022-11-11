import axios from "axios";

// Set config defaults when creating the instance

const clothes = axios.create({
  baseURL: "http://localhost:5000/clothes/",
});

export const addArticle = async (article) => {
  try {
    const added = await axios.post("/newarticle", article);
    return added;
  } catch (err) {   
    console.log(err);
  }
};

export const getAticles = async () => {
  try {
    const { data } = await clothes.get("/getAll");
    return data;
  } catch (err) {
    if (err.message === "Network Error") {
      window.location.href = "/error";
    }
  }
};
export const editAticles = async (id, obj) => {
  try {
    const edited = await clothes.put(`/editarticle/${id}`, obj);
    return edited;
  } catch (err) {
    console.log(err);
  }
};
export const deleteAticles = async (id) => {
  try {
    const deleted = await clothes.delete(`/deletearticle/${id}`);
    return deleted;
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (newUser) => {
  try {
    const user = await clothes.post("/createuser", newUser);
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const login = async (user) => {
  try {
    const response = await clothes.post("/login", user);
    return response;
  } catch (err) {
    console.log(err);
  }
};
