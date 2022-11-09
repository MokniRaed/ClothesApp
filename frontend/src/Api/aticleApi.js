import axios from "axios";

export const addArticle = async (article) => {
  try {
    const added = await axios.post(
      "http://localhost:5000/clothes/newarticle",
      article
    );
    return added;
  } catch (err) {
    console.log(err);
  }
};

export const getAticles = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/clothes/getAll");
    return data;
  } catch (err) {
    if(err.message === "Network Error"){
      window.location.href = '/error';

    }
  }
};
export const editAticles = async (id, obj) => {
  try {
    const edited = await axios.put(
      `http://localhost:5000/clothes/editarticle/${id}`,
      obj
    );
    return edited;
  } catch (err) {
    console.log(err);
  }
};
export const deleteAticles = async (id) => {
  try {
    const deleted = await axios.delete(
      `http://localhost:5000/clothes/deletearticle/${id}`
    );
    return deleted;
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (newUser) => {
  try {
    const user = await axios.post(
      "http://localhost:5000/clothes/createuser",
      newUser
    );
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const login = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/clothes/login",
      user
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
