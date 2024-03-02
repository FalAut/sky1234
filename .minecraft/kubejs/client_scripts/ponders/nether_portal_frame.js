onEvent('ponder.registry', (ponder) => {
  ponder.create('kubejs:nether_portal_frame').scene('nether_portal_frame', 'Nether Portal', (scene, util) => {
    scene.showStructure();
    scene.idle(10);
    for (let x = 2; x >= 1; x--) {
      scene.world.setBlock([x, 1, 3], 'kubejs:nether_portal_frame', false);
      scene.idle(5);
    }
    for (let z = 2; z >= 1; z--) {
      scene.world.setBlock([0, 1, z], 'kubejs:nether_portal_frame', false);
      scene.idle(5);
    }
    for (let x = 1; x <= 2; x++) {
      scene.world.setBlock([x, 1, 0], 'kubejs:nether_portal_frame', false);
      scene.idle(5);
    }
    for (let z = 1; z <= 2; z++) {
      scene.world.setBlock([3, 1, z], 'kubejs:nether_portal_frame', false);
      scene.idle(5);
    }
    scene.showControls(40, [2, 2.5, 3], 'down').withItem('kubejs:nether_eye').rightClick();
    scene.idle(10);
    for (let x = 2; x >= 1; x--) {
      scene.world.setBlock([x, 1, 3], 'kubejs:nether_portal_frame_filled', false);
      scene.idle(5);
    }
    for (let z = 2; z >= 1; z--) {
      scene.world.setBlock([0, 1, z], 'kubejs:nether_portal_frame_filled', false);
      scene.idle(5);
    }
    for (let x = 1; x <= 2; x++) {
      scene.world.setBlock([x, 1, 0], 'kubejs:nether_portal_frame_filled', false);
      scene.idle(5);
    }
    for (let z = 1; z <= 2; z++) {
      scene.world.setBlock([3, 1, z], 'kubejs:nether_portal_frame_filled', false);
      scene.idle(5);
    }
    scene.showControls(20, [3.5, 0.5, 3.5], 'left').withItem('naturesaura:token_anger').rightClick();
    scene.idle(20);
    scene.world.setBlocks([1, 1, 1, 2, 1, 2], 'customportalapi:custom_portal_block', false);
    scene.world.modifyBlocks([1, 1, 1, 2, 1, 2], (curState) => curState.with('axis', 'y'), false);
  });
});
