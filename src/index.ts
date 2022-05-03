import { MongodbManager } from "./managers/mongodb";
import type { GhostPluginPackageConfig } from "./typings/ghost.index";

export class GhostPluginPackage {

  public readonly config: GhostPluginPackageConfig = {
    pluginsEnabled: null
  } as GhostPluginPackageConfig;

  /**
   * A list of available managers to use from the package.
   * ```js
   * import { GhostPluginPackage } from "@ghostcord/plugins";
   * 
   * const mongodb = new GhostPluginPackage({
   *   pluginsEnabled: {
   *    db: {
   *     mongodb: true
   *   }
   * }).managers.MongoDbManager()
   * 
   * mongodb.<> // use the manager
   * 
   * ```
   */
  public managers = {
    MongoDbManager: new MongodbManager()
  }

  public constructor(protected options: GhostPluginPackageConfig) {

    this.config = options;

    if (!this.options.pluginsEnabled) throw new Error("You imported the package but did not specify any plugins to enable.");



  }
}