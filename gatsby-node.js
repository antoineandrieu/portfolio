const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, ANALYTICS_ID } =
  process.env;
const assert = require("assert");
const gatsbySourceMedium = require("gatsby-source-medium/gatsby-node");
const { createClient } = require("contentful");

const getAboutEntry = (entry) => entry.sys.contentType.sys.id === "about";
const getBlogPostEntry = (entry) => entry.sys.contentType.sys.id === "blogPost";

const LandingTemplate = require.resolve(`./src/templates/Home.tsx`);
const BlogPostTemplate = require.resolve(`./src/templates/BlogPost.tsx`);
const NotFoundTemplate = require.resolve(`./src/templates/NotFound.tsx`);

exports.sourceNodes = async (gatsbyConfig, themeOptions) => {
  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });

  const { items } = await client.getEntries();
  const about = items.find(getAboutEntry);
  assert(about, "Can't fetch about entry from Contentful");
  const { mediumUser = "@medium" } = about.fields;

  await gatsbySourceMedium.sourceNodes(gatsbyConfig, { username: mediumUser });
};

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions;
  const { landingPath = "/" } = themeOptions;
  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });
  const { items } = await client.getEntries();
  const posts = items.filter(getBlogPostEntry);

  createPage({
    path: landingPath,
    component: LandingTemplate,
    context: {
      posts: posts.map((post) => post.fields),
    },
  });

  posts.forEach((post) => {
    createPage({
      path: `${post.fields.slug}`,
      component: BlogPostTemplate,
      context: post.fields,
    });
  });

  createPage({
    path: "/404",
    component: NotFoundTemplate,
  });
};

exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })],
    });
  }
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assert: require.resolve("assert"),
      },
      fallback: { fs: false },
    },
  });
};
