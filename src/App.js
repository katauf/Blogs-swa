import React from "react";
import Header from "./components/BlogHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateBlogItem from "./components/CreateBlogItem";
import "./App.css";
import BlogList from "./components/BlogList";

const App = () => {
  return (
    <>
      <Header />
      <CreateBlogItem />
      <BlogList />
    </>
  );
};

export default App;
