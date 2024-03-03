// priority: 0

onEvent('item.registry', (event) => {
  event.create('undef1ned').glow(true).displayName('1234');
  event.create('undef1ned_pickaxe', 'pickaxe').tier('netherite').speed(15).glow(true).displayName('1234 Pickaxe');
  event.create('undef1ned_axe', 'axe').tier('netherite').speed(15).glow(true).displayName('1234 Axe');
  event.create('undef1ned_shovel', 'shovel').tier('netherite').speed(15).glow(true).displayName('1234 Shovel');
  event.create('infused_coal');
  event.create('ghast_eye');
  event.create('wither_skeleton_eye');
  event.create('nether_eye');
  event
    .create('incomplete_queens_slime_ingot', 'create:sequenced_assembly')
    .textureJson({ layer0: 'tconstruct:item/materials/queens_slime_ingot' })
    .color(0, 0xb5b5b5);
  event
    .create('tainted_blend', 'create:sequenced_assembly')
    .textureJson({
      layer0: 'minecraft:item/raw_copper',
      layer1: 'minecraft:item/raw_gold',
      layer2: 'create:item/raw_zinc',
    })
    .color(0, 0x8b6914)
    .color(1, 0x8b6914)
    .color(2, 0x8b6914);
  event.create('ferro_coke_blend').textureJson({ layer0: 'architects_palette:item/nether_brass_blend' }).color(0, 0x808080);
  event.create('enriched_dragon_breath').texture('mekanism:item/enriched_tin').color(0, 0xffc0cb);
  event.create('enriched_unobtanium').texture('mekanism:item/enriched_refined_obsidian').color(0, 0xffc0cb);
  event.create('mold_rf_coil');
  event.create('mold_redstone_servo');
  event.create('incomplete_rf_coil', 'create:sequenced_assembly');
  event.create('incomplete_redstone_servo', 'create:sequenced_assembly');
  event.create('mana_emerald').textureJson({ layer0: 'minecraft:item/emerald' }).color(0, 0x00bfff).glow(true);
  event
    .create('incomplete_creative_mana_tablet', 'create:sequenced_assembly')
    .textureJson({ layer0: 'botania:item/mana_tablet', layer1: 'botania:item/mana_tablet_overlay' })
    .color(1, 0x808080);
});

onEvent('block.registry', (event) => {
  event.create('nether_portal_frame').material('stone').lightLevel(1).box(0, 0, 0, 16, 13, 16).defaultCutout();
  event.create('nether_portal_frame_filled').material('stone').lightLevel(1).box(0, 0, 0, 16, 13, 16).box(4, 12, 4, 12, 16, 12).defaultCutout();
  event.create('undef1ned_block').material('amethyst').hardness(0.1).displayName('1234 Block');
  event.create('earth_core').material('amethyst').hardness(0.1);
  event
    .create('smoked_iron_block')
    .material('metal')
    .randomTick((tick) => global.smokedironblock(tick));
  event.create('congealed_magma_cream').material('slime').jumpFactor(2);
  event.create('pure_iron_block').material('metal');
  event.create('spirit_attuned_gem_block').material('metal');
  event.create('fluix_pearl_block').material('metal');
  event.create('mana_pearl_block').material('metal');
});

onEvent('fluid.registry', (event) => {
  let undef1ned_fluid = event
    .create('undef1ned_fluid')
    .displayName('1234 Fluid')
    .stillTexture('kubejs:fluid/undef1ned_fluid')
    .flowingTexture('kubejs:fluid/undef1ned_fluid');
  let AAttributes = undef1ned_fluid.createAttributes();
  AAttributes.tickDelay(1);
  undef1ned_fluid.attributes = AAttributes;

  event
    .create('ichor_slime')
    .stillTexture('tconstruct:block/fluid/ichor/still')
    .flowingTexture('tconstruct:block/fluid/ichor/flowing')
    .bucketColor(0xff7f50);
  event.create('molten_andesite').thickTexture(0xdcdcdc);
  event.create('molten_andesite_alloy').thickTexture(0xbebebe);
  event.create('mana').thinTexture(0x87ceeb).noBucket().displayName('Mana in Mana Pool');
});

onEvent('mekanism.infuse_type.registry', (event) => {
  event.create('dragon_breath').color(0xffc0cb);
  event.create('unobtanium').color(0x8a2be2);
});

onEvent('mekanism.slurry.registry', (event) => {
  event.create('dirty_titanium', 'dirty').color(0xc0c0c0);
  event.create('clean_titanium', 'clean').color(0xffffff);
});

onEvent('mekanism.pigment.registry', (event) => {
  event.create('violet').color(0x8a2be2);
  event.create('lime').color(0xadff2f);
});

global.smokedironblock = (tick) => {
  const { block } = tick;

  if (block.offset(0, -1, 0) == 'create:blaze_burner' && block.offset(0, -1, 0).properties.blaze == 'seething') {
    let itemEntity = block.createEntity('item');
    itemEntity.item = 'extendedcrafting:black_iron_ingot';
    itemEntity.x += 0.5;
    itemEntity.y += 1;
    itemEntity.z += 0.5;
    itemEntity.spawn();
    if (Math.random() < 0.1) {
      block.set('air');
    }
  }
};
