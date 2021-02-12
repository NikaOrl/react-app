module.exports =
  process.env.NODE_ENV === "development"
    ? require("./webpack.config.dev.js")
    : require("./webpack.config.prod.js");
