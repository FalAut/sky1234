/** @format */

onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/minecraft";

  event
    .smithing(
      "create:mechanical_saw",
      "create:andesite_casing",
      "thermal:saw_blade"
    )
    .id(`${id_prefix}mechanical_saw`);
  event
    .smithing("create:deployer", "create:andesite_casing", "create:brass_hand")
    .id(`${id_prefix}deployer`);
  event
    .smithing(
      "create:mechanical_press",
      "create:andesite_casing",
      "minecraft:iron_block"
    )
    .id(`${id_prefix}mechanical_press`);
  event
    .smithing(
      "create:mechanical_mixer",
      "create:andesite_casing",
      "create:whisk"
    )
    .id(`${id_prefix}mechanical_mixer`);
  event
    .smithing(
      "create:encased_fan",
      "create:andesite_casing",
      "create:propeller"
    )
    .id(`${id_prefix}encased_fan`);
  event
    .smithing(
      "create:mechanical_crafter",
      "create:brass_casing",
      "create:cogwheel"
    )
    .id(`${id_prefix}mechanical_crafter`);
  event
    .smithing(
      "multiblocked:stress_generator_input",
      "create:gearbox",
      "immersiveengineering:sheetmetal_steel"
    )
    .id(`${id_prefix}stress_generator_input`);
  event
    .smithing(
      "multiblocked:stress_generator_output",
      "create:stockpile_switch",
      "immersiveengineering:sheetmetal_steel"
    )
    .id(`${id_prefix}stress_generator_output`);
  event
    .smithing(
      "multiblocked:stress_generator_controller",
      "create:stressometer",
      "immersiveengineering:sheetmetal_steel"
    )
    .id(`${id_prefix}stress_generator_controller`);
  event
    .smoking("kubejs:smoked_iron_block", "iron_block")
    .id(`${id_prefix}smoked_iron_block`);

  event
    .smelting(
      "assemblylinemachines:mystium_ingot",
      "assemblylinemachines:mystium_blend"
    )
    .id(`${id_prefix}mystium_ingot`);

  event
    .smelting(
      "assemblylinemachines:novasteel_ingot",
      "assemblylinemachines:nova_blend"
    )
    .id(`${id_prefix}novasteel_ingot`);
});
