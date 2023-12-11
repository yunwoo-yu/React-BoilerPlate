import { Configuration } from "webpack";
import merge from "webpack-merge";
import config from "./webpack.config";

const prodConfig: Configuration = merge(config, {
  mode: "production",
});

export default prodConfig;
