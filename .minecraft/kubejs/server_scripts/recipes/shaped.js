// priority: 0

onEvent('recipes', event => {
    const id_prefix = 'kubejs:recipes/shaped/'
    let { crafting_shaped } = event.recipes.minecraft

    event.replaceInput({ output: 'tconstruct:seared_drain'}, 'minecraft:copper_ingot', 'tconstruct:queens_slime_nugget')
    event.replaceInput({ output: 'tconstruct:seared_chute'}, 'minecraft:copper_ingot', 'tconstruct:queens_slime_nugget')
    event.replaceInput({ output: 'occultism:magic_lamp_empty'}, 'thermal:silver_ingot', 'create:refined_radiance')
    event.replaceInput({ output: 'thermal:saw_blade'}, 'minecraft:copper_ingot', 'iron_ingot')
    // event.replaceInput({output: 'projecte:transmutation_table'}, 'projecte:philosophers_stone', 'ae2:singularity')
    // event.replaceInput({output: 'projecte:transmutation_tablet'}, 'projecte:transmutation_table', 'ae2:singularity')
    event.replaceInput({ output: 'fluxnetworks:flux_block'}, 'fluxnetworks:flux_core', 'fluxnetworks:flux_dust')
    event.replaceInput({ output: 'tconstruct:scorched_alloyer'}, 'tconstruct:scorched_ingot_gauge', 'create:fluid_tank')
    event.replaceInput({ output: 'occultism:sacrificial_bowl'}, 'occultism:otherstone', 'create:shadow_steel')
    event.replaceInput({ output: 'thermal:redstone_servo'}, 'iron_ingot', 'immersiveengineering:stick_iron')
    event.replaceInput({ output: 'thermal:rf_coil'}, 'gold_ingot', 'assemblylinemachines:gold_rod')
    event.replaceInput({ output: 'immersiveengineering:hammer'}, 'minecraft:string', 'minecraft:slime_ball')
    event.replaceInput({ output: 'ae2:controller'}, 'ae2:smooth_sky_stone_block', 'immersiveengineering:sheetmetal_steel')
    event.replaceInput({ output: 'botania:gaia_pylon' }, 'botania:elementium_ingot', 'industrialforegoing:pink_slime_ingot')
    event.replaceInput({ output: 'thermal:device_tree_extractor' }, 'thermal:redstone_servo', 'create:mechanical_pump')
    event.replaceInput({ output: 'botania:natura_pylon' }, 'botania:terrasteel_nugget', 'kubejs:mana_emerald')
    event.replaceInput({ output: 'industrialforegoing:laser_drill' }, 'industrialforegoing:machine_frame_simple', 'industrialforegoing:machine_frame_advanced')
    event.replaceInput({ output: 'mekanism:upgrade_speed' }, '#forge:glass', 'thermal_extra:dragonsteel_plate')
    event.replaceInput({ output: 'mekanism:upgrade_energy' }, '#forge:glass', 'thermal_extra:dragonsteel_plate')
    event.replaceInput({ output: 'mekanism:upgrade_filter' }, '#forge:glass', 'thermal_extra:dragonsteel_plate')
    event.replaceInput({ output: 'mekanism:upgrade_muffling' }, '#forge:glass', 'thermal_extra:dragonsteel_plate')
    event.replaceInput({ output: 'mekanism:upgrade_gas' }, '#forge:glass', 'thermal_extra:dragonsteel_plate')
    event.replaceInput({ output: 'mekanism:upgrade_anchor' }, '#forge:glass', 'thermal_extra:dragonsteel_plate')
    event.replaceInput({ output: 'mekanism:upgrade_stone_generator' }, '#forge:glass', 'thermal_extra:dragonsteel_plate')
    event.replaceInput({ output: 'mekanism:basic_fluid_tank' }, 'iron_ingot', 'botania:terrasteel_ingot')
    event.replaceInput({ output: 'thermal:device_tree_extractor' }, 'thermal:iron_gear', 'create:cogwheel')
    event.replaceInput({ output: 'mekanism:thermal_evaporation_valve' }, 'mekanism:advanced_control_circuit', 'mekaevolution:absolute_control_circuit')
    event.replaceInput({ output: 'mekanism:thermal_evaporation_controller' }, 'mekanism:advanced_control_circuit', 'mekaevolution:absolute_control_circuit')
    event.replaceInput({ output: 'mekanism:structural_glass' }, 'immersiveengineering:ingot_steel', 'assemblylinemachines:pure_iron_ingot')
    event.replaceInput({ output: 'mekanism:pressurized_reaction_chamber' }, 'mekanism:alloy_infused', 'assemblylinemachines:microprocessor')
    event.replaceInput({ output: 'botanypotstiers:ultra_terracotta_botany_pot' }, 'minecraft:nether_star', 'diamond')
    event.replaceInput({ output: 'ae2:cell_component_256k' }, 'ae2:sky_dust', 'ae2:fluix_dust')
    event.replaceInput({ output: 'botanypotstiers:ultra_terracotta_hopper_botany_pot' }, 'minecraft:nether_star', 'diamond')
    
// undef1ned Block
    crafting_shaped('kubejs:undef1ned_block', ['11', '11'], {
        1: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT()
    }).id(`${id_prefix}undef1ned_block`);

// undef1ned Pickaxe
    crafting_shaped(Item.of('kubejs:undef1ned_pickaxe', '{Unbreakable:1b}'), ['111', ' 2 ', ' 2 '], {
        1: 'kubejs:undef1ned_block',
        2: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT()
    }).id(`${id_prefix}undef1ned_pickaxe`);

// undef1ned Axe
    crafting_shaped(Item.of('kubejs:undef1ned_axe', '{Unbreakable:1b}'), ['11 ', '12 ', ' 2 '], {
        1: 'kubejs:undef1ned_block',
        2: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT()
    }).id(`${id_prefix}undef1ned_axe`);

// undef1ned Shovel
    crafting_shaped(Item.of('kubejs:undef1ned_shovel', '{Unbreakable:1b}'), [' 1 ', ' 2 ', ' 2 '], {
        1: 'kubejs:undef1ned_block',
        2: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT()
    }).id(`${id_prefix}undef1ned_shovel`);
    
// Bucket
    crafting_shaped('bucket', ['1 1', ' 1 '], {
        1: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT()
    }).id(`${id_prefix}bucket`);

// Water Bucket
    crafting_shaped('water_bucket', ['111', ' 2 ', '   '], {
        1: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT(), 
        2: 'bucket'
    }).id(`${id_prefix}water_bucket`);

// Lava Bucket
    crafting_shaped('lava_bucket', ['   ', ' 2 ', '111'], {
        1: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT(), 
        2: 'bucket'
    }).id(`${id_prefix}lava_bucket`);

// Cobblefordays Tier 1
    crafting_shaped('cobblefordays:tier_1', ['111', '2 3', '111'], {
        1: '#logs', 
        2: 'water_bucket',
        3: 'lava_bucket',
    }).id(`${id_prefix}cobblefordays_tier_1`);

// Mechanical Miner
    crafting_shaped('miniutilities:mechanical_miner', ['121', '3 3', '111'], {
        1: 'iron_ingot', 
        2: Item.of('kubejs:undef1ned_pickaxe', '{Damage:0,Unbreakable:1b}'),
        3: 'naturesaura:gold_powder',
    }).id(`${id_prefix}mechanical_miner`);

// Calling Spirit
    crafting_shaped('64x naturesaura:calling_spirit', [' 1 ', '232', ' 1 '], {
        1: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), 
        2: 'naturesaura:infused_iron',
        3: 'naturesaura:gold_powder',
    }).id(`${id_prefix}calling_spirit`);

// Storge Controller
    crafting_shaped('occultism:storage_controller', ['111', ' 2 ', '222'], {
        1: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT(),
        2: 'kubejs:undef1ned_block'
    }).id(`${id_prefix}storage_controller`);

// Storge Remote
    crafting_shaped('occultism:storage_remote', ['212', '222', '222'], {
        1: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT(), 
        2: 'kubejs:undef1ned_block'
    }).id(`${id_prefix}storage_remote`);

// Stable Wormhole
    crafting_shaped('occultism:stable_wormhole', ['222', '212', '222'], {
        1: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT(), 
        2: 'kubejs:undef1ned_block'
    }).id(`${id_prefix}stable_wormhole`);

// Megatorch
    crafting_shaped('torchmaster:megatorch', ['111', '232', '434'], {
        1: 'torch', 
        2: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT(), 
        3: '#logs', 
        4: 'kubejs:undef1ned_block'
    }).id(`${id_prefix}megatorch`);

// Gold Leaf
    crafting_shaped('8x naturesaura:gold_leaf', ['111', '121', '111'], {
        1: '#leaves', 
        2: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT()
    }).id(`${id_prefix}gold_leaf`);

// Token Euphoria
    crafting_shaped('naturesaura:token_euphoria', ['111', '121', '111'], {
        1: 'naturesaura:gold_powder', 
        2: 'naturesaura:token_joy'
    }).id(`${id_prefix}token_euphoria`);

// Base
    crafting_shaped('compactcrafting:base', [' 1 ', '232', '444'], {
        1: 'naturesaura:ancient_stick', 
        2: 'kubejs:infused_coal',
        3: 'tconstruct:seared_bricks_slab', 
        4: 'tconstruct:seared_brick'
    }).id(`${id_prefix}base`);

// Projector Dish
    crafting_shaped('compactcrafting:projector_dish', ['12 ', '132', '12 '], {
        1: '#forge:glass_panes', 
        2: 'iron_ingot',
        3: 'kubejs:infused_coal'
    }).id(`${id_prefix}projector_dish`);

// Death Ring
    crafting_shaped('naturesaura:death_ring', [' 1 ', '2 2', ' 2 '], {
        1: 'naturesaura:token_euphoria', 
        2: 'naturesaura:sky_ingot'
    }).id(`${id_prefix}death_ring`);

// Pet Reviver
    crafting_shaped('naturesaura:pet_reviver', [' 1 ', '121', ' 1 '], {
        1: 'naturesaura:sky_ingot',
        2: 'naturesaura:token_euphoria',
    }).id(`${id_prefix}pet_reviver`);

// Coke Brick
    crafting_shaped('3x immersiveengineering:cokebrick', ['121', '232', '121'], {
        1: 'tconstruct:seared_brick',
        2: 'architects_palette:algal_blend',
        3: 'architects_palette:algal_bricks'
    }).id(`${id_prefix}cokebrick`);

// Blast Brick
    crafting_shaped('3x immersiveengineering:blastbrick', ['121', '232', '121'], {
        1: 'tconstruct:scorched_brick',
        2: 'architects_palette:nether_brass_ingot',
        3: 'tconstruct:scorched_bricks'
    }).id(`${id_prefix}blastbrick`);

// Blaze In Jar
    crafting_shaped('multiblocked:blaze_in_jar', [' 1 ', '232', '222'], {
        1: 'minecraft:oak_slab',
        2: 'minecraft:glass_pane',
        3: 'tconstruct:blaze_head'
    }).id(`${id_prefix}blaze_in_jar`);

// Stresso Meter
    crafting_shaped('create:stressometer', [' 1 ', '234'], {
        1: 'compass',
        2: 'create:electron_tube',
        3: 'create:gearbox',
        4: 'create:precision_mechanism'
    }).id(`${id_prefix}stressometer`);

// Ender Tank
    crafting_shaped('enderstorage:ender_tank', ['121', '343', '151'], {
        1: 'gold_ingot',
        2: 'cobblestone',
        3: 'obsidian',
        4: 'create:fluid_tank',
        5: 'ender_pearl'
    }).id(`${id_prefix}ender_tank`);

// Ender Chest
    crafting_shaped('enderstorage:ender_chest', ['121', '343', '151'], {
        1: 'gold_ingot',
        2: 'cobblestone',
        3: 'obsidian',
        4: 'chest',
        5: 'ender_pearl'
    }).id(`${id_prefix}ender_chest`);

// Compressor
    crafting_shaped('extendedcrafting:compressor', ['121', '343', '151'], {
        1: 'extendedcrafting:black_iron_ingot',
        2: 'ae2:singularity',
        3: 'extendedcrafting:elite_catalyst',
        4: 'extendedcrafting:frame',
        5: 'extendedcrafting:elite_component'
    }).id(`${id_prefix}compressor`);

// Charger
    crafting_shaped('ae2:charger', ['121', '3  ', '141'], {
        1: 'ae2:quartz_block',
        2: 'immersiveengineering:charging_station',
        3: 'immersiveengineering:logic_circuit',
        4: 'immersiveengineering:capacitor_lv'
    }).id(`${id_prefix}charger`);

// Inscriber
    crafting_shaped('ae2:inscriber', ['121', '3  ', '141'], {
        1: 'ae2:quartz_block',
        2: 'minecraft:sticky_piston',
        3: 'immersiveengineering:logic_circuit',
        4: 'immersiveengineering:capacitor_lv'
    }).id(`${id_prefix}inscriber`);

// Infinity Wand
    crafting_shaped('constructionwand:infinity_wand', ['  1', ' 2 ', '2  '], {
        1: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT(),
        2: 'naturesaura:ancient_stick',
    }).id(`${id_prefix}infinity_wand`);

// Animal Generator
    crafting_shaped('naturesaura:animal_generator', ['121', '3 3', '141'], {
        1: 'minecraft:nether_brick',
        2: 'naturesaura:infused_iron',
        3: 'minecraft:iron_bars',
        4: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}')
    }).id(`${id_prefix}animal_generator`);

// Flux Core
    crafting_shaped('4x fluxnetworks:flux_core', ['121', '232', '121'], {
        1: 'fluxnetworks:flux_dust',
        2: 'fluxnetworks:flux_block',
        3: 'redstone_block'
    }).id(`${id_prefix}flux_core`);

// Mana Liqiudizer
    crafting_shaped('manaliquidizer:mana_liquidizer', ['121', '2 2', '121'], {
        1: 'botania:livingrock',
        2: 'occultism:iesnium_ingot'
    }).id(`${id_prefix}mana_liquidizer`);

// Machine Frame Pity
    crafting_shaped('industrialforegoing:machine_frame_pity', ['121', '2 2', '121'], {
        1: 'botania:livingrock',
        2: 'botania:livingwood'
    }).id(`${id_prefix}machine_frame_pity`);

// Fluid_extractor
    crafting_shaped('industrialforegoing:fluid_extractor', ['151', '424', '131'], {
        1: 'create:refined_radiance',
        2: 'industrialforegoing:machine_frame_pity',
        3: 'thermal:device_tree_extractor',
        4: 'thermal:redstone_servo',
        5: 'thermal:rf_coil'
    }).id(`${id_prefix}fluid_extractor`);

// Latex Processing Unit
    crafting_shaped('industrialforegoing:latex_processing_unit', ['151', '424', '131'], {
        1: 'create:refined_radiance',
        2: 'industrialforegoing:machine_frame_pity',
        3: 'thermal:machine_centrifuge',
        4: 'thermal:redstone_servo',
        5: 'thermal:rf_coil'
    }).id(`${id_prefix}latex_processing_unit`);

// Condenser
    crafting_shaped('ae2:condenser', ['121', '232', '121'], {
        1: 'ae2:certus_quartz_crystal',
        2: 'ae2:quartz_glass',
        3: 'ae2:fluix_pearl'
    }).id(`${id_prefix}condenser`);

// Alloy Brick
    crafting_shaped('immersiveengineering:alloybrick', ['12', '21'], {
        1: 'architects_palette:nether_brass_blend',
        2: 'architects_palette:nether_brass_ingot'
    }).id(`${id_prefix}alloybrick`);

// Nether Prediction
    crafting_shaped('hostilenetworks:nether_prediction', ['11', '11'], {
        1: 'hostilenetworks:overworld_prediction'
    }).id(`${id_prefix}nether_prediction`);

// End Prediction
    crafting_shaped('hostilenetworks:end_prediction', ['11', '11'], {
        1: 'hostilenetworks:nether_prediction'
    }).id(`${id_prefix}end_prediction`);

// Pinkinator
    crafting_shaped('botania:pinkinator', ['12 ', '233', ' 33'], {
        1: 'botania:dragonstone',
        2: 'botania:pixie_dust',
        3: 'botania:elementium_ingot'
    }).id(`${id_prefix}pinkinator`);

// Pinkinator
    crafting_shaped('industrialforegoing:dissolution_chamber', ['121', '343', '151'], {
        1: 'industrialforegoing:plastic',
        2: 'create:precision_mechanism',
        3: 'minecraft:bucket',
        4: 'industrialforegoing:machine_frame_simple',
        5: 'thermal:machine_smelter'
    }).id(`${id_prefix}dissolution_chamber`);

// End Prediction
    crafting_shaped('botania:gaia_ingot', ['111', '121', '111'], {
        1: 'botania:life_essence',
        2: 'industrialforegoing:pink_slime_ingot'
    }).id(`${id_prefix}end_prediction`);

// Stress Generator Core
    crafting_shaped('multiblocked:stress_generator_core', ['111', '121', '111'], {
        1: 'minecraft:glowstone',
        2: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT()
    }).id(`${id_prefix}stress_generator_core`);

// RF Coil Mold
    crafting_shaped('kubejs:mold_rf_coil', ['11 ', '11 ', '  2'], {
        1: 'extendedcrafting:black_iron_slate',
        2: Ingredient.of('immersiveengineering:wirecutter').ignoreNBT()
    }).id(`${id_prefix}mold_rf_coil`);

// Redstone Servo Mold
    crafting_shaped('kubejs:mold_redstone_servo', ['2  ', ' 11', ' 11'], {
        1: 'extendedcrafting:black_iron_slate',
        2: Ingredient.of('immersiveengineering:wirecutter').ignoreNBT()
    }).id(`${id_prefix}mold_redstone_servo`);

// Machine Furnace
    crafting_shaped('thermal:machine_furnace', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:copper_gear',
        5: 'thermal:rf_coil',
        6: 'furnace'
    }).id(`${id_prefix}machine_furnace`);

// Machine Sawmill
    crafting_shaped('thermal:machine_sawmill', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:copper_gear',
        5: 'thermal:rf_coil',
        6: 'thermal:saw_blade'
    }).id(`${id_prefix}machine_sawmill`);

// Machine Pulverizer
    crafting_shaped('thermal:machine_pulverizer', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:copper_gear',
        5: 'thermal:rf_coil',
        6: 'thermal:machine_pulverizer'
    }).id(`${id_prefix}machine_pulverizer`);

// Machine Smelter
    crafting_shaped('thermal:machine_smelter', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:invar_gear',
        5: 'thermal:rf_coil',
        6: 'minecraft:blast_furnace'
    }).id(`${id_prefix}machine_smelter`);

// Machine Insolator
    crafting_shaped('thermal:machine_insolator', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:lumium_gear',
        5: 'thermal:rf_coil',
        6: 'bucket'
    }).id(`${id_prefix}machine_insolator`);

// Machine Centrifuge
    crafting_shaped('thermal:machine_centrifuge', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:constantan_gear',
        5: 'thermal:rf_coil',
        6: 'create:mechanical_mixer'
    }).id(`${id_prefix}machine_centrifuge`);

// Machine Press
    crafting_shaped('thermal:machine_press', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:constantan_gear',
        5: 'thermal:rf_coil',
        6: 'create:mechanical_press'
    }).id(`${id_prefix}machine_press`);

// Machine Crucible
    crafting_shaped('thermal:machine_crucible', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:invar_gear',
        5: 'thermal:rf_coil',
        6: 'create:blaze_burner'
    }).id(`${id_prefix}machine_crucible`);

// Machine Chiller
    crafting_shaped('thermal:machine_chiller', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:invar_gear',
        5: 'thermal:rf_coil',
        6: 'water_bucket'
    }).id(`${id_prefix}machine_chiller`);

// Machine Refinery
    crafting_shaped('thermal:machine_refinery', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:invar_gear',
        5: 'thermal:rf_coil',
        6: 'create:whisk'
    }).id(`${id_prefix}machine_refinery`);

// Machine Pyrolyzer
    crafting_shaped('thermal:machine_pyrolyzer', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:constantan_gear',
        5: 'thermal:rf_coil',
        6: 'lava_bucket'
    }).id(`${id_prefix}machine_pyrolyzer`);

// Machine Bottler
    crafting_shaped('thermal:machine_bottler', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:lumium_gear',
        5: 'thermal:rf_coil',
        6: 'create:spout'
    }).id(`${id_prefix}machine_bottler`);

// Machine Brewer
    crafting_shaped('thermal:machine_brewer', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:lumium_gear',
        5: 'thermal:rf_coil',
        6: 'minecraft:brewing_stand'
    }).id(`${id_prefix}machine_brewer`);

// Machine Crystallizer
    crafting_shaped('thermal:machine_crystallizer', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:lumium_gear',
        5: 'thermal:rf_coil',
        6: 'thermal:obsidian_glass'
    }).id(`${id_prefix}machine_crystallizer`);

// Machine Crafter
    crafting_shaped('thermal:machine_crafter', ['161', '232', '454'], {
        1: 'immersiveengineering:logic_circuit',
        2: 'thermal:redstone_servo',
        3: 'thermal:machine_frame',
        4: 'thermal:lumium_gear',
        5: 'thermal:rf_coil',
        6: 'minecraft:crafting_table'
    }).id(`${id_prefix}machine_cafter`);

// Combiner
    crafting_shaped('mekanism:combiner', ['141', '232', '151'], {
        1: 'immersiveengineering:plate_steel',
        2: 'immersiveengineering:logic_circuit',
        3: 'botania:crafting_halo',
        4: 'assemblylinemachines:microprocessor',
        5: 'mekanism:steel_casing'
    }).id(`${id_prefix}combiner`);

// Metallurgic Infuser
    crafting_shaped('mekanism:metallurgic_infuser', ['141', '232', '151'], {
        1: 'immersiveengineering:plate_steel',
        2: 'mekanism:basic_control_circuit',
        3: 'create:spout',
        4: 'assemblylinemachines:microprocessor',
        5: 'mekanism:steel_casing'
    }).id(`${id_prefix}metallurgic_infuser`);

// Electrolytic Sparator
    crafting_shaped('mekanism:electrolytic_separator', ['141', '232', '151'], {
        1: 'mekanism:alloy_atomic',
        2: 'mekanism:ultimate_control_circuit',
        3: 'mekanism:electrolytic_core',
        4: 'assemblylinemachines:microprocessor',
        5: 'mekanism:steel_casing'
    }).id(`${id_prefix}electrolytic_separator`);

// Loot Fabricator
    crafting_shaped('hostilenetworks:loot_fabricator', [' 1 ', '232', '454'], {
        1: 'hostilenetworks:empty_prediction',
        2: 'thermal:electrum_plate',
        3: 'create:shadow_steel_casing',
        4: 'thermal:redstone_servo',
        5: 'thermal:rf_coil'
    }).id(`${id_prefix}loot_fabricator`);

// chemical_infuser
    crafting_shaped('mekanism:chemical_infuser', ['151', '343', '121'], {
        1: 'mekanism:alloy_atomic',
        2: 'mekanism:ultimate_control_circuit',
        3: 'mekanism:basic_chemical_tank',
        4: 'mekanism:steel_casing',
        5: 'assemblylinemachines:microprocessor'
    }).id(`${id_prefix}chemical_infuser`);

// Speed Upgrade
    crafting_shaped('miniutilities:speed_upgrade', ['111', '111'], {
        1: 'naturesaura:gold_powder'
    }).id(`${id_prefix}speed_upgrade`);

// muffling_block
    crafting_shaped('bettermuffling:muffling_block', ['111', '121', '111'], {
        1: '#minecraft:planks',
        2: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT()
    }).id(`${id_prefix}muffling_block`);

// muffling_block_advanced
    crafting_shaped('bettermuffling:muffling_block_advanced', ['111', '121', '111'], {
        1: 'naturesaura:gold_powder',
        2: 'bettermuffling:muffling_block'
    }).id(`${id_prefix}muffling_block_advancedk`);

// rotary_condensentrator
    crafting_shaped('mekanism:rotary_condensentrator', ['161', '345', '121'], {
        1: 'mekanism:alloy_atomic',
        2: 'mekanism:ultimate_control_circuit',
        3: 'mekanism:basic_chemical_tank',
        4: 'mekanism:energy_tablet',
        5: 'mekanism:basic_fluid_tank',
        6: 'assemblylinemachines:microprocessor'
    }).id(`${id_prefix}rotary_condensentrator`);

    crafting_shaped('mekanism:osmium_compressor', ['121', '343', '151'], {
        1: 'mekanism:alloy_atomic',
        2: 'assemblylinemachines:microprocessor',
        3: 'bucket',
        4: 'mekanism:steel_casing',
        5: 'mekanism:ultimate_control_circuit',
    }).id(`${id_prefix}osmium_compressor`);

    crafting_shaped('mekanism:chemical_dissolution_chamber', ['121', '343', '151'], {
        1: 'mekanism:ingot_refined_obsidian',
        2: 'assemblylinemachines:microprocessor',
        3: 'mekanism:basic_chemical_tank',
        4: 'mekanism:steel_casing',
        5: 'mekanism:ultimate_control_circuit',
    }).id(`${id_prefix}chemical_dissolution_chamber`);

    crafting_shaped('mekanism:chemical_washer', ['121', '354', '161'], {
        1: 'mekanism:ingot_refined_obsidian',
        2: 'assemblylinemachines:microprocessor',
        3: 'mekanism:basic_chemical_tank',
        4: "mekanism:basic_fluid_tank",
        5: 'mekanism:steel_casing',
        6: 'mekanism:ultimate_control_circuit',
    }).id(`${id_prefix}chemical_washer`);

    crafting_shaped('mekanism:chemical_crystallizer', ['121', '343', '151'], {
        1: 'mekanism:ingot_refined_obsidian',
        2: 'assemblylinemachines:microprocessor',
        3: 'mekanism:ultimate_control_circuit',
        4: 'mekanism:steel_casing',
        5: 'thermal:machine_crystallizer'
    }).id(`${id_prefix}chemical_crystallizer`);

    crafting_shaped('mekanism:energized_smelter', ['121', '343', '151'], {
        1: 'immersiveengineering:plate_steel',
        2: 'assemblylinemachines:microprocessor',
        3: 'mekanism:basic_control_circuit',
        4: 'mekanism:steel_casing',
        5: 'furnace'
    }).id(`${id_prefix}energized_smelter`);

    crafting_shaped('mekanism:crusher', ['121', '343', '151'], {
        1: 'immersiveengineering:plate_steel',
        2: 'assemblylinemachines:microprocessor',
        3: 'mekanism:basic_control_circuit',
        4: 'mekanism:steel_casing',
        5: 'create:iron_sheet'
    }).id(`${id_prefix}mekcrusher`);

    crafting_shaped('mekanism:enrichment_chamber', ['121', '343', '151'], {
        1: 'immersiveengineering:plate_steel',
        2: 'assemblylinemachines:microprocessor',
        3: 'mekanism:basic_control_circuit',
        4: 'mekanism:steel_casing',
        5: 'ae2:quartz_growth_accelerator'
    }).id(`${id_prefix}enrichment_chamber`);

    crafting_shaped('multiblocked:terrestrial_agglomeration_plate_io', ['111', '121', '111'], {
        1: 'botania:rune_mana',
        2: 'chest'
    }).id(`${id_prefix}terrestrial_agglomeration_plate_io`);

    crafting_shaped('multiblocked:pedestal', ['111', ' 2 ', '222'], {
        1: 'projecte:dark_matter',
        2: 'projecte:dark_matter_block'
    }).id(`${id_prefix}mbdpedestal`);

    crafting_shaped('assemblylinemachines:overclocked_conduction_component', ['121', '232', '121'], {
        1: 'assemblylinemachines:empowered_conduction_component',
        2: 'mekanism:alloy_atomic',
        3: 'assemblylinemachines:energized_gold_block'
    }).id(`${id_prefix}overclocked_conduction_component`);
    
    crafting_shaped('assemblylinemachines:overclocked_convection_component', ['121', '232', '121'], {
        1: 'assemblylinemachines:empowered_convection_component',
        2: 'mekanism:alloy_atomic',
        3: 'assemblylinemachines:energized_gold_block'
    }).id(`${id_prefix}overclocked_convection_component`);

    crafting_shaped('assemblylinemachines:conduction_component', ['121', '232', '121'], {
        1: 'assemblylinemachines:pure_iron_plate',
        2: 'redstone',
        3: 'kubejs:pure_iron_block'
    }).id(`${id_prefix}conduction_component`);

    crafting_shaped('assemblylinemachines:convection_component', ['121', '232', '121'], {
        1: 'assemblylinemachines:attuned_titanium_plate',
        2: 'redstone',
        3: 'assemblylinemachines:attuned_titanium_block',
    }).id(`${id_prefix}convection_component`);

    crafting_shaped('mekaevolution:absolute_control_circuit', ['123'], {
        1: 'assemblylinemachines:overclocked_conduction_component',
        2: 'mekanism:ultimate_control_circuit',
        3: 'assemblylinemachines:overclocked_convection_component',
    }).id(`${id_prefix}absolute_control_circuit`);

    crafting_shaped('mekanism:thermal_evaporation_block', ['11 ', '11 '], {
        1: 'assemblylinemachines:pure_copper_ingot'
    }).id(`${id_prefix}thermal_evaporation_block`);

    crafting_shaped('mekanism:solar_neutron_activator', ['111', '252', '434'], {
        1: 'mekanismgenerators:solar_panel',
        2: 'mekanism:alloy_atomic',
        3: 'mekanism:steel_casing',
        4: 'mekaevolution:absolute_control_circuit',
        5: 'assemblylinemachines:microprocessor'
    }).id(`${id_prefix}solar_neutron_activator`);

    crafting_shaped('tconstruct:earth_slime_crystal', ['111', '121', '111'], {
        1: 'minecraft:slime_ball',
        2: 'minecraft:amethyst_shard'
    }).id(`${id_prefix}earth_slime_crystal`);
    
    crafting_shaped('tconstruct:sky_slime_crystal', ['111', '121', '111'], {
        1: 'tconstruct:sky_slime_ball',
        2: 'minecraft:amethyst_shard'
    }).id(`${id_prefix}sky_slime_crystal`);

    crafting_shaped('tconstruct:ender_slime_crystal', ['111', '121', '111'], {
        1: 'tconstruct:ender_slime_ball',
        2: 'minecraft:amethyst_shard'
    }).id(`${id_prefix}ender_slime_crystal`);

    crafting_shaped('tconstruct:ichor_slime_crystal', ['111', '121', '111'], {
        1: 'tconstruct:ichor_slime_ball',
        2: 'minecraft:amethyst_shard'
    }).id(`${id_prefix}ichorslime_crystal`);

    crafting_shaped('miniutilities:flame_lily_seeds', ['111', '121', '111'], {
        1: 'minecraft:blaze_powder',
        2: '#forge:seeds'
    }).id(`${id_prefix}flame_lily_seeds`);

    crafting_shaped('minecraft:enchanted_golden_apple', ['111', '121', '111'], {
        1: 'gold_block',
        2: 'apple'
    }).id(`${id_prefix}enchanted_golden_apple`);

    crafting_shaped('assemblylinemachines:reality_crystal', ['123', '456', '789'], {
        1: 'ae2:fluix_crystal',
        2: 'minecraft:amethyst_shard',
        3: 'ae2:certus_quartz_crystal',
        4: 'tconstruct:earth_slime_crystal',
        5: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:antimatter"}'),
        6: 'tconstruct:sky_slime_crystal',
        7: 'tconstruct:ender_slime_crystal',
        8: 'spirit:soul_crystal',
        9: 'tconstruct:ichor_slime_crystal'
    }).id(`${id_prefix}reality_crystal`);    

    crafting_shaped('assemblylinemachines:miniature_black_hole', ['123', '456', '789'], {
        1: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'),
        2: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}'),
        3: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}'),
        4: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'),
        5: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:antimatter"}'),
        6: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'),
        7: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}'),
        8: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'),
        9: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}')
    }).id(`${id_prefix}miniature_black_hole`); 
    
    crafting_shaped('mekaevolution:cosmic_control_circuit', ['123'], {
        1: 'assemblylinemachines:reality_crystal',
        2: 'mekaevolution:absolute_control_circuit',
        3: 'assemblylinemachines:miniature_black_hole'
    }).id(`${id_prefix}cosmic_control_circuit`);

    crafting_shaped('assemblylinemachines:energy_harness', ['121', '343', '121'], {
        1: 'mekanism:hdpe_sheet',
        2: 'assemblylinemachines:energized_gold_plate',
        3: 'assemblylinemachines:attuned_titanium_plate',
        4: 'mekaevolution:cosmic_control_circuit'
    }).id(`${id_prefix}energy_harness`);

    crafting_shaped('assemblylinemachines:entropy_reactor_core', ['121', '232', '121'], {
        1: 'assemblylinemachines:energy_harness',
        2: 'assemblylinemachines:entropy_reactor_block',
        3: 'assemblylinemachines:miniature_black_hole'
    }).id(`${id_prefix}entropy_reactor_core`);

    crafting_shaped('assemblylinemachines:entropy_reactor_block', ['121', '2 2', '121'], {
        1: 'assemblylinemachines:attuned_titanium_plate',
        2: 'mekanism:steel_casing'
    }).id(`${id_prefix}entropy_reactor_block`);

    crafting_shaped('assemblylinemachines:entropy_reactor_upgrade_capacity', [' 1 ', '121', ' 1 '], {
        1: 'mekanism:hdpe_sheet',
        2: 'ae2:singularity'
    }).id(`${id_prefix}entropy_reactor_upgrade_capacity`);

    crafting_shaped('assemblylinemachines:entropy_reactor_upgrade_cycle_delayer', [' 1 ', '121', ' 1 '], {
        1: 'mekanism:hdpe_sheet',
        2: 'clock'
    }).id(`${id_prefix}entropy_reactor_upgrade_cycle_delayer`);

    crafting_shaped('assemblylinemachines:entropy_reactor_upgrade_variety', [' 1 ', '121', ' 1 '], {
        1: 'mekanism:hdpe_sheet',
        2: 'mekanism:pellet_antimatter'
    }).id(`${id_prefix}entropy_reactor_upgrade_variety`);

    crafting_shaped('assemblylinemachines:entropy_reactor_upgrade_entropic_harnesser', ['111', '121', '111'], {
        1: Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}').weakNBT(),
        2: 'assemblylinemachines:reality_crystal'
    }).id(`${id_prefix}entropy_reactor_upgrade_entropic_harnesser`);

    crafting_shaped('64x extendedexchange:fading_matter', ['111', '121', '111'], {
        1: 'projecte:dark_matter',
        2: 'assemblylinemachines:semi_dense_neutron_matter'
    }).id(`${id_prefix}fading_matter`);

    crafting_shaped('assemblylinemachines:electrified_netherite_blend', ['121', '232', '121'], {
        1: 'thermal:netherite_dust',
        2: 'assemblylinemachines:energized_gold_ingot',
        3: 'assemblylinemachines:chaotic_fertilizer'
    }).id(`${id_prefix}electrified_netherite_blend`);

    crafting_shaped('assemblylinemachines:nova_blend', ['121', '434', '121'], {
        1: 'assemblylinemachines:prismatic_dust',
        2: 'minecraft:redstone',
        3: 'minecraft:nether_star',
        4: 'thermal:lapis_dust'
    }).id(`${id_prefix}nova_blend`);

    crafting_shaped('assemblylinemachines:mystium_blend', ['121', '232', '121'], {
        1: 'assemblylinemachines:electrified_netherite_blend',
        2: 'mekanism:pellet_antimatter',
        3: 'assemblylinemachines:corrupted_shard'
    }).id(`${id_prefix}mystium_blend`);

    crafting_shaped('mekaevolution:infinite_control_circuit', ['111', '132', '222'], {
        1: 'assemblylinemachines:novasteel_ingot',
        2: 'assemblylinemachines:mystium_ingot',
        3: 'mekaevolution:cosmic_control_circuit'
    }).id(`${id_prefix}infinite_control_circuit`);

// painting_machine
    crafting_shaped('mekanism:painting_machine', ['161', '343', '121'], {
        1: 'mekanism:alloy_atomic',
        2: 'mekaevolution:infinite_control_circuit',
        3: 'mekanism:dye_base',
        4: 'mekanism:steel_casing',
        6: 'assemblylinemachines:microprocessor'
    }).id(`${id_prefix}painting_machine`);

// 'mekanism:pigment_extractor'
    crafting_shaped('mekanism:pigment_extractor', ['161', '343', '121'], {
        1: 'mekanism:alloy_atomic',
        2: 'mekaevolution:infinite_control_circuit',
        3: 'thermal:device_tree_extractor',
        4: 'mekanism:steel_casing',
        6: 'assemblylinemachines:microprocessor'
    }).id(`${id_prefix}pigment_extractor`);

// pigment_mixer
    crafting_shaped('mekanism:pigment_mixer', ['161', '343', '121'], {
        1: 'mekanism:alloy_atomic',
        2: 'mekaevolution:infinite_control_circuit',
        3: 'mekanism:hdpe_rod',
        4: 'mekanism:steel_casing',
        6: 'assemblylinemachines:microprocessor'
    }).id(`${id_prefix}pigment_mixer`);

    crafting_shaped('tconstruct:smeltery_controller', ['21 '], {
        1: 'tconstruct:queens_slime_nugget',
        2: 'tconstruct:seared_melter'
    }).id(`${id_prefix}smeltery_controller`);
})