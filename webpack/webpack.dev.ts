import { merge } from "webpack-merge";
import config from "./webpack.config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

const devServer: DevServerConfiguration = {
  port: 3000,
  static: false,
  open: true,
  hot: true,
  client: {
    overlay: true,
  },
};

const devConfig = merge(config, {
  mode: "development",
  output: {
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
  },
  devServer,
});

export default devConfig;
