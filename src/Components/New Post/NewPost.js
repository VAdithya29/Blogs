import "./NewPost.css";

function BlogPost() {
  return (
    <div className="newPostForm">
      <form>
        <div className="individualElement">
          <input type="text" placeholder="Title"></input>
        </div>
        <div className="individualElement">
          <textarea placeholder="Description" rows="5"></textarea>
        </div>
        <div className="individualElement">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default BlogPost;
