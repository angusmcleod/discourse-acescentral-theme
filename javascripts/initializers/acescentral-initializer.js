import { withPluginApi } from "discourse/lib/plugin-api";

function initializePlugin(api) {
}

export default {
  name: "acescentral",

  initialize() {
    withPluginApi("1.24.0", initializePlugin);
  },
};
