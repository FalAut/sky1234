onEvent('ponder.registry', (event) => {
  event.create(['kubejs:undef1ned_fluid_bucket', 'miniutilities:mechanical_miner']).scene('-', '-', (scene, util) => {
    scene.showStructure();
    scene.idle(10);
    scene.showControls(10, [3.8, 1.5, 2.8], 'down').rightClick().withItem('iron_block');
    scene.world.setBlocks([3, 1, 2], 'iron_block', true);
    scene.idle(20);
    scene.showControls(10, [0.8, 1.5, 2.8], 'down').rightClick().withItem('kubejs:undef1ned_fluid_bucket');
    scene.world.setBlocks([0, 1, 2], 'kubejs:undef1ned_fluid', true);
    scene.idle(10);
    scene.world.setBlocks([1, 1, 2], 'kubejs:undef1ned_fluid', true);
    scene.world.modifyBlock([1, 1, 2], (curState) => curState.with('level', '7'), false);
    scene.idle(10);
    scene.world.setBlocks([2, 1, 2], 'iron_ore', true);
    scene.idle(20);

    let ironEntities = [];

    for (let i = 0; i < 5; i++) {
      scene.showControls(5, [2.8, 1.5, 2.8], 'down').leftClick().withItem('iron_pickaxe');
      scene.world.setBlocks([2, 1, 2], 'iron_ore', true);
      scene.idle(5);
      scene.world.destroyBlock([2, 1, 2]);

      let iron = scene.world.createItemEntity([2, 2, 2], [0, 0, 0], 'raw_iron');
      ironEntities.push(iron);
      scene.idle(5);
    }
    scene.idle(10);
    ironEntities.forEach((entity) => {
      scene.world.removeEntity(entity);
    });
    scene.world.setBlocks([2, 1, 2], 'iron_ore', true);
    scene.idle(20);

    scene.showControls(5, [2.8, 1.5, 3.8], 'down').rightClick().withItem('miniutilities:mechanical_miner');
    scene.idle(5);
    scene.world.setBlocks([2, 1, 3], 'miniutilities:mechanical_miner', true);

    scene.idle(10);
    for (let i = 0; i < 5; i++) {
      scene.world.setBlocks([2, 1, 2], 'iron_ore', true);
      scene.idle(5);
      scene.world.destroyBlock([2, 1, 2]);
      scene.idle(5);
    }
    scene.world.setBlocks([2, 1, 2], 'iron_ore', true);
    scene.idle(20);

    for (let i = 0; i < 4; i++) {
      scene.showControls(5, [2.8, 1.5, 3.8], 'down').rightClick().withItem('miniutilities:speed_upgrade');
      scene.idle(10);
    }

    for (let i = 0; i < 20; i++) {
      scene.world.setBlocks([2, 1, 2], 'iron_ore', true);
      scene.idle(1);
      scene.world.destroyBlock([2, 1, 2]);
      scene.idle(1);
    }
    scene.world.setBlocks([2, 1, 2], 'iron_ore', true);
    scene.idle(20);

    for (let i = 0; i < 4; i++) {
      scene.showControls(5, [2.8, 1.5, 3.8], 'left').whileSneaking().rightClick();
      scene.idle(10);
      scene.world.createItemEntity([3, 2, 4], [0, 0, 0], 'miniutilities:speed_upgrade');
    }

    for (let i = 0; i < 5; i++) {
      scene.world.setBlocks([2, 1, 2], 'iron_ore', true);
      scene.idle(5);
      scene.world.destroyBlock([2, 1, 2]);
      scene.idle(5);
    }
    scene.world.setBlocks([2, 1, 2], 'iron_ore', true);
  });

  event.create(['kubejs:undef1ned_fluid_bucket', 'miniutilities:mechanical_miner']).scene('-', '-', 'blockoregen', (scene, util) => {
    scene.showStructure();
    scene.scaleSceneView(0.8);
    scene.rotateCameraY(90);
  });
});
