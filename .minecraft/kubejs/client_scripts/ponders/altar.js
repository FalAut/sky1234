/**
 * 自然灵气-自然祭坛与猩红祭坛的思索
 */

//修改祭坛物品
function ModifyAltarItem(scene, input) {
  scene.world.modifyBlockEntityNBT([4, 2, 4], (nbt) => {
    nbt.items = {
      Items: [{ Count: 1, id: input }],
    };
  });
}

//模拟祭坛配方
function AltarRecipe(scene, input, output) {
  scene.showControls(20, [4.5, 2.5, 4.5], 'right').rightClick().withItem(input);
  scene.idle(10);
  ModifyAltarItem(scene, input);
  scene.idle(60);
  scene.particles.simple(1, 'explosion', [4.5, 3, 4.5]).scale(0.7);
  ModifyAltarItem(scene, output);
}

onEvent('ponder.registry', (event) => {
  //第一个场景 - 自然祭坛
  event.create('naturesaura:nature_altar').scene('altar', 'Nature Altar', 'altar', (scene, util) => {
    scene.scaleSceneView(0.8);
    scene.showStructure();

    //文字 - 祭坛搭建完成后，会缓慢吸收周围的灵气，并存入自然祭坛
    scene
      .text(40, 'After the altar is built, it slowly absorbs the surrounding Aura and deposits it into the Natural Altar')
      .colored('green')
      .attachKeyFrame();
    scene.idle(50);

    //文字 - 将需要灌注的物品放入自然祭坛，若自然祭坛存有足够的灵气，则会将其中的物品进行灵气灌注
    scene
      .text(
        100,
        'Place the items that need to be poured into the Natural Altar, and if there is enough Aura in the Natural Altar, the items in it will be Aura infused'
      )
      .colored('green')
      .attachKeyFrame();

    //铁锭→灌注铁锭
    AltarRecipe(scene, 'iron_ingot', 'naturesaura:infused_iron');
    scene.idle(40);
    ModifyAltarItem(scene, 'air');

    //文字 - 可在这四个位置放置催化器
    scene.text(60, 'The Catalystcan be placed in these four locations').colored('green').attachKeyFrame();
    //催化器
    let CatalystPos = [
      [6, 3, 2],
      [2, 3, 2],
      [2, 3, 6],
      [6, 3, 6],
    ];
    CatalystPos.forEach((block) => {
      scene.world.setBlock(block, 'naturesaura:conversion_catalyst', false);
      scene.overlay.showOutline('red', 1, block, 20);
      scene.idle(20);
      scene.world.setBlock(block, 'air', false);
    });

    //文字 - 放置催化剂后，自然祭坛会有更多的配方
    scene.text(200, 'After the catalyst is placed, the natural altar will have more Recipe').colored('green').attachKeyFrame();
    //嬗变催化器 木炭→煤炭
    scene.world.setBlock([6, 3, 6], 'naturesaura:conversion_catalyst', false);
    AltarRecipe(scene, 'charcoal', 'coal');
    scene.idle(40);
    ModifyAltarItem(scene, 'air');
    //崩坏催化器 甘蔗→糖
    scene.world.setBlock([2, 3, 2], 'naturesaura:crushing_catalyst', false);
    AltarRecipe(scene, 'sugar_cane', 'sugar');
  });

  //第二个场景 - 猩红祭坛
  event.create('naturesaura:nature_altar').scene('nether_altar', 'Crimson Altar', 'nether_altar', (scene, util) => {
    scene.scaleSceneView(0.8);
    scene.showStructure();
    scene.idle(20);

    //文字 - 将自然祭坛放置在下界会变为猩红祭坛
    scene
      .text(40, 'Placing the natural altar on the Nether will turn it into the Crimson Altar')
      .colored('red')
      .placeNearTarget()
      .pointAt([4, 3, 4])
      .attachKeyFrame();
    scene.overlay.showOutline('red', 1, [4, 2, 4], 20);
    scene.idle(60);

    //文字 - 猩红祭坛与自然祭坛的用法没有太大区别，猩红祭坛可以收集下界的灵气，并将其灌注入物品
    scene
      .text(
        80,
        'The use of the Crimson Altar is not much different from the Natural Altar, the Crimson Altar can collect the Aura of the Nether and pour it into the item'
      )
      .attachKeyFrame()
      .colored('red');
    //金锭→污染黄金
    AltarRecipe(scene, 'gold_ingot', 'naturesaura:tainted_gold');
    scene.idle(40);
    ModifyAltarItem(scene, 'air');

    //文字 - 猩红祭坛也可以使用催化器，并且催化器放置在下界时会改变原本的材质
    scene
      .text(40, 'The Crimson Altars can also use catalysts, and Catalyst placed on the Nether will change its texture')
      .attachKeyFrame()
      .colored('red')
      .placeNearTarget()
      .pointAt([6, 3, 6]);
    //嬗变催化器 沙子→灵魂沙
    scene.world.setBlock([6, 3, 6], 'naturesaura:conversion_catalyst', false);
    scene.world.modifyBlock([6, 3, 6], (curState) => curState.with('nether', 'true'), false);
    AltarRecipe(scene, 'sand', 'soul_sand');
    scene.idle(40);
    ModifyAltarItem(scene, 'air');
    //崩坏催化器 烈焰棒→烈焰粉
    scene.world.setBlock([2, 3, 2], 'naturesaura:crushing_catalyst', false);
    scene.world.modifyBlock([2, 3, 2], (curState) => curState.with('nether', 'true'), false);
    AltarRecipe(scene, 'blaze_rod', 'blaze_powder');
    scene.idle(40);
    ModifyAltarItem(scene, 'air');
  });
});
