import { graphql, useStaticQuery } from "gatsby";
import { AboutMe } from "../types";

export type QueryResponse = {
  contentfulAbout: {
    aboutMe: {
      childMarkdownRemark: {
        rawMarkdownBody: string;
      };
    };
    portrait: {
      title: string;
      image: {
        src: string;
      };
    };
  };
};

export const useAboutMeQuery = (): AboutMe => {
  const {
    contentfulAbout: { aboutMe, portrait },
  } = useStaticQuery<QueryResponse>(graphql`
    query AboutMeQuery {
      contentfulAbout {
        aboutMe {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        portrait {
          title
          image: resize(width: 450, quality: 100) {
            src
          }
        }
      }
    }
  `);

  return {
    markdown: aboutMe.childMarkdownRemark.rawMarkdownBody,
    profile: {
      alt: portrait.title,
      src: portrait.image.src,
    },
  };
};
