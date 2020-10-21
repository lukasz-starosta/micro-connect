import ComponentWrapper from "./ComponentWrapper";

export default class ComponentManager {
  private static instance: ComponentManager;
  private components: Map<string, ComponentWrapper> = new Map();

  private constructor() {
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ComponentManager();
    }
    return this.instance;
  }

  public registerComponent(component: ComponentWrapper) {
    this.components.set(component.uuid, component);

    console.log(this.components);
  }
}