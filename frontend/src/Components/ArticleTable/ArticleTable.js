import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { deleteAticles, getAticles } from "../../Api/aticleApi";
import { useDispatch, useSelector } from "react-redux";
import { setArticles } from "../../store/ArticeSlice";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Loader } from "rsuite";

const ArticleTable = () => {
  //Call hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Call article state from store
  const Articles = useSelector((state) => state.Article);
  const [isLoading, setisLoading] = useState(false);

  //get data and set it in the store of articles
  const getData = async () => {
    const data = await getAticles();
    dispatch(setArticles(data));
    setisLoading(!isLoading);
    console.log(isLoading);
  };
  //Count the article number
  let count = 1;

  //Success Message
  const handleDelete = (id) => {
    //Wait for the promise to show the noticifation
    toast.promise(deleteAticles(id), {
      loading: "deleting...",
      success: <b>Article deleted!</b>,
      error: <b>Could not delete.</b>,
    });
  };

  //Call get data function
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <Toaster position="top-right" />
      </div>
      {isLoading ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Categorie</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Color</th>
              <th>Size</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Articles.map((article, key) => (
              <tr key={key}>
                <td>{count++}</td>
                <td>{article.categorie}</td>
                <td>{article.type}</td>
                <td>{article.price}</td>
                <td>{article.quantity}</td>
                <td>{article.color}</td>
                <td>{article.size}</td>
                <td>
                  <button
                    onClick={() => {
                      navigate(`/edit/${article._id}`);
                    }}
                    variant="primary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(article._id);
                    }}
                    variant="primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Loader size="md" content="Loading.." />
      )}
    </div>
  );
};

export default ArticleTable;
