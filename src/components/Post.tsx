import React, { ReactNode } from "react";
import { Box, Flex, Heading, Text } from "rebass/styled-components";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BlogPost } from "../types";
import { MEDIUM_URL } from "../utils/constants";
import { Card } from "./Card";
import ImageLabel from "./ImageLabel";

export const Post = ({
  slug,
  title,
  cover,
  date,
  readingTime,
  devtoUrl,
  content,
}: BlogPost) => (
  <PostContainer url={slug} title={title}>
    <EllipsisHeading m={3} color="text">
      {title}
    </EllipsisHeading>
    {cover && <CoverImage src={cover} height="200px" alt={title} />}
    <Text m={3} color="text">
      TODO
    </Text>
    <ImageLabel bg="primary" color="background" position="bottom-right" round>
      {`${readingTime} min`}
    </ImageLabel>
  </PostContainer>
);

type PostContainerProps = {
  url: string;
  title: string;
  children: ReactNode;
};

const PostContainer = ({ url, title, children }: PostContainerProps) => (
  <a href={url} title={title} style={{ textDecoration: "none" }}>
    <Card p={0} pb={4}>
      {children}
    </Card>
  </a>
);

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
