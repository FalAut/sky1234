onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/shaped/"
  const { shaped, shapeless } = event

  shapeless("naturesaura:gold_fiber", ["naturesaura:gold_leaf", "#forge:axes"]).damageIngredient("#forge:axes")
  shapeless("naturesaura:token_anger", ["naturesaura:token_joy", Item.of("minecraft:flint_and_steel").ignoreNBT()]).damageIngredient("flint_and_steel")
  shapeless("farmingforblockheads:market", ["naturesaura:animal_generator", "kubejs:undef1ned_fluid_bucket"]).replaceIngredient("kubejs:undef1ned_fluid_bucket", "bucket")
  shapeless("2x kubejs:undef1ned", "kubejs:undef1ned")
  shapeless("4x kubejs:undef1ned", "kubejs:undef1ned_block")
  shapeless("kubejs:undef1ned_fluid_bucket", ["kubejs:undef1ned", "bucket"])
  shapeless("grass_block", ["water_bucket", "dirt"])
  shapeless("black_dye", "#coals")
  shapeless("8x kubejs:nether_eye", ["naturesaura:fortress_finder", "kubejs:ghast_eye", "kubejs:wither_skeleton_eye", "lava_bucket"])
  shapeless("miniutilities:feather_angel_ring", ["naturesaura:pet_reviver", "naturesaura:death_ring"])
  shapeless(Item.of("create:sand_paper", "{Damage:0,Unbreakable:1b}"), ["minecraft:paper", "minecraft:sand"])
  shapeless("architects_palette:oracle_jelly", ["minecraft:chorus_fruit", "minecraft:amethyst_shard", "minecraft:sugar", "minecraft:shulker_shell"])
  shapeless("4x occultism:candle_white", ["torch", "create:refined_radiance"])
  shapeless("minecraft:candle", "occultism:candle_white")
  shapeless("tiab:time_in_a_bottle", ["minecraft:glass_bottle", "naturesaura:clock_hand"])
  shapeless("naturesaura:token_rage", ["naturesaura:token_anger", Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:nether"}')])
  shapeless("occultism:spirit_fire", "create:chromatic_compound")
  shapeless("minecraft:deepslate", ["cobblestone", "black_dye"])
  shapeless("occultism:chalk_purple_impure", ["occultism:chalk_white_impure", "purple_dye"])
  shapeless("64x hostilenetworks:overworld_prediction", "hostilenetworks:empty_prediction")
  shapeless("assemblylinemachines:pure_steel_ingot", ["immersiveengineering:ingot_steel", "assemblylinemachines:pure_iron_ingot"])
  shapeless("minecraft:crimson_nylium", ["minecraft:crimson_fungus", "minecraft:netherrack"])
  shapeless("4x minecraft:magma_cream", "kubejs:congealed_magma_cream")
  shapeless("64x createendertransmission:energy_transmitter", ["kubejs:undef1ned_block", "create:cogwheel"])
  shapeless("immersiveengineering:ore_aluminum", "minecraft:raw_iron")
  shapeless("immersiveengineering:ore_uranium", "minecraft:raw_gold")

  event.replaceInput({ output: "tconstruct:seared_drain" }, "minecraft:copper_ingot", "tconstruct:queens_slime_nugget")
  event.replaceInput({ output: "tconstruct:seared_chute" }, "minecraft:copper_ingot", "tconstruct:queens_slime_nugget")
  event.replaceInput({ output: "occultism:magic_lamp_empty" }, "thermal:silver_ingot", "create:refined_radiance")
  event.replaceInput({ output: "thermal:saw_blade" }, "minecraft:copper_ingot", "iron_ingot")
  event.replaceInput({ output: "fluxnetworks:flux_block" }, "fluxnetworks:flux_core", "fluxnetworks:flux_dust")
  event.replaceInput({ output: "tconstruct:scorched_alloyer" }, "tconstruct:scorched_ingot_gauge", "create:fluid_tank")
  event.replaceInput({ output: "occultism:sacrificial_bowl" }, "occultism:otherstone", "create:shadow_steel")
  event.replaceInput({ output: "thermal:redstone_servo" }, "iron_ingot", "immersiveengineering:stick_iron")
  event.replaceInput({ output: "thermal:rf_coil" }, "gold_ingot", "assemblylinemachines:gold_rod")
  event.replaceInput({ output: "immersiveengineering:hammer" }, "minecraft:string", "minecraft:slime_ball")
  event.replaceInput({ output: "ae2:controller" }, "ae2:smooth_sky_stone_block", "immersiveengineering:sheetmetal_steel")
  event.replaceInput({ output: "botania:gaia_pylon" }, "botania:elementium_ingot", "industrialforegoing:pink_slime_ingot")
  event.replaceInput({ output: "thermal:device_tree_extractor" }, "thermal:redstone_servo", "create:mechanical_pump")
  event.replaceInput({ output: "botania:natura_pylon" }, "botania:terrasteel_nugget", "kubejs:mana_emerald")
  event.replaceInput({ output: "industrialforegoing:laser_drill" }, "industrialforegoing:machine_frame_simple", "industrialforegoing:machine_frame_advanced")
  event.replaceInput({ output: "mekanism:upgrade_speed" }, "#forge:glass", "thermal_extra:dragonsteel_plate")
  event.replaceInput({ output: "mekanism:upgrade_energy" }, "#forge:glass", "thermal_extra:dragonsteel_plate")
  event.replaceInput({ output: "mekanism:upgrade_filter" }, "#forge:glass", "thermal_extra:dragonsteel_plate")
  event.replaceInput({ output: "mekanism:upgrade_muffling" }, "#forge:glass", "thermal_extra:dragonsteel_plate")
  event.replaceInput({ output: "mekanism:upgrade_gas" }, "#forge:glass", "thermal_extra:dragonsteel_plate")
  event.replaceInput({ output: "mekanism:upgrade_anchor" }, "#forge:glass", "thermal_extra:dragonsteel_plate")
  event.replaceInput({ output: "mekanism:upgrade_stone_generator" }, "#forge:glass", "thermal_extra:dragonsteel_plate")
  event.replaceInput({ output: "mekanism:basic_fluid_tank" }, "iron_ingot", "botania:terrasteel_nugget")
  event.replaceInput({ output: "thermal:device_tree_extractor" }, "thermal:iron_gear", "create:cogwheel")
  event.replaceInput({ output: "mekanism:thermal_evaporation_valve" }, "mekanism:advanced_control_circuit", "mekaevolution:absolute_control_circuit")
  event.replaceInput({ output: "mekanism:thermal_evaporation_controller" }, "mekanism:advanced_control_circuit", "mekaevolution:absolute_control_circuit")
  event.replaceInput({ output: "mekanism:structural_glass" }, "immersiveengineering:ingot_steel", "assemblylinemachines:pure_iron_ingot")
  event.replaceInput({ output: "mekanism:pressurized_reaction_chamber" }, "mekanism:alloy_infused", "assemblylinemachines:microprocessor")
  event.replaceInput({ output: "botanypotstiers:ultra_terracotta_botany_pot" }, "minecraft:nether_star", "diamond")
  event.replaceInput({ output: "ae2:cell_component_256k" }, "ae2:sky_dust", "ae2:fluix_dust")
  event.replaceInput({ output: "botanypotstiers:ultra_terracotta_hopper_botany_pot" }, "minecraft:nether_star", "diamond")
  event.replaceInput({ output: "mekanism:sps_casing" }, "mekanism:pellet_plutonium", "mekanism:hdpe_sheet")
  event.replaceInput({ output: "mekanism:sps_port" }, "mekanism:ultimate_control_circuit", "mekaevolution:absolute_control_circuit")
  event.replaceInput({ output: "mekanism:supercharged_coil" }, "mekanism:ultimate_control_circuit", "mekaevolution:absolute_control_circuit")
  event.replaceInput({ output: "mekanism:supercharged_coil" }, "minecraft:copper_ingot", "assemblylinemachines:pure_copper_ingot")
  event.replaceInput({ output: "mekanismgenerators:fission_reactor_port" }, "mekanism:elite_control_circuit", "mekaevolution:absolute_control_circuit")
  event.replaceInput({ output: "#botanypots:all_botany_pots" }, "minecraft:nether_star", "minecraft:diamond")

  // undef1ned Block
  shaped("kubejs:undef1ned_block", ["11", "11"], {
    1: "kubejs:undef1ned",
  }).id(`${id_prefix}undef1ned_block`)

  // undef1ned Pickaxe
  shaped(Item.of("kubejs:undef1ned_pickaxe", "{Unbreakable:1b}"), ["111", " 2 ", " 2 "], {
    1: "kubejs:undef1ned_block",
    2: "kubejs:undef1ned",
  }).id(`${id_prefix}undef1ned_pickaxe`)

  // undef1ned Axe
  shaped(Item.of("kubejs:undef1ned_axe", "{Unbreakable:1b}"), ["11 ", "12 ", " 2 "], {
    1: "kubejs:undef1ned_block",
    2: "kubejs:undef1ned",
  }).id(`${id_prefix}undef1ned_axe`)

  // undef1ned Shovel
  shaped(Item.of("kubejs:undef1ned_shovel", "{Unbreakable:1b}"), [" 1 ", " 2 ", " 2 "], {
    1: "kubejs:undef1ned_block",
    2: "kubejs:undef1ned",
  }).id(`${id_prefix}undef1ned_shovel`)

  // Bucket
  shaped("bucket", ["1 1", " 1 "], {
    1: "kubejs:undef1ned",
  }).id(`${id_prefix}bucket`)

  // Water Bucket
  shaped("water_bucket", ["111", " 2 ", "   "], {
    1: "kubejs:undef1ned",
    2: "bucket",
  }).id(`${id_prefix}water_bucket`)

  // Lava Bucket
  shaped("lava_bucket", ["   ", " 2 ", "111"], {
    1: "kubejs:undef1ned",
    2: "bucket",
  }).id(`${id_prefix}lava_bucket`)

  // Cobblefordays Tier 1
  shaped("cobblefordays:tier_1", ["111", "2 3", "111"], {
    1: "#logs",
    2: "water_bucket",
    3: "lava_bucket",
  }).id(`${id_prefix}cobblefordays_tier_1`)

  // Mechanical Miner
  shaped("miniutilities:mechanical_miner", ["121", "3 3", "111"], {
    1: "iron_ingot",
    2: Item.of("kubejs:undef1ned_pickaxe", "{Damage:0,Unbreakable:1b}"),
    3: "naturesaura:gold_powder",
  }).id(`${id_prefix}mechanical_miner`)

  // Calling Spirit
  shaped("64x naturesaura:calling_spirit", [" 1 ", "232", " 1 "], {
    1: Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}'),
    2: "naturesaura:infused_iron",
    3: "naturesaura:gold_powder",
  }).id(`${id_prefix}calling_spirit`)

  // Storge Controller
  shaped("occultism:storage_controller", ["111", " 2 ", "222"], {
    1: "kubejs:undef1ned",
    2: "kubejs:undef1ned_block",
  }).id(`${id_prefix}storage_controller`)

  // Storge Remote
  shaped("occultism:storage_remote", ["212", "222", "222"], {
    1: "kubejs:undef1ned",
    2: "kubejs:undef1ned_block",
  }).id(`${id_prefix}storage_remote`)

  // Stable Wormhole
  shaped("occultism:stable_wormhole", ["222", "212", "222"], {
    1: "kubejs:undef1ned",
    2: "kubejs:undef1ned_block",
  }).id(`${id_prefix}stable_wormhole`)

  // Megatorch
  shaped("torchmaster:megatorch", ["111", "232", "434"], {
    1: "torch",
    2: "kubejs:undef1ned",
    3: "#logs",
    4: "kubejs:undef1ned_block",
  }).id(`${id_prefix}megatorch`)

  // Gold Leaf
  shaped("8x naturesaura:gold_leaf", ["111", "121", "111"], {
    1: "#leaves",
    2: "kubejs:undef1ned",
  }).id(`${id_prefix}gold_leaf`)

  // Token Euphoria
  shaped("naturesaura:token_euphoria", ["111", "121", "111"], {
    1: "naturesaura:gold_powder",
    2: "naturesaura:token_joy",
  }).id(`${id_prefix}token_euphoria`)

  // Base
  shaped("compactcrafting:base", [" 1 ", "232", "444"], {
    1: "naturesaura:ancient_stick",
    2: "kubejs:infused_coal",
    3: "tconstruct:seared_bricks_slab",
    4: "tconstruct:seared_brick",
  }).id(`${id_prefix}base`)

  // Projector Dish
  shaped("compactcrafting:projector_dish", ["12 ", "132", "12 "], {
    1: "#forge:glass_panes",
    2: "iron_ingot",
    3: "kubejs:infused_coal",
  }).id(`${id_prefix}projector_dish`)

  // Death Ring
  shaped("naturesaura:death_ring", [" 1 ", "2 2", " 2 "], {
    1: "naturesaura:token_euphoria",
    2: "naturesaura:sky_ingot",
  }).id(`naturesaura:death_ring`)

  // Pet Reviver
  shaped("naturesaura:pet_reviver", [" 1 ", "121", " 1 "], {
    1: "naturesaura:sky_ingot",
    2: "naturesaura:token_euphoria",
  }).id(`naturesaura:pet_reviver`)

  // Coke Brick
  shaped("3x immersiveengineering:cokebrick", ["121", "232", "121"], {
    1: "tconstruct:seared_brick",
    2: "architects_palette:algal_blend",
    3: "architects_palette:algal_bricks",
  }).id(`${id_prefix}cokebrick`)

  // Blast Brick
  shaped("3x immersiveengineering:blastbrick", ["121", "232", "121"], {
    1: "tconstruct:scorched_brick",
    2: "architects_palette:nether_brass_ingot",
    3: "tconstruct:scorched_bricks",
  }).id(`${id_prefix}blastbrick`)

  // Blaze In Jar
  shaped("multiblocked:blaze_in_jar", [" 1 ", "232", "222"], {
    1: "minecraft:oak_slab",
    2: "minecraft:glass_pane",
    3: "tconstruct:blaze_head",
  }).id(`${id_prefix}blaze_in_jar`)

  // Stresso Meter
  shaped("create:stressometer", [" 1 ", "234"], {
    1: "compass",
    2: "create:electron_tube",
    3: "create:gearbox",
    4: "create:precision_mechanism",
  }).id(`${id_prefix}stressometer`)

  // Ender Tank
  shaped("enderstorage:ender_tank", ["121", "343", "151"], {
    1: "gold_ingot",
    2: "cobblestone",
    3: "obsidian",
    4: "create:fluid_tank",
    5: "ender_pearl",
  }).id(`${id_prefix}ender_tank`)

  // Ender Chest
  shaped("enderstorage:ender_chest", ["121", "343", "151"], {
    1: "gold_ingot",
    2: "cobblestone",
    3: "obsidian",
    4: "chest",
    5: "ender_pearl",
  }).id(`${id_prefix}ender_chest`)

  // Compressor
  shaped("extendedcrafting:compressor", ["121", "343", "151"], {
    1: "extendedcrafting:black_iron_ingot",
    2: "ae2:singularity",
    3: "extendedcrafting:elite_catalyst",
    4: "extendedcrafting:frame",
    5: "extendedcrafting:elite_component",
  }).id(`${id_prefix}compressor`)

  // Charger
  shaped("ae2:charger", ["121", "3  ", "141"], {
    1: "ae2:quartz_block",
    2: "immersiveengineering:charging_station",
    3: "immersiveengineering:logic_circuit",
    4: "immersiveengineering:capacitor_lv",
  }).id(`${id_prefix}charger`)

  // Inscriber
  shaped("ae2:inscriber", ["121", "3  ", "141"], {
    1: "ae2:quartz_block",
    2: "minecraft:sticky_piston",
    3: "immersiveengineering:logic_circuit",
    4: "immersiveengineering:capacitor_lv",
  }).id(`${id_prefix}inscriber`)

  // Infinity Wand
  shaped("constructionwand:infinity_wand", ["  1", " 2 ", "2  "], {
    1: "kubejs:undef1ned",
    2: "naturesaura:ancient_stick",
  }).id(`${id_prefix}infinity_wand`)

  // Animal Generator
  shaped("naturesaura:animal_generator", ["121", "3 3", "141"], {
    1: "minecraft:nether_brick",
    2: "naturesaura:infused_iron",
    3: "minecraft:iron_bars",
    4: Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:nether"}'),
  }).id(`${id_prefix}animal_generator`)

  // Flux Core
  shaped("4x fluxnetworks:flux_core", ["121", "232", "121"], {
    1: "fluxnetworks:flux_dust",
    2: "fluxnetworks:flux_block",
    3: "redstone_block",
  }).id(`${id_prefix}flux_core`)

  // Mana Liqiudizer
  shaped("manaliquidizer:mana_liquidizer", ["121", "2 2", "121"], {
    1: "botania:livingrock",
    2: "occultism:iesnium_ingot",
  }).id(`${id_prefix}mana_liquidizer`)

  // Machine Frame Pity
  shaped("industrialforegoing:machine_frame_pity", ["121", "2 2", "121"], {
    1: "botania:livingrock",
    2: "botania:livingwood",
  }).id(`${id_prefix}machine_frame_pity`)

  // Fluid_extractor
  shaped("industrialforegoing:fluid_extractor", ["151", "424", "131"], {
    1: "create:refined_radiance",
    2: "industrialforegoing:machine_frame_pity",
    3: "thermal:device_tree_extractor",
    4: "thermal:redstone_servo",
    5: "thermal:rf_coil",
  }).id(`${id_prefix}fluid_extractor`)

  // Latex Processing Unit
  shaped("industrialforegoing:latex_processing_unit", ["151", "424", "131"], {
    1: "create:refined_radiance",
    2: "industrialforegoing:machine_frame_pity",
    3: "thermal:machine_centrifuge",
    4: "thermal:redstone_servo",
    5: "thermal:rf_coil",
  }).id(`${id_prefix}latex_processing_unit`)

  // Condenser
  shaped("ae2:condenser", ["121", "232", "121"], {
    1: "ae2:certus_quartz_crystal",
    2: "ae2:quartz_glass",
    3: "ae2:fluix_pearl",
  }).id(`${id_prefix}condenser`)

  // Alloy Brick
  shaped("immersiveengineering:alloybrick", ["12", "21"], {
    1: "architects_palette:nether_brass_blend",
    2: "architects_palette:nether_brass_ingot",
  }).id(`${id_prefix}alloybrick`)

  // Nether Prediction
  shaped("hostilenetworks:nether_prediction", ["11", "11"], {
    1: "hostilenetworks:overworld_prediction",
  }).id(`${id_prefix}nether_prediction`)

  // End Prediction
  shaped("hostilenetworks:end_prediction", ["11", "11"], {
    1: "hostilenetworks:nether_prediction",
  }).id(`${id_prefix}end_prediction`)

  // Pinkinator
  shaped("botania:pinkinator", ["12 ", "233", " 33"], {
    1: "botania:dragonstone",
    2: "botania:pixie_dust",
    3: "botania:elementium_ingot",
  }).id(`${id_prefix}pinkinator`)

  // Pinkinator
  shaped("industrialforegoing:dissolution_chamber", ["121", "343", "151"], {
    1: "industrialforegoing:plastic",
    2: "create:precision_mechanism",
    3: "minecraft:bucket",
    4: "industrialforegoing:machine_frame_simple",
    5: "thermal:machine_smelter",
  }).id(`${id_prefix}dissolution_chamber`)

  // Gaia Ingot
  shaped("botania:gaia_ingot", ["111", "121", "111"], {
    1: "botania:life_essence",
    2: "industrialforegoing:pink_slime_ingot",
  }).id(`${id_prefix}gaia_ingo`)

  // Stress Generator Core
  shaped("multiblocked:stress_generator_core", ["111", "121", "111"], {
    1: "minecraft:glowstone",
    2: "kubejs:undef1ned",
  }).id(`${id_prefix}stress_generator_core`)

  // RF Coil Mold
  shaped("kubejs:mold_rf_coil", ["11 ", "11 ", "  2"], {
    1: "extendedcrafting:black_iron_slate",
    2: Ingredient.of("immersiveengineering:wirecutter").ignoreNBT(),
  }).id(`${id_prefix}mold_rf_coil`)

  // Redstone Servo Mold
  shaped("kubejs:mold_redstone_servo", ["2  ", " 11", " 11"], {
    1: "extendedcrafting:black_iron_slate",
    2: Ingredient.of("immersiveengineering:wirecutter").ignoreNBT(),
  }).id(`${id_prefix}mold_redstone_servo`)

  // Machine Furnace
  shaped("thermal:machine_furnace", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:copper_gear",
    5: "thermal:rf_coil",
    6: "furnace",
  }).id(`${id_prefix}machine_furnace`)

  // Machine Sawmill
  shaped("thermal:machine_sawmill", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:copper_gear",
    5: "thermal:rf_coil",
    6: "thermal:saw_blade",
  }).id(`${id_prefix}machine_sawmill`)

  // Machine Pulverizer
  shaped("thermal:machine_pulverizer", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:copper_gear",
    5: "thermal:rf_coil",
    6: "create:millstone",
  }).id(`${id_prefix}machine_pulverizer`)

  // Machine Smelter
  shaped("thermal:machine_smelter", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:invar_gear",
    5: "thermal:rf_coil",
    6: "minecraft:blast_furnace",
  }).id(`${id_prefix}machine_smelter`)

  // Machine Insolator
  shaped("thermal:machine_insolator", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:lumium_gear",
    5: "thermal:rf_coil",
    6: "bucket",
  }).id(`${id_prefix}machine_insolator`)

  // Machine Centrifuge
  shaped("thermal:machine_centrifuge", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:constantan_gear",
    5: "thermal:rf_coil",
    6: "create:mechanical_mixer",
  }).id(`${id_prefix}machine_centrifuge`)

  // Machine Press
  shaped("thermal:machine_press", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:constantan_gear",
    5: "thermal:rf_coil",
    6: "create:mechanical_press",
  }).id(`${id_prefix}machine_press`)

  // Machine Crucible
  shaped("thermal:machine_crucible", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:invar_gear",
    5: "thermal:rf_coil",
    6: "create:blaze_burner",
  }).id(`${id_prefix}machine_crucible`)

  // Machine Chiller
  shaped("thermal:machine_chiller", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:invar_gear",
    5: "thermal:rf_coil",
    6: "water_bucket",
  }).id(`${id_prefix}machine_chiller`)

  // Machine Refinery
  shaped("thermal:machine_refinery", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:invar_gear",
    5: "thermal:rf_coil",
    6: "create:whisk",
  }).id(`${id_prefix}machine_refinery`)

  // Machine Pyrolyzer
  shaped("thermal:machine_pyrolyzer", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:constantan_gear",
    5: "thermal:rf_coil",
    6: "lava_bucket",
  }).id(`${id_prefix}machine_pyrolyzer`)

  // Machine Bottler
  shaped("thermal:machine_bottler", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:copper_gear",
    5: "thermal:rf_coil",
    6: "create:spout",
  }).id(`${id_prefix}machine_bottler`)

  // Machine Brewer
  shaped("thermal:machine_brewer", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:lumium_gear",
    5: "thermal:rf_coil",
    6: "minecraft:brewing_stand",
  }).id(`${id_prefix}machine_brewer`)

  // Machine Crystallizer
  shaped("thermal:machine_crystallizer", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:lumium_gear",
    5: "thermal:rf_coil",
    6: "thermal:obsidian_glass",
  }).id(`${id_prefix}machine_crystallizer`)

  // Machine Crafter
  shaped("thermal:machine_crafter", ["161", "232", "454"], {
    1: "immersiveengineering:logic_circuit",
    2: "thermal:redstone_servo",
    3: "thermal:machine_frame",
    4: "thermal:lumium_gear",
    5: "thermal:rf_coil",
    6: "minecraft:crafting_table",
  }).id(`${id_prefix}machine_cafter`)

  // Combiner
  shaped("mekanism:combiner", ["141", "232", "151"], {
    1: "immersiveengineering:plate_steel",
    2: "immersiveengineering:logic_circuit",
    3: "botania:crafting_halo",
    4: "assemblylinemachines:microprocessor",
    5: "mekanism:steel_casing",
  }).id(`${id_prefix}combiner`)

  // Metallurgic Infuser
  shaped("mekanism:metallurgic_infuser", ["141", "232", "151"], {
    1: "immersiveengineering:plate_steel",
    2: "mekanism:basic_control_circuit",
    3: "create:spout",
    4: "assemblylinemachines:microprocessor",
    5: "mekanism:steel_casing",
  }).id(`${id_prefix}metallurgic_infuser`)

  // Electrolytic Sparator
  shaped("mekanism:electrolytic_separator", ["141", "232", "151"], {
    1: "mekanism:alloy_atomic",
    2: "mekanism:ultimate_control_circuit",
    3: "mekanism:electrolytic_core",
    4: "assemblylinemachines:microprocessor",
    5: "mekanism:steel_casing",
  }).id(`${id_prefix}electrolytic_separator`)

  // Loot Fabricator
  shaped("hostilenetworks:loot_fabricator", [" 1 ", "232", "454"], {
    1: "hostilenetworks:empty_prediction",
    2: "thermal:electrum_plate",
    3: "create:shadow_steel_casing",
    4: "thermal:redstone_servo",
    5: "thermal:rf_coil",
  }).id(`${id_prefix}loot_fabricator`)

  // chemical_infuser
  shaped("mekanism:chemical_infuser", ["151", "343", "121"], {
    1: "mekanism:alloy_atomic",
    2: "mekanism:ultimate_control_circuit",
    3: "mekanism:basic_chemical_tank",
    4: "mekanism:steel_casing",
    5: "assemblylinemachines:microprocessor",
  }).id(`${id_prefix}chemical_infuser`)

  // Speed Upgrade
  shaped("miniutilities:speed_upgrade", ["111", "111"], {
    1: "naturesaura:gold_powder",
  }).id(`${id_prefix}speed_upgrade`)

  // rotary_condensentrator
  shaped("mekanism:rotary_condensentrator", ["161", "345", "121"], {
    1: "mekanism:alloy_atomic",
    2: "mekanism:ultimate_control_circuit",
    3: "mekanism:basic_chemical_tank",
    4: "mekanism:energy_tablet",
    5: "mekanism:basic_fluid_tank",
    6: "assemblylinemachines:microprocessor",
  }).id(`${id_prefix}rotary_condensentrator`)

  shaped("mekanism:osmium_compressor", ["121", "343", "151"], {
    1: "mekanism:alloy_atomic",
    2: "assemblylinemachines:microprocessor",
    3: "bucket",
    4: "mekanism:steel_casing",
    5: "mekanism:ultimate_control_circuit",
  }).id(`${id_prefix}osmium_compressor`)

  shaped("mekanism:chemical_dissolution_chamber", ["121", "343", "151"], {
    1: "mekanism:ingot_refined_obsidian",
    2: "assemblylinemachines:microprocessor",
    3: "mekanism:basic_chemical_tank",
    4: "mekanism:steel_casing",
    5: "mekanism:ultimate_control_circuit",
  }).id(`${id_prefix}chemical_dissolution_chamber`)

  shaped("mekanism:chemical_washer", ["121", "354", "161"], {
    1: "mekanism:ingot_refined_obsidian",
    2: "assemblylinemachines:microprocessor",
    3: "mekanism:basic_chemical_tank",
    4: "mekanism:basic_fluid_tank",
    5: "mekanism:steel_casing",
    6: "mekanism:ultimate_control_circuit",
  }).id(`${id_prefix}chemical_washer`)

  shaped("mekanism:chemical_crystallizer", ["121", "343", "151"], {
    1: "mekanism:ingot_refined_obsidian",
    2: "assemblylinemachines:microprocessor",
    3: "mekanism:ultimate_control_circuit",
    4: "mekanism:steel_casing",
    5: "thermal:machine_crystallizer",
  }).id(`${id_prefix}chemical_crystallizer`)

  shaped("mekanism:energized_smelter", ["121", "343", "151"], {
    1: "immersiveengineering:plate_steel",
    2: "assemblylinemachines:microprocessor",
    3: "mekanism:basic_control_circuit",
    4: "mekanism:steel_casing",
    5: "furnace",
  }).id(`${id_prefix}energized_smelter`)

  shaped("mekanism:crusher", ["121", "343", "151"], {
    1: "immersiveengineering:plate_steel",
    2: "assemblylinemachines:microprocessor",
    3: "mekanism:basic_control_circuit",
    4: "mekanism:steel_casing",
    5: "create:iron_sheet",
  }).id(`${id_prefix}mekcrusher`)

  shaped("mekanism:enrichment_chamber", ["121", "343", "151"], {
    1: "immersiveengineering:plate_steel",
    2: "assemblylinemachines:microprocessor",
    3: "mekanism:basic_control_circuit",
    4: "mekanism:steel_casing",
    5: "ae2:quartz_growth_accelerator",
  }).id(`${id_prefix}enrichment_chamber`)

  shaped("multiblocked:terrestrial_agglomeration_plate_io", ["111", "121", "111"], {
    1: "botania:rune_mana",
    2: "chest",
  }).id(`${id_prefix}terrestrial_agglomeration_plate_io`)

  shaped("multiblocked:pedestal", ["222", " 1 ", "222"], {
    1: "kubejs:undef1ned",
    2: "kubejs:undef1ned_block",
  }).id(`${id_prefix}mbdpedestal`)

  shaped("assemblylinemachines:overclocked_conduction_component", ["121", "232", "121"], {
    1: "assemblylinemachines:empowered_conduction_component",
    2: "mekanism:alloy_atomic",
    3: "assemblylinemachines:energized_gold_block",
  }).id(`${id_prefix}overclocked_conduction_component`)

  shaped("assemblylinemachines:overclocked_convection_component", ["121", "232", "121"], {
    1: "assemblylinemachines:empowered_convection_component",
    2: "mekanism:alloy_atomic",
    3: "assemblylinemachines:energized_gold_block",
  }).id(`${id_prefix}overclocked_convection_component`)

  shaped("assemblylinemachines:conduction_component", ["121", "232", "121"], {
    1: "assemblylinemachines:pure_iron_plate",
    2: "redstone",
    3: "kubejs:pure_iron_block",
  }).id(`${id_prefix}conduction_component`)

  shaped("assemblylinemachines:convection_component", ["121", "232", "121"], {
    1: "assemblylinemachines:attuned_titanium_plate",
    2: "redstone",
    3: "assemblylinemachines:attuned_titanium_block",
  }).id(`${id_prefix}convection_component`)

  shaped("mekaevolution:absolute_control_circuit", ["123"], {
    1: "assemblylinemachines:overclocked_conduction_component",
    2: "mekanism:ultimate_control_circuit",
    3: "assemblylinemachines:overclocked_convection_component",
  }).id(`${id_prefix}absolute_control_circuit`)

  shaped("mekanism:thermal_evaporation_block", ["11 ", "11 "], {
    1: "assemblylinemachines:pure_copper_ingot",
  }).id(`${id_prefix}thermal_evaporation_block`)

  shaped("mekanism:solar_neutron_activator", ["111", "252", "434"], {
    1: "mekanismgenerators:solar_panel",
    2: "mekanism:alloy_atomic",
    3: "mekanism:steel_casing",
    4: "mekaevolution:absolute_control_circuit",
    5: "assemblylinemachines:microprocessor",
  }).id(`${id_prefix}solar_neutron_activator`)

  shaped("tconstruct:earth_slime_crystal", ["111", "121", "111"], {
    1: "minecraft:slime_ball",
    2: "minecraft:amethyst_shard",
  }).id(`${id_prefix}earth_slime_crystal`)

  shaped("tconstruct:sky_slime_crystal", ["111", "121", "111"], {
    1: "tconstruct:sky_slime_ball",
    2: "minecraft:amethyst_shard",
  }).id(`${id_prefix}sky_slime_crystal`)

  shaped("tconstruct:ender_slime_crystal", ["111", "121", "111"], {
    1: "tconstruct:ender_slime_ball",
    2: "minecraft:amethyst_shard",
  }).id(`${id_prefix}ender_slime_crystal`)

  shaped("tconstruct:ichor_slime_crystal", ["111", "121", "111"], {
    1: "tconstruct:ichor_slime_ball",
    2: "minecraft:amethyst_shard",
  }).id(`${id_prefix}ichorslime_crystal`)

  shaped("miniutilities:flame_lily_seeds", ["111", "121", "111"], {
    1: "minecraft:blaze_powder",
    2: "#forge:seeds",
  }).id(`${id_prefix}flame_lily_seeds`)

  shaped("minecraft:enchanted_golden_apple", ["111", "121", "111"], {
    1: "gold_block",
    2: "apple",
  }).id(`${id_prefix}enchanted_golden_apple`)

  shaped("assemblylinemachines:reality_crystal", ["123", "456", "789"], {
    1: "ae2:fluix_crystal",
    2: "minecraft:amethyst_shard",
    3: "ae2:certus_quartz_crystal",
    4: "tconstruct:earth_slime_crystal",
    5: Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:antimatter"}'),
    6: "tconstruct:sky_slime_crystal",
    7: "tconstruct:ender_slime_crystal",
    8: "spirit:soul_crystal",
    9: "tconstruct:ichor_slime_crystal",
  }).id(`${id_prefix}reality_crystal`)

  shaped("assemblylinemachines:miniature_black_hole", ["123", "456", "789"], {
    1: Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:diamond"}'),
    2: Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:copper"}'),
    3: Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:emerald"}'),
    4: Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:coal"}'),
    5: Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:antimatter"}'),
    6: Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:redstone"}'),
    7: Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:iron"}'),
    8: Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:lapis_lazuli"}'),
    9: Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:gold"}'),
  }).id(`${id_prefix}miniature_black_hole`)

  shaped("mekaevolution:cosmic_control_circuit", ["123"], {
    1: "assemblylinemachines:reality_crystal",
    2: "mekaevolution:absolute_control_circuit",
    3: "assemblylinemachines:miniature_black_hole",
  }).id(`${id_prefix}cosmic_control_circuit`)

  shaped("assemblylinemachines:energy_harness", ["121", "343", "121"], {
    1: "mekanism:hdpe_sheet",
    2: "assemblylinemachines:energized_gold_plate",
    3: "assemblylinemachines:attuned_titanium_plate",
    4: "mekaevolution:cosmic_control_circuit",
  }).id(`${id_prefix}energy_harness`)

  shaped("assemblylinemachines:entropy_reactor_core", ["121", "232", "121"], {
    1: "assemblylinemachines:energy_harness",
    2: "assemblylinemachines:entropy_reactor_block",
    3: "assemblylinemachines:miniature_black_hole",
  }).id(`${id_prefix}entropy_reactor_core`)

  shaped("assemblylinemachines:entropy_reactor_block", ["121", "2 2", "121"], {
    1: "assemblylinemachines:attuned_titanium_plate",
    2: "mekanism:steel_casing",
  }).id(`${id_prefix}entropy_reactor_block`)

  shaped("assemblylinemachines:entropy_reactor_upgrade_capacity", [" 1 ", "121", " 1 "], {
    1: "mekanism:hdpe_sheet",
    2: "ae2:singularity",
  }).id(`${id_prefix}entropy_reactor_upgrade_capacity`)

  shaped("assemblylinemachines:entropy_reactor_upgrade_cycle_delayer", [" 1 ", "121", " 1 "], {
    1: "mekanism:hdpe_sheet",
    2: "clock",
  }).id(`${id_prefix}entropy_reactor_upgrade_cycle_delayer`)

  shaped("assemblylinemachines:entropy_reactor_upgrade_variety", [" 1 ", "121", " 1 "], {
    1: "mekanism:hdpe_sheet",
    2: "mekanism:pellet_antimatter",
  }).id(`${id_prefix}entropy_reactor_upgrade_variety`)

  shaped("assemblylinemachines:entropy_reactor_upgrade_entropic_harnesser", ["111", "121", "111"], {
    1: "kubejs:undef1ned",
    2: "assemblylinemachines:reality_crystal",
  }).id(`${id_prefix}entropy_reactor_upgrade_entropic_harnesser`)

  shaped("extendedexchange:fading_matter", ["111", "121", "111"], {
    1: Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:antimatter"}'),
    2: "assemblylinemachines:semi_dense_neutron_matter",
  }).id(`${id_prefix}fading_matter1`)

  shaped("5x extendedexchange:fading_matter", ["111", "121", "111"], {
    1: Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:antimatter"}'),
    2: "assemblylinemachines:quark_matter",
  }).id(`${id_prefix}fading_matter2`)

  shaped("10x extendedexchange:fading_matter", ["111", "121", "111"], {
    1: Item.of("extendedcrafting:singularity", '{Id:"extendedcrafting:antimatter"}'),
    2: "assemblylinemachines:strange_matter",
  }).id(`${id_prefix}fading_matter3`)

  shaped("assemblylinemachines:electrified_netherite_blend", ["121", "232", "121"], {
    1: "thermal:netherite_dust",
    2: "assemblylinemachines:energized_gold_ingot",
    3: "assemblylinemachines:chaotic_fertilizer",
  }).id(`${id_prefix}electrified_netherite_blend`)

  shaped("assemblylinemachines:nova_blend", ["121", "434", "121"], {
    1: "assemblylinemachines:prismatic_dust",
    2: "minecraft:redstone",
    3: "minecraft:nether_star",
    4: "thermal:lapis_dust",
  }).id(`${id_prefix}nova_blend`)

  shaped("assemblylinemachines:mystium_blend", ["121", "232", "121"], {
    1: "assemblylinemachines:electrified_netherite_blend",
    2: "mekanism:pellet_antimatter",
    3: "assemblylinemachines:corrupted_shard",
  }).id(`${id_prefix}mystium_blend`)

  shaped("mekaevolution:infinite_control_circuit", ["111", "132", "222"], {
    1: "assemblylinemachines:novasteel_ingot",
    2: "assemblylinemachines:mystium_ingot",
    3: "mekaevolution:cosmic_control_circuit",
  }).id(`${id_prefix}infinite_control_circuit`)

  // painting_machine
  shaped("mekanism:painting_machine", ["161", "343", "121"], {
    1: "mekanism:alloy_atomic",
    2: "mekaevolution:infinite_control_circuit",
    3: "mekanism:dye_base",
    4: "mekanism:steel_casing",
    6: "assemblylinemachines:microprocessor",
  }).id(`${id_prefix}painting_machine`)

  // 'mekanism:pigment_extractor'
  shaped("mekanism:pigment_extractor", ["161", "343", "121"], {
    1: "mekanism:alloy_atomic",
    2: "mekaevolution:infinite_control_circuit",
    3: "thermal:device_tree_extractor",
    4: "mekanism:steel_casing",
    6: "assemblylinemachines:microprocessor",
  }).id(`${id_prefix}pigment_extractor`)

  // pigment_mixer
  shaped("mekanism:pigment_mixer", ["161", "343", "121"], {
    1: "mekanism:alloy_atomic",
    2: "mekaevolution:infinite_control_circuit",
    3: "mekanism:hdpe_rod",
    4: "mekanism:steel_casing",
    6: "assemblylinemachines:microprocessor",
  }).id(`${id_prefix}pigment_mixer`)

  shaped("tconstruct:smeltery_controller", ["21 "], {
    1: "tconstruct:queens_slime_nugget",
    2: "tconstruct:seared_melter",
  }).id(`${id_prefix}smeltery_controller`)

  shaped("create:sail_frame", ["12 ", "21 "], {
    1: "create:andesite_alloy",
    2: "stick",
  }).id(`${id_prefix}sail_frame`)

  shaped("kubejs:spirit_attuned_gem_block", ["111", "111", "111"], {
    1: "occultism:spirit_attuned_gem",
  }).id(`${id_prefix}spirit_attuned_gem_block`)

  shaped("kubejs:fluix_pearl_block", ["111", "111", "111"], {
    1: "ae2:fluix_pearl",
  }).id(`${id_prefix}fluix_pearl_block`)

  shaped("kubejs:mana_pearl_block", ["111", "111", "111"], {
    1: "botania:mana_pearl",
  }).id(`${id_prefix}mana_pearl_block`)

  shaped("kubejs:pure_iron_block", ["111", "111", "111"], {
    1: "assemblylinemachines:pure_iron_ingot",
  }).id(`${id_prefix}pure_iron_block`)

  shaped("assemblylinemachines:internal_water_generator", ["121", "131", "121"], {
    1: "assemblylinemachines:pure_copper_plate",
    2: "assemblylinemachines:pure_copper_gear",
    3: Item.of("mekanism:ultimate_fluid_tank", '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:256000,FluidName:"minecraft:water"}}]}}').weakNBT(),
  }).id(`${id_prefix}internal_water_generator`)

  shaped("thermal:rf_coil_creative_augment", ["123"], {
    1: "thermal_extra:rf_coil_xfer_augment_5",
    2: "assemblylinemachines:creative_upgrade_kit",
    3: "thermal_extra:rf_coil_storage_augment_5",
  }).id(`${id_prefix}rf_coil_creative_augment`)

  shaped("thermal:machine_efficiency_creative_augment", ["123"], {
    1: "thermal_extra:machine_speed_augment_4",
    2: "assemblylinemachines:creative_upgrade_kit",
    3: "thermal_extra:machine_efficiency_augment_4",
  }).id(`${id_prefix}machine_efficiency_creative_augment`)

  shaped("thermal:fluid_tank_creative_augment", ["12 "], {
    1: "assemblylinemachines:creative_upgrade_kit",
    2: "thermal_extra:fluid_tank_augment_6",
  }).id(`${id_prefix}fluid_tank_creative_augment`)

  shaped("thermal:machine_catalyst_creative_augment", ["12 "], {
    1: "assemblylinemachines:creative_upgrade_kit",
    2: "thermal_extra:machine_catalyst_augment_3",
  }).id(`${id_prefix}machine_catalyst_creative_augment`)

  shaped("projecte:alchemical_coal", ["11 ", "11 "], {
    1: "coal",
  }).id(`${id_prefix}alchemical_coal`)

  shaped("projecte:mobius_fuel", ["11 ", "11 "], {
    1: "projecte:alchemical_coal",
  }).id(`${id_prefix}mobius_fuel`)

  shaped("projecte:aeternalis_fuel", ["11 ", "11 "], {
    1: "projecte:mobius_fuel",
  }).id(`${id_prefix}aeternalis_fuel`)

  shaped("8x ae2:sky_stone_block", ["111", "121", "111"], {
    1: "stone",
    2: "kubejs:undef1ned",
  }).id(`${id_prefix}sky_stone_block`)

  shaped("kubejs:congealed_magma_cream", ["11 ", "11 "], {
    1: "minecraft:magma_cream",
  }).id(`${id_prefix}congealed_magma_cream`)
})
