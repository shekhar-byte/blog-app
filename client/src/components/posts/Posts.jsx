import "./posts.css";
import Blogpost from "../blogpost/Blogpost";
export default function Posts({ posts }) {
  return (
    <div className="posts">
      {Posts.map((p) => (
        <Blogpost post={p} />
      ))}
    </div>
  );
}
