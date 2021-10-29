import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Post from "../sections/Post";

const BlogPost = () => {
  // useEffect(() => {
  //   // Prevent browser to going back to previous scroll position
  //   console.log(window.history);
  //   if ("scrollRestoration" in window.history) {
  //     window.history.scrollRestoration = "manual";
  //   }
  // });

  return (
    <Layout>
      <Header isHomePage={false} />
      <Post />
      <Footer />
    </Layout>
  );
};

export default BlogPost;
