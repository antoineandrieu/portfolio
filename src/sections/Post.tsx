import React from "react";
import { Flex } from "rebass/styled-components";
import BlogPostSection from "../components/BlogPostSection";
import Triangle from "../components/Triangle";
import { SECTION } from "../utils/constants";

const Post = () => {
  return (
    <BlogPostSection.Container id="post" Background={Background}>
      <BlogPostSection.Header name="Post Title" icon="🙋‍♂️" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap"></Flex>
    </BlogPostSection.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="secondary"
      height={["40vh", "10vh"]}
      width={["50vw", "50vw"]}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={["5vh", "10vh"]}
      width={["75vw", "70vw"]}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={["15vh", "10vh"]}
      width={["80vw", "80vw"]}
    />
  </>
);

export default Post;
