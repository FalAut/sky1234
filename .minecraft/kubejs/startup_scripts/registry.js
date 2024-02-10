// priority: 0

onEvent('item.registry', event => {
    event.create('undef1ned').displayName('§kundef1ned').glow(true);
    event.create('undef1ned_pickaxe', 'pickaxe').displayName('§kundef1ned').tier('netherite').speed(15).glow(true);
    event.create('undef1ned_axe', 'axe').displayName('§kundef1ned').tier('netherite').speed(15).glow(true);
    event.create('undef1ned_shovel', 'shovel').displayName('§kundef1ned').tier('netherite').speed(15).glow(true);
    event.create('infused_coal');
    event.create('ghast_eye');
    event.create('wither_skeleton_eye');
    event.create('nether_eye');
    event.create('incomplete_queens_slime_ingot', 'create:sequenced_assembly').textureJson({ layer0: "tconstruct:item/materials/queens_slime_ingot" }).color(0, 0xB5B5B5);
    event.create('tainted_blend', 'create:sequenced_assembly').textureJson({ layer0: "minecraft:item/raw_copper", layer1: "minecraft:item/raw_gold", layer2: "create:item/raw_zinc" }).color(0, 0x8B6914).color(1, 0x8B6914).color(2, 0x8B6914);
    event.create('ferro_coke_blend').textureJson({ layer0: 'architects_palette:item/nether_brass_blend' }).color(0, 0x808080);
    event.create('enriched_dragon_breath').texture('mekanism:item/enriched_tin').color(0, 0xFFC0CB)
    event.create('enriched_unobtanium').texture('mekanism:item/enriched_refined_obsidian').color(0, 0xFFC0CB)
    event.create('mold_rf_coil')
    event.create('mold_redstone_servo')
    event.create('incomplete_rf_coil', 'create:sequenced_assembly')
    event.create('incomplete_redstone_servo', 'create:sequenced_assembly')
    event.create('mana_emerald').textureJson({ layer0: "minecraft:item/emerald" }).color(0, 0x00BFFF).glow(true)
    event.create('incomplete_creative_mana_tablet', 'create:sequenced_assembly').textureJson({ layer0: "botania:item/mana_tablet", layer1: "botania:item/mana_tablet_overlay" }).color(1, 0x808080)
    event.create('def1ned').displayName("???").glow(true)
    event.create('void_teleporters').glow(true).displayName('虚空维度传送器')
    event.create('surper_flat_teleporters').glow(true).displayName('超平坦维度传送器')
    event.create('water_world_teleporters').glow(true).displayName('水世界传送器')
})

onEvent('block.registry', event => {
    event.create("nether_portal_frame").material('stone');
    event.create("nether_portal_frame_filled").material('stone');
    event.create("undef1ned_block").displayName('§kundef1ned').material("amethyst").hardness(0.1);
    event.create("earth_core").material("amethyst").hardness(0.1);
    event.create("smoked_iron_block").material('metal').randomTick(tick => global.smokedironblock(tick));
    event.create('congealed_magma_cream').material('slime');
    event.create("pure_iron_block").material("metal");
    event.create('spirit_attuned_gem_block').material("metal")
    event.create('fluix_pearl_block').material("metal")
    event.create('mana_pearl_block').material("metal")
})

onEvent('fluid.registry', event => {
    let undef1ned_fluid = event.create("undef1ned_fluid").displayName('§kundef1ned').stillTexture('kubejs:fluid/undef1ned_fluid').flowingTexture('kubejs:fluid/undef1ned_fluid');
    let AAttributes = undef1ned_fluid.createAttributes();
    AAttributes.tickDelay(1);
    undef1ned_fluid.attributes = AAttributes;

    event.create("ichor_slime").stillTexture("tconstruct:block/fluid/ichor/still").flowingTexture("tconstruct:block/fluid/ichor/flowing").bucketColor(0xFF7F50);
    event.create("molten_andesite").thickTexture(0xDCDCDC);
    event.create("molten_andesite_alloy").thickTexture(0xBEBEBE);
    event.create('mana').thinTexture(0x87CEEB).noBucket()
})

onEvent('mekanism.infuse_type.registry', event => {
    event.create('dragon_breath').color(0xFFC0CB)
    event.create('unobtanium').color(0x8A2BE2)
})

onEvent('mekanism.slurry.registry', event => {
    event.create('dirty_titanium', 'dirty').color(0xC0C0C0)
    event.create('clean_titanium', 'clean').color(0xFFFFFF)
})

onEvent('mekanism.pigment.registry', event => {
    event.create('violet').color(0x8A2BE2)
    event.create('lime').color(0xADFF2F)
})

global.smokedironblock = tick => {
    const { block } = tick;

    if (block.offset(0, -1, 0) == 'create:blaze_burner' && block.offset(0, -1, 0).properties.blaze == "seething") {
        let itemEntity = block.createEntity("item");
        itemEntity.item = 'extendedcrafting:black_iron_ingot'
        itemEntity.x += 0.5
        itemEntity.y += 1
        itemEntity.z += 0.5
        itemEntity.spawn();
        if (Math.random() < 0.1) {
            block.set('air');
        }
    }
}