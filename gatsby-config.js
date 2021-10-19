const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, ANALYTICS_ID } =
  process.env;
const colors = require("./src/colors.json");

const plugins = [
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-typescript",
  "gatsby-plugin-styled-components",
  "gatsby-transformer-remark",
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Mate Portfolio",
      short_name: "Mate",
      start_url: "/",
      background_color: colors.background,
      theme_color: colors.primary,
      display: "minimal-ui",
      icon: "icon.png",
    },
  },
  {
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_ACCESS_TOKEN,
    },
  },
];

const siteMetadata = {
  deterministic: false,
};

if (ANALYTICS_ID) {
  plugins.push({
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: ANALYTICS_ID,
    },
  });
}

module.exports = {
  plugins,
  siteMetadata,
};
