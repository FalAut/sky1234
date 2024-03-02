/**
 * 自然灵气-森林仪式的思索
 */

onEvent('ponder.registry', (event) => {
  event.create('naturesaura:wood_stand').scene('tree_ritual', 'Tree Ritual', 'tree_ritual', (scene, util) => {
    scene.scaleSceneView(0.8);
    scene.showStructure();
    scene.idle(20);

    //放置木基座物品
    scene
      .text(100, 'Firstly, place the items needed for the ritual on the Wooden Stand.The order of placement is arbitrary')
      .attachKeyFrame();
    let WoodStandPos = [
      [7, 1, 1],
      [8, 1, 4],
      [7, 1, 7],
      [4, 1, 8],
      [1, 1, 7],
      [0, 1, 4],
      [1, 1, 1],
      [4, 1, 0],
    ];
    let ClickPos = WoodStandPos.map((pos) => {
      return pos.map((num) => num + 0.5);
    });
    for (let i = 0; i < WoodStandPos.length; i++) {
      scene.showControls(10, ClickPos[i], 'right').rightClick();
      scene.world.modifyBlockEntityNBT(WoodStandPos[i], BlockEntityClass, (nbt) => {
        nbt.items = {
          Items: [{ Count: 1, id: 'cobblestone' }],
        };
      });
      scene.idle(10);
    }
    scene.idle(40);

    //金叶粉
    scene.text(80, 'Place the Golden Powder like this', [3, 0, 7]).attachKeyFrame();
    scene.idle(20);

    let StoneBricksPos = [
      [3, 0, 2],
      [4, 0, 2],
      [5, 0, 2],
      [5, 0, 3],
      [6, 0, 3],
      [6, 0, 4],
      [6, 0, 5],
      [5, 0, 5],
      [5, 0, 6],
      [4, 0, 6],
      [3, 0, 6],
      [3, 0, 5],
      [2, 0, 5],
      [2, 0, 4],
      [2, 0, 3],
      [3, 0, 3],
    ];
    scene.text(60, 'You can place blocks to mark the position', [3, 0, 5]).attachKeyFrame();
    StoneBricksPos.forEach((block) => {
      scene.world.setBlock(block, 'minecraft:stone_bricks', true);
    });
    scene.idle(80);

    //催熟树苗
    scene.text(40, 'Then place lthe sapling specified in the ritual recipe', [4.5, 1.5, 4.5]).attachKeyFrame();
    scene.world.setBlock([4, 1, 4], 'oak_sapling', true);
    scene.idle(40);
    scene.text(40, 'Wait for the sapling to grow or force it to grow').attachKeyFrame();
    for (let j = 0; j < 3; j++) {
      scene.showControls(1, [4.5, 1.5, 4.5], 'right').rightClick().withItem('bone_meal');
      scene.idle(10);
      let particlePos = [4, 1.1, 4];
      for (let i = 0; i < particlePos.length; i++) {
        particlePos[i] += Math.random() * 0.5;
        scene.particles.simple(1, 'happy_villager', particlePos);
      }
    }

    //树
    scene.world.setBlocks([4, 1, 4, 4, 3, 4], false, 'oak_log');
    scene.world.setBlocks([6, 4, 2, 2, 5, 6], false, 'oak_leaves');
    scene.world.setBlocks([5, 6, 3, 3, 6, 5], false, 'oak_leaves');
    let LeavesPos = [
      [5, 7, 4],
      [4, 7, 4],
      [3, 7, 4],
      [4, 7, 3],
      [4, 7, 5],
    ];
    LeavesPos.forEach((block) => {
      scene.world.setBlock(block, 'oak_leaves', false);
    });
    scene.idle(30);

    //进行仪式
    scene
      .text(
        100,
        'If the placed items are correct, the ritual will begin and consume the Golden Powder, Tree, and Items on the Wooden Stand'
      )
      .attachKeyFrame();
    //清除物品
    WoodStandPos.forEach((block) => {
      scene.world.modifyBlockEntityNBT(block, BlockEntityClass, (nbt) => {
        nbt.items = {
          Items: [{ Count: 1, id: 'air' }],
        };
      });
    });
    //树
    scene.world.setBlocks([4, 1, 4, 4, 3, 4], true, 'air');
    scene.world.setBlocks([6, 4, 2, 2, 5, 6], true, 'air');
    scene.world.setBlocks([5, 6, 3, 3, 6, 5], true, 'air');
    LeavesPos.forEach((block) => {
      scene.world.setBlock(block, 'air', true);
    });
    //金叶粉
    scene.world.replaceBlocks([6, 1, 2, 2, 1, 6], 'air', true);

    scene.idle(120);
    scene.text(40, 'After the ritual is complete, the product will appear').attachKeyFrame();
    scene.world.createItemEntity([4.5, 3, 4.5], [0, 0, 0], 'naturesaura:token_joy');
  });
});
