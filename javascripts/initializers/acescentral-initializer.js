import { withPluginApi } from "discourse/lib/plugin-api";
import discourseComputed from "discourse-common/utils/decorators";

function initializePlugin(api) {
  api.modifyClass("component:topic-list-item", {
    pluginId: "acescentral",

    @discourseComputed('hideCategory', 'topic.category.name')
    showCategory(hideCategory, categoryName){
        return !hideCategory && categoryName !== 'uncategorized';
    }
  });
}

export default {
  name: "acescentral",

  initialize() {
    withPluginApi("1.24.0", initializePlugin);
  },
};
