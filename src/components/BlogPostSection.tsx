import React, { ReactNode } from "react";
import styled from "styled-components";
import { Heading } from "rebass/styled-components";
import { Slide } from "react-awesome-reveal";
import Triangle from "../components/Triangle";

type ContainerProps = {
  id?: string;
  children: ReactNode;
  Background?: () => JSX.Element;
};

const Container = ({
  id,
  children,
  Background = DefaultBackground,
}: ContainerProps) => (
  <section id={id} style={{ position: "relative" }}>
    <Background />
    <BlogPostSectionContainer>{children}</BlogPostSectionContainer>
  </section>
);

type HeaderProps = {
  name: string;
  icon?: string;
  label?: string;
};

const Header = ({ name, icon, label }: HeaderProps) => (
  <Slide direction="left" triggerOnce>
    <Heading color="text" mb={4}></Heading>
  </Slide>
);

const BlogPostSectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;

  @media (max-width: 400px) {
    padding: 2em 1em;
  }
`;

const DefaultBackground = () => <div />;

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={["35vh", "80vh"]}
      width={["95vw", "60vw"]}
    />

    <Triangle
      color="secondary"
      height={["38vh", "80vh"]}
      width={["50vw", "35vw"]}
    />

    <Triangle
      color="primary"
      height={["25vh", "35vh"]}
      width={["75vw", "60vw"]}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={["20vh", "20vh"]}
      width={["100vw", "100vw"]}
      position="bottom-right"
    />
  </>
);
export default {
  Container,
  Header,
};
