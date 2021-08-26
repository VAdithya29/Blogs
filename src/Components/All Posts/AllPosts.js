import { useEffect, useState } from "react";
import Card from "../../layout/Card/Card";
import "./AllPosts.css";
// const axios = require("axios");

function AllPosts() {
  useEffect(() => {
    fetchAllPosts();
  }, []);

  const [post, setPost] = useState([]);

  // useEffect(() => {
  // axios.get("http://localhost:5000").then((response) => {
  //   setPost(response.data.users[0].name);
  //   response.data.users.forEach((element) => {
  //     USERS.push(element);
  //   });
  //   console.log(USERS);

  // });
  // });
  function fetchAllPosts() {
    fetch("http://localhost:5000/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // data.users.map((user) => {
        //   return console.log(user);
        console.log(data);
        setPost(data.users);
      });
  }
  return <Card>{post}</Card>;
}

export default AllPosts;
