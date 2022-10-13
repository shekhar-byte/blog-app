import React from "react";
import { useState, useEffect } from "react";
import Blogpost from "../../components/blogpost/Blogpost";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = () => {
      axios
        .get("http://localhost:5000/api/posts")
        .then((res) => setPosts(res))
        .catch((err) => console.log(err));
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <Header />
      <div className="home">
        <Blogpost posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}
