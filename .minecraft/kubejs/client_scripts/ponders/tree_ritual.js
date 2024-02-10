/** @format */

onEvent("ponder.registry", (ponder) => {
  ponder
    .create("naturesaura:nature_altar")
    .scene("-", "-", "kubejs:altar", (scene, util) => {
      scene.scaleSceneView(0.6);
      scene.showStructure();
    });
});
