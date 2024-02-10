/** @format */

onEvent("ponder.registry", (ponder) => {
  ponder
    .create("multiblocked:runic_crystal")
    .scene(
      "-",
      "-",
      "kubejs:terrestrial_agglomeration_altar",
      (scene, util) => {
        scene.scaleSceneView(0.6);
        scene.showStructure();
      }
    );
});
