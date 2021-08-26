import "./App.css";
import AllPosts from "./Components/All Posts/AllPosts";
import NewPost from "./Components/New Post/NewPost";
import Card from "./layout/Card/Card";
import Header from "./layout/Header/Header";

function App() {
  return (
    <div className="App">
      <Card>
        <Header></Header>
      </Card>
      <Card>
        <NewPost></NewPost>
      </Card>
      <AllPosts></AllPosts>
    </div>
  );
}

export default App;
