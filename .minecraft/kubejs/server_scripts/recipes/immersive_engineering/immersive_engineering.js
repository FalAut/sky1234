onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/immersive_engineering/";
  const {
    immersiveengineeringAlloy,
    immersiveengineeringBlastFurnace,
    immersiveengineeringBlastFurnaceFuel,
    immersiveengineeringCokeOven,
    immersiveengineeringCloche,
    immersiveengineeringFertilizer,
    immersiveengineeringMetalPress,
    immersiveengineeringArcFurnace,
    immersiveengineeringCrusher,
    immersiveengineeringSawmill,
  } = event.recipes;

  immersiveengineeringCokeOven("immersiveengineering:coal_coke", "coal").creosote(100).time(20).id(`${id_prefix}coal_coke`);
  immersiveengineeringCokeOven("thermal:coal_coke_block", "coal_block").creosote(900).time(180).id(`${id_prefix}coal_coke_block`);
  immersiveengineeringBlastFurnace("immersiveengineering:ingot_steel", "kubejs:ferro_coke_blend", "immersiveengineering:slag")
    .time(20)
    .id(`${id_prefix}ingot_steel`);
  immersiveengineeringArcFurnace("2x thermal:obsidian_glass", "ae2:quartz_glass", ["minecraft:obsidian", "minecraft:quartz"]).id(
    `${id_prefix}obsidian_glass`
  );
  immersiveengineeringArcFurnace("4x pipez:item_pipe", "minecraft:dropper", ["2x thermal:cured_rubber"]).id(`${id_prefix}item_pipe`);
  immersiveengineeringArcFurnace("4x pipez:fluid_pipe", "minecraft:bucket", ["2x thermal:cured_rubber"]).id(`${id_prefix}fluid_pipe`);
  immersiveengineeringArcFurnace("4x pipez:energy_pipe", "immersiveengineering:wirecoil_copper", ["2x thermal:cured_rubber"]).id(
    `${id_prefix}energy_pipe`
  );
  immersiveengineeringMetalPress(
    Item.of(
      "kubejs:incomplete_rf_coil",
      '{SequencedAssembly:{Progress:0.125f,Step:1,id:"kubejs:recipes/create/sequenced_assembly/rf_coil"}}'
    ),
    "minecraft:gold_ingot",
    "kubejs:mold_rf_coil"
  ).id(`${id_prefix}incomplete_rf_coil1`);
  immersiveengineeringMetalPress(
    Item.of(
      "kubejs:incomplete_rf_coil",
      '{SequencedAssembly:{Progress:0.375f,Step:3,id:"kubejs:recipes/create/sequenced_assembly/rf_coil"}}'
    ),
    Item.of(
      "kubejs:incomplete_rf_coil",
      '{SequencedAssembly:{Progress:0.25f,Step:2,id:"kubejs:recipes/create/sequenced_assembly/rf_coil"}}'
    ),
    "kubejs:mold_rf_coil"
  ).id(`${id_prefix}incomplete_rf_coil2`);
  immersiveengineeringMetalPress(
    Item.of(
      "kubejs:incomplete_rf_coil",
      '{SequencedAssembly:{Progress:0.625f,Step:5,id:"kubejs:recipes/create/sequenced_assembly/rf_coil"}}'
    ),
    Item.of(
      "kubejs:incomplete_rf_coil",
      '{SequencedAssembly:{Progress:0.5f,Step:4,id:"kubejs:recipes/create/sequenced_assembly/rf_coil"}}'
    ),
    "kubejs:mold_rf_coil"
  ).id(`${id_prefix}incomplete_rf_coil3`);
  immersiveengineeringMetalPress(
    Item.of(
      "kubejs:incomplete_rf_coil",
      '{SequencedAssembly:{Progress:0.875f,Step:7,id:"kubejs:recipes/create/sequenced_assembly/rf_coil"}}'
    ),
    Item.of(
      "kubejs:incomplete_rf_coil",
      '{SequencedAssembly:{Progress:0.75f,Step:6,id:"kubejs:recipes/create/sequenced_assembly/rf_coil"}}'
    ),
    "kubejs:mold_rf_coil"
  ).id(`${id_prefix}incomplete_rf_coil4`);
  immersiveengineeringMetalPress(
    Item.of(
      "kubejs:incomplete_redstone_servo",
      '{SequencedAssembly:{Progress:0.125f,Step:1,id:"kubejs:recipes/create/sequenced_assembly/redstone_servo"}}'
    ),
    "minecraft:iron_ingot",
    "kubejs:mold_redstone_servo"
  ).id(`${id_prefix}incomplete_redstone_servo1`);
  immersiveengineeringMetalPress(
    Item.of(
      "kubejs:incomplete_redstone_servo",
      '{SequencedAssembly:{Progress:0.375f,Step:3,id:"kubejs:recipes/create/sequenced_assembly/redstone_servo"}}'
    ),
    Item.of(
      "kubejs:incomplete_redstone_servo",
      '{SequencedAssembly:{Progress:0.25f,Step:2,id:"kubejs:recipes/create/sequenced_assembly/redstone_servo"}}'
    ),
    "kubejs:mold_redstone_servo"
  ).id(`${id_prefix}incomplete_redstone_servo2`);
  immersiveengineeringMetalPress(
    Item.of(
      "kubejs:incomplete_redstone_servo",
      '{SequencedAssembly:{Progress:0.625f,Step:5,id:"kubejs:recipes/create/sequenced_assembly/redstone_servo"}}'
    ),
    Item.of(
      "kubejs:incomplete_redstone_servo",
      '{SequencedAssembly:{Progress:0.5f,Step:4,id:"kubejs:recipes/create/sequenced_assembly/redstone_servo"}}'
    ),
    "kubejs:mold_redstone_servo"
  ).id(`${id_prefix}incomplete_redstone_servo3`);
  immersiveengineeringMetalPress(
    Item.of(
      "kubejs:incomplete_redstone_servo",
      '{SequencedAssembly:{Progress:0.875f,Step:7,id:"kubejs:recipes/create/sequenced_assembly/redstone_servo"}}'
    ),
    Item.of(
      "kubejs:incomplete_redstone_servo",
      '{SequencedAssembly:{Progress:0.75f,Step:6,id:"kubejs:recipes/create/sequenced_assembly/redstone_servo"}}'
    ),
    "kubejs:mold_redstone_servo"
  ).id(`${id_prefix}incomplete_redstone_servo4`);

  immersiveengineeringMetalPress("thermal:diamond_gear", "4x diamond", "immersiveengineering:mold_gear").id(`${id_prefix}diamond_gear`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:pure_copper_plate",
    "assemblylinemachines:pure_copper_ingot",
    "immersiveengineering:mold_plate"
  ).id(`${id_prefix}pure_copper_plate`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:pure_gold_plate",
    "assemblylinemachines:pure_gold_ingot",
    "immersiveengineering:mold_plate"
  ).id(`${id_prefix}pure_gold_plate`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:pure_iron_plate",
    "assemblylinemachines:pure_iron_ingot",
    "immersiveengineering:mold_plate"
  ).id(`${id_prefix}pure_iron_plate`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:pure_steel_plate",
    "assemblylinemachines:pure_steel_ingot",
    "immersiveengineering:mold_plate"
  ).id(`${id_prefix}pure_steel_plate`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:pure_titanium_plate",
    "assemblylinemachines:pure_titanium_ingot",
    "immersiveengineering:mold_plate"
  ).id(`${id_prefix}pure_titanium_plate`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:energized_gold_plate",
    "assemblylinemachines:energized_gold_ingot",
    "immersiveengineering:mold_plate"
  ).id(`${id_prefix}energized_gold_plate`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:attuned_titanium_plate",
    "assemblylinemachines:attuned_titanium_ingot",
    "immersiveengineering:mold_plate"
  ).id(`${id_prefix}attuned_titanium_plate`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:novasteel_plate",
    "assemblylinemachines:novasteel_ingot",
    "immersiveengineering:mold_plate"
  ).id(`${id_prefix}novasteel_plate`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:mystium_plate",
    "assemblylinemachines:mystium_ingot",
    "immersiveengineering:mold_plate"
  ).id(`${id_prefix}mystium_plate`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:pure_copper_gear",
    "assemblylinemachines:pure_copper_ingot",
    "immersiveengineering:mold_gear"
  ).id(`${id_prefix}pure_copper_gear`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:pure_gold_gear",
    "assemblylinemachines:pure_gold_ingot",
    "immersiveengineering:mold_gear"
  ).id(`${id_prefix}pure_gold_gear`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:pure_iron_gear",
    "assemblylinemachines:pure_iron_ingot",
    "immersiveengineering:mold_gear"
  ).id(`${id_prefix}pure_iron_gear`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:pure_steel_gear",
    "assemblylinemachines:pure_steel_ingot",
    "immersiveengineering:mold_gear"
  ).id(`${id_prefix}pure_steel_gear`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:pure_titanium_gear",
    "assemblylinemachines:pure_titanium_ingot",
    "immersiveengineering:mold_gear"
  ).id(`${id_prefix}pure_titanium_gear`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:novasteel_gear",
    "assemblylinemachines:novasteel_ingot",
    "immersiveengineering:mold_gear"
  ).id(`${id_prefix}novasteel_gear`);

  immersiveengineeringMetalPress(
    "assemblylinemachines:mystium_gear",
    "assemblylinemachines:mystium_ingot",
    "immersiveengineering:mold_gear"
  ).id(`${id_prefix}mystium_gear`);

  event
    .custom({
      type: "immersiveengineering:mineral_mix",
      ores: [
        { chance: 0.2, output: { item: "ae2:quartz_ore" } },
        { chance: 0.2, output: { item: "thermal:lead_ore" } },
        { chance: 0.2, output: { item: "thermal:silver_ore" } },
        { chance: 0.2, output: { item: "thermal:tin_ore" } },
        { chance: 0.2, output: { item: "thermal:nickel_ore" } },
      ],
      spoils: [
        { chance: 0.4, output: { item: "immersiveengineering:ore_aluminum" } },
        { chance: 0.6, output: { item: "ae2:quartz_ore" } },
      ],
      dimensions: ["minecraft:overworld"],
      weight: 0,
      fail_chance: 0,
    })
    .id("kubejs:custom");
});
