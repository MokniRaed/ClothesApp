import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { getAticles } from "../../Api/aticleApi";
import { useDispatch, useSelector } from "react-redux";
import { setArticles } from "../../store/ArticeSlice";

const ArticleTable = () => {
  //Call hooks
  const dispatch = useDispatch();
  //Call article state from store
  const Articles = useSelector(state =>state.Article)
  //get data and set it in the store of articles
  const getData = async () => {
    const data = await getAticles();
    dispatch(setArticles(data));
  };   
  //Count the article number
  let count=1;

//Call get data function
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
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
          </tr>
        </thead>
        <tbody>
        {Articles.map(article =><tr>
          <td>{count++}</td>
          <td>{article.categorie}</td>
          <td>{article.type}</td>
          <td>{article.price}</td>
          <td>{article.quantity}</td>
          <td>{article.color}</td>
          <td>{article.size}</td>
        </tr> )}
        </tbody>
      </Table>
    </div>
  );
};

export default ArticleTable;
