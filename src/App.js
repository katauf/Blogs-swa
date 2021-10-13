import React from "react";
import Header from "./components/BlogHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateBlogItem from "./components/CreateBlogItem";

const App = () => {
  return (
    <>
      <Header />
      <CreateBlogItem />
    </>
  );
};

export default App;