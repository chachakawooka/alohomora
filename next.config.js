const withTM = require("next-transpile-modules")([
  "next-slicezone",
  "essential-slices",
]);
module.exports = withTM({
  env: {
    PRISMIC_API_ENDPOINT: process.env.PRISMIC_API_ENDPOINT,
  },
});
