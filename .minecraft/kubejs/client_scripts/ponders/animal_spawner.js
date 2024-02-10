/** @format */

onEvent("ponder.registry", (ponder) => {
  ponder
    .create("naturesaura:animal_spawner")
    .scene("-", "-", "kubejs:animal_spawner", (scene, util) => {
      scene.scaleSceneView(0.6);
      scene.showStructure();
    });
});
