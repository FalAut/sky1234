/** @format */

onEvent("ponder.registry", (ponder) => {
  ponder
    .create("multiblocked:runic_altar_core")
    .scene("-", "-", "kubejs:runic_altar", (scene, util) => {
      scene.scaleSceneView(0.6);
      scene.showStructure();
    });
});
