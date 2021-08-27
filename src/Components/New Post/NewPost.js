import { useState } from "react";
import "./NewPost.css";

function BlogPost() {
  const [title, setTitle] = useState("");
  const [opinion, setOpinion] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function opinionChangeHandler(event) {
    setOpinion(event.target.value);
  }

  function opinionSubmitHandler(event) {
    event.preventDefault();
    fetch("http://localhost:5000/opinions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, opinion }),
    });
  }

  return (
    <div className="newPostForm">
      <form onSubmit={opinionSubmitHandler}>
        <div className="individualElement">
          <input
            type="text"
            placeholder="Title"
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="individualElement">
          <textarea
            placeholder="Description"
            rows="5"
            onChange={opinionChangeHandler}
          ></textarea>
        </div>
        <div className="individualElement">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default BlogPost;
