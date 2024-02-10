/** @format */

onEvent("ponder.registry", (ponder) => {
  ponder
    .create("multiblocked:stress_generator_controller")
    .scene("-", "-", "kubejs:stress_generator", (scene, util) => {
      scene.scaleSceneView(0.6);
      scene.showStructure();
    });
});
