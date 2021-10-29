import React, { useEffect } from "react";
import Layout from "../components/Layout";

import Header from "../components/Header";
import Landing from "../sections/Landing";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Writing from "../sections/Writing";
import Footer from "../components/Footer";

const Home = (context) => {
  const posts = context.pageContext.posts;

  // useEffect(() => {
  //   // Prevent browser to going back to previous scroll position
  //   // window.scrollTo(0, 0);
  //   console.log("-----------------");
  //   console.log(window.location.hash);
  //   console.log("-----------------");
  //   if (window.location.hash) {
  //     var anchor = document.querySelector(window.location.hash);
  //     console.log(anchor);
  //     anchor.scrollIntoView();
  //   }

  //   // console.log(window.history);
  //   // if ("scrollRestoration" in window.history) {
  //   //   window.history.scrollRestoration = "manual";
  //   // }
  //   // location.hash = window.location.hash;
  // }, []);

  return (
    <Layout>
      <Header isHomePage={true} />
      <Landing />
      <About />
      <Projects />
      {posts.length && <Writing posts={posts} />}
      <Footer />
    </Layout>
  );
};

export default Home;
