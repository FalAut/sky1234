/** @format */

onEvent("ponder.registry", (ponder) => {
  ponder
    .create("naturesaura:wood_stand")
    .scene("-", "-", "kubejs:tree_ritual", (scene, util) => {
      scene.scaleSceneView(0.6);
      scene.showStructure();
    });
});
