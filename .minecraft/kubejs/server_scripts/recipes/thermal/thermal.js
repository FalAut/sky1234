onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/thermal/";
  const {
    pyrolyzer,
    crystallizer,
    furnace,
    sawmill,
    pulverizer,
    smelter,
    centrifuge,
    chiller,
    refinery,
    brewer,
    bottler,
    press,
    crucible,
    insolator,
    pulverizer_catalyst,
    smelter_catalyst,
    insolator_catalyst,
  } = event.recipes.thermal;

  bottler("thermal:lumium_ingot", ["thermal:electrum_ingot", Fluid.of("thermal:glowstone", 500)]).id(`${id_prefix}lumium_ingot`);

  bottler("thermal:signalum_ingot", ["thermal:bronze_ingot", Fluid.of("thermal:redstone", 400)]).id(`${id_prefix}signalum_ingot`);

  bottler("thermal:enderium_ingot", ["ender_pearl", Fluid.of("thermal:ender", 500)]).id(`${id_prefix}enderium_ingot`);

  crystallizer("minecraft:amethyst_shard", ["chorus_fruit", Fluid.of("tconstruct:molten_diamond", 100)]).id(`${id_prefix}amethyst_shard`);

  smelter("thermal_extra:twinite_ingot", ["thermal:lumium_ingot", "thermal:signalum_ingot"]).id(`${id_prefix}twinite_ingot`);

  smelter("thermal_extra:soul_infused_ingot", ["thermal_extra:sticky_ball", "spirit:soul_steel_ingot"]).id(
    `${id_prefix}soul_infused_ingot`
  );

  smelter("thermal_extra:shellite_ingot", ["architects_palette:oracle_jelly", "thermal:enderium_ingot"]).id(`${id_prefix}shellite_ingot`);

  smelter("create:chromatic_compound", [
    "thermal_extra:twinite_ingot",
    "thermal_extra:soul_infused_ingot",
    "thermal_extra:shellite_ingot",
  ]).id(`${id_prefix}chromatic_compound`);

  pyrolyzer([Fluid.of("immersiveengineering:creosote", 100), "immersiveengineering:coal_coke"], "coal").id(`${id_prefix}coal_coke`);

  pyrolyzer([Fluid.of("immersiveengineering:creosote", 900), "thermal:coal_coke_block"], "coal_block").id(`${id_prefix}coal_coke_block`);

  pyrolyzer([Fluid.of("immersiveengineering:creosote", 125), "minecraft:charcoal"], "#minecraft:logs").id(`${id_prefix}logstocreosote`);

  smelter("9x occultism:iesnium_ingot", ["#forge:raw_materials", "create:refined_radiance"]).id(`${id_prefix}iesnium_ingot`);

  smelter("immersiveengineering:ingot_steel", ["iron_ingot", "immersiveengineering:coal_coke"]).id(`${id_prefix}ingot_steel`);

  smelter("thermal:machine_frame", ["4x minecraft:quartz_block", "4x thermal:obsidian_glass"]).id(`${id_prefix}machine_frame`);

  smelter("industrialforegoing:machine_frame_simple", [
    "industrialforegoing:machine_frame_pity",
    "4x industrialforegoing:plastic",
    "2x create:shadow_steel",
  ]).id(`${id_prefix}machine_frame_simple`);

  smelter("immersiveengineering:circuit_board", ["immersiveengineering:plate_duroplast", "immersiveengineering:insulating_glass"]).id(
    `${id_prefix}circuit_board`
  );

  press(
    Item.of(
      "kubejs:incomplete_rf_coil",
      '{SequencedAssembly:{Progress:0.2f,Step:1,id:"kubejs:recipes/create/sequenced_assembly/rf_coil_thermal"}}'
    ),
    ["gold_ingot", "kubejs:mold_rf_coil"]
  ).id(`${id_prefix}incomplete_rf_coil`);

  press(
    Item.of(
      "kubejs:incomplete_redstone_servo",
      '{SequencedAssembly:{Progress:0.2f,Step:1,id:"kubejs:recipes/create/sequenced_assembly/redstone_servo_thermal"}}'
    ),
    ["iron_ingot", "kubejs:mold_redstone_servo"]
  ).id(`${id_prefix}incomplete_redstone_servo`);

  bottler("extendedcrafting:redstone_ingot", ["iron_ingot", Fluid.of("thermal:redstone", 100)]).id(`${id_prefix}redstone_ingot`);

  smelter("16x pipez:item_pipe", ["minecraft:dropper", "4x thermal:cured_rubber"]).id(`${id_prefix}item_pipe`);

  smelter("16x pipez:fluid_pipe", ["bucket", "4x thermal:cured_rubber"]).id(`${id_prefix}fluid_pipe`);

  smelter("16x pipez:energy_pipe", ["immersiveengineering:wirecoil_copper", "4x thermal:cured_rubber"]).id(`${id_prefix}energy_pipe`);

  press("thermal:diamond_gear", ["4x diamond", "thermal:press_gear_die"]).id(`${id_prefix}diamond_gear`);

  crucible(Fluid.of("tconstruct:molten_diamond", 100), "diamond").id(`${id_prefix}molten_diamond`);

  crucible(Fluid.of("assemblylinemachines:dark_energy", 1000), "extendedexchange:fading_matter").id(`${id_prefix}dark_energy`);

  press("assemblylinemachines:pure_copper_plate", "assemblylinemachines:pure_copper_ingot").id(`${id_prefix}pure_copper_plate`);

  press("assemblylinemachines:pure_gold_plate", "assemblylinemachines:pure_gold_ingot").id(`${id_prefix}pure_gold_plate`);

  press("assemblylinemachines:pure_iron_plate", "assemblylinemachines:pure_iron_ingot").id(`${id_prefix}pure_iron_plate`);

  press("assemblylinemachines:pure_steel_plate", "assemblylinemachines:pure_steel_ingot").id(`${id_prefix}pure_steel_plate`);

  press("assemblylinemachines:pure_titanium_plate", "assemblylinemachines:pure_titanium_ingot").id(`${id_prefix}pure_titanium_plate`);

  press("assemblylinemachines:energized_gold_plate", "assemblylinemachines:energized_gold_ingot").id(`${id_prefix}energized_gold_plate`);

  press("assemblylinemachines:attuned_titanium_plate", "assemblylinemachines:attuned_titanium_ingot").id(
    `${id_prefix}attuned_titanium_plate`
  );

  press("assemblylinemachines:novasteel_plate", "assemblylinemachines:novasteel_ingot").id(`${id_prefix}novasteel_plate`);

  press("assemblylinemachines:mystium_plate", "assemblylinemachines:mystium_ingot").id(`${id_prefix}mystium_plate`);

  press("assemblylinemachines:pure_copper_gear", "assemblylinemachines:pure_copper_ingot").id(`${id_prefix}pure_copper_gear`);

  press("assemblylinemachines:pure_gold_gear", "assemblylinemachines:pure_gold_ingot").id(`${id_prefix}pure_gold_gear`);

  press("assemblylinemachines:pure_iron_gear", "assemblylinemachines:pure_iron_ingot").id(`${id_prefix}pure_iron_gear`);

  press("assemblylinemachines:pure_steel_gear", "assemblylinemachines:pure_steel_ingot").id(`${id_prefix}pure_steel_gear`);

  press("assemblylinemachines:pure_titanium_gear", "assemblylinemachines:pure_titanium_ingot").id(`${id_prefix}pure_titanium_gear`);

  press("assemblylinemachines:novasteel_gear", "assemblylinemachines:novasteel_ingot").id(`${id_prefix}novasteel_gear`);

  press("assemblylinemachines:mystium_gear", "assemblylinemachines:mystium_ingot").id(`${id_prefix}mystium_gear`);

  crystallizer("ae2:fluix_crystal", ["ae2:fluix_crystal_seed", Fluid.water()]);
});
