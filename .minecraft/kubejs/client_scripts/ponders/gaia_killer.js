/** @format */

onEvent("ponder.registry", (ponder) => {
  ponder
    .create("multiblocked:gaia_killer")
    .scene("-", "-", "kubejs:gaia_killer", (scene, util) => {
      scene.scaleSceneView(0.6);
      scene.showStructure();
    });
});
