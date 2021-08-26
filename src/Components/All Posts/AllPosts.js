import { useEffect, useState } from "react";
import Card from "../../layout/Card/Card";
import "./AllPosts.css";

function AllPosts() {
  useEffect(() => {
    fetchAllPosts();
  }, []);

  const [post, setPost] = useState([]);
  function fetchAllPosts() {
    fetch("http://localhost:5000/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPost(data.users);
      });
  }
  return (
    <Card>
      {post.map((single) => {
        return <Card>{single.name}</Card>;
      })}
    </Card>
  );
}

export default AllPosts;
