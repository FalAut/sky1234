/** @format */

onEvent("ponder.registry", (ponder) => {
  ponder
    .create("naturesaura:offering_table")
    .scene("-", "-", "kubejs:offering_table", (scene, util) => {
      scene.scaleSceneView(0.6);
      scene.showStructure();
    });
});
