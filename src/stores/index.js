import ArchiveStore from "./archiveStore";
import StoryStore from "./storyStore";
import { configure } from "mobx";

configure({ enforceActions: "always" });

class RootStore {
  constructor() {
    this.storyStore = new StoryStore(this);
    this.archiveStore = new ArchiveStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
