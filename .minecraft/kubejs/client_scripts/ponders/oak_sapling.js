onEvent("ponder.registry", (ponder) => {
  ponder.create("minecraft:oak_sapling").scene("oak_sapling", "Frist Tree", "kubejs:oak_sapling", (scene, util) => {
    scene.showBasePlate();
    scene.scaleSceneView(0.6);
    scene.idle(10);
    scene.world.showSection([3, 1, 3], Facing.DOWN);
    scene.idle(10);
    scene.world.showSection([3, 2, 3], Facing.DOWN);
    scene.idle(10);
    scene.world.showSection([3, 3, 3], Facing.DOWN);
    scene.idle(10);
    scene.idle(20);
    for (let x = 0; x < 6; x++) {
      for (let z = 0; z < 6; z++) {
        scene.world.showSection([x, 4, z], Facing.DOWN);
      }
      scene.idle(3);
    }
    for (let x = 0; x < 6; x++) {
      for (let z = 0; z < 6; z++) {
        scene.world.showSection([x, 5, z], Facing.DOWN);
      }
      scene.idle(3);
    }
    scene.idle(20);
    for (let x = 0; x < 6; x++) {
      for (let z = 0; z < 6; z++) {
        scene.world.showSection([x, 6, z], Facing.DOWN);
      }
      scene.idle(3);
    }
    scene.idle(20);
    for (let x = 0; x < 6; x++) {
      for (let z = 0; z < 6; z++) {
        scene.world.showSection([x, 7, z], Facing.DOWN);
      }
      scene.idle(3);
    }
    scene.idle(20);
    scene.showControls(20, [4, 0.5, 4], "left").withItem("kubejs:undef1ned").rightClick();
    // scene
    //   .text(20, "Use this item to right-click on the bottom block")
    //   .colored(PonderPalette.RED)
    //   .attachKeyFrame();
    scene.idle(20);
    scene.world.setBlocks([0, 1, 0, 6, 8, 6], "minecraft:air", false);
    scene.idle(10);
    scene.world.createItemEntity(Vec3(3, 3, 3), Vec3(0, 0, 0), "minecraft:oak_sapling");
  });
});
