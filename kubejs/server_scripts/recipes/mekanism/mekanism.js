onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/mekanism/mekanism/"
  const { chemical_infusing, combining, compressing, crushing, dissolution, enriching, injecting, metallurgic_infusing, purifying, sawing, smelting } = event.recipes.mekanism

  metallurgic_infusing("thermal_extra:dragonsteel_ingot", "immersiveengineering:ingot_steel", "20x kubejs:dragon_breath").id(`${id_prefix}dragonsteel_ingot`)

  metallurgic_infusing("mekanism:alloy_atomic", "mekanism:alloy_reinforced", "20x kubejs:unobtanium").id(`${id_prefix}alloy_atomic`)

  metallurgic_infusing("assemblylinemachines:energized_gold_ingot", "assemblylinemachines:pure_gold_ingot", "20x mekanism:redstone").id(`${id_prefix}energized_gold_ingot`)

  metallurgic_infusing("assemblylinemachines:empowered_coal", "minecraft:coal", "20x mekanism:redstone").id(`${id_prefix}empowered_coal`)

  metallurgic_infusing("assemblylinemachines:attuned_titanium_ingot", "assemblylinemachines:pure_titanium_ingot", "20x mekanism:refined_obsidian").id(`${id_prefix}attuned_titanium_ingot`)

  combining("mekanism:basic_control_circuit", "immersiveengineering:circuit_board", "botania:terrasteel_nugget").id(`${id_prefix}basic_control_circuit`)

  combining("mekanism:steel_casing", "industrialforegoing:machine_frame_supreme", "botania:gaia_ingot").id(`${id_prefix}steel_casing`)

  event
    .custom({
      type: "mekanism:crystallizing",
      chemicalType: "gas",
      input: { amount: 1, gas: "mekanism:antimatter" },
      output: { item: "mekanism:pellet_antimatter" },
    })
    .id(`${id_prefix}pellet_antimatter`)

  event
    .custom({
      type: "mekanism:oxidizing",
      input: { ingredient: { tag: "forge:pellets/antimatter" } },
      output: { gas: "mekanism:antimatter", amount: 1 },
    })
    .id(`${id_prefix}antimatter`)

  event
    .custom({
      type: "mekanism:oxidizing",
      input: { ingredient: { item: "assemblylinemachines:quantum_fuel" } },
      output: { gas: "mekanism:fissile_fuel", amount: 100 },
    })
    .id(`${id_prefix}fissile_fuel`)

  event
    .custom({
      type: "mekanism:reaction",
      itemInput: { ingredient: { tag: "forge:dusts/fluorite" } },
      fluidInput: { amount: 1000, tag: "minecraft:water" },
      gasInput: { amount: 1, gas: "mekanism:polonium" },
      duration: 100,
      itemOutput: { item: "mekanism:pellet_polonium" },
    })
    .id(`${id_prefix}pellet_polonium`)

  event
    .custom({
      type: "mekanism:reaction",
      itemInput: {
        ingredient: { item: "assemblylinemachines:corrupted_shard" },
      },
      fluidInput: {
        amount: 1000,
        fluid: "assemblylinemachines:condensed_void",
      },
      gasInput: { amount: 1000, gas: "mekanism:steam" },
      duration: 100,
      itemOutput: { item: "architects_palette:unobtanium" },
    })
    .id(`${id_prefix}unobtanium`)

  event
    .custom({
      type: "mekanism:crystallizing",
      chemicalType: "slurry",
      input: { amount: 200, slurry: "mekanism:clean_copper" },
      output: { item: "assemblylinemachines:pure_copper_ingot" },
    })
    .id(`${id_prefix}pure_copper_ingot`)

  event
    .custom({
      type: "mekanism:crystallizing",
      chemicalType: "slurry",
      input: { amount: 200, slurry: "mekanism:clean_gold" },
      output: { item: "assemblylinemachines:pure_gold_ingot" },
    })
    .id(`${id_prefix}pure_gold_ingot`)

  event
    .custom({
      type: "mekanism:crystallizing",
      chemicalType: "slurry",
      input: { amount: 200, slurry: "mekanism:clean_iron" },
      output: { item: "assemblylinemachines:pure_iron_ingot" },
    })
    .id(`${id_prefix}pure_iron_ingot`)

  event
    .custom({
      type: "mekanism:dissolution",
      itemInput: { ingredient: { item: "assemblylinemachines:titanium_ore" } },
      gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
      output: {
        slurry: "kubejs:dirty_titanium",
        amount: 1000,
        chemicalType: "slurry",
      },
    })
    .id(`${id_prefix}dirty_titanium_from_ore`)

  event
    .custom({
      type: "mekanism:dissolution",
      itemInput: {
        ingredient: { item: "assemblylinemachines:raw_titanium_block" },
      },
      gasInput: { amount: 2, gas: "mekanism:sulfuric_acid" },
      output: {
        slurry: "kubejs:dirty_titanium",
        amount: 6000,
        chemicalType: "slurry",
      },
    })
    .id(`${id_prefix}dirty_titanium_from_raw_block`)

  event
    .custom({
      type: "mekanism:dissolution",
      itemInput: {
        amount: 3,
        ingredient: { item: "assemblylinemachines:raw_titanium" },
      },
      gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
      output: {
        slurry: "kubejs:dirty_titanium",
        amount: 2000,
        chemicalType: "slurry",
      },
    })
    .id(`${id_prefix}dirty_titanium_from_raw`)

  event
    .custom({
      type: "mekanism:washing",
      fluidInput: { amount: 5, tag: "minecraft:water" },
      slurryInput: { amount: 1, slurry: "kubejs:dirty_titanium" },
      output: { slurry: "kubejs:clean_titanium", amount: 1 },
    })
    .id(`${id_prefix}clean_titanium`)

  event
    .custom({
      type: "mekanism:crystallizing",
      chemicalType: "slurry",
      input: { amount: 200, slurry: "kubejs:clean_titanium" },
      output: { item: "assemblylinemachines:pure_titanium_ingot" },
    })
    .id(`${id_prefix}pure_titanium_ingot`)

  event
    .custom({
      type: "mekanism:reaction",
      itemInput: {
        ingredient: { item: "assemblylinemachines:empowered_coal" },
      },
      fluidInput: {
        amount: 1,
        fluid: "assemblylinemachines:condensed_void",
      },
      gasInput: { amount: 1, gas: "mekanismgenerators:fusion_fuel" },
      duration: 100,
      itemOutput: { item: "assemblylinemachines:empowered_fuel" },
    })
    .id(`${id_prefix}empowered_fuel`)

  event
    .custom({
      type: "mekanism:reaction",
      itemInput: {
        ingredient: { tag: "minecraft:flowers" },
      },
      fluidInput: {
        amount: 1000,
        fluid: "assemblylinemachines:condensed_void",
      },
      gasInput: { amount: 1000, gas: "mekanism:steam" },
      duration: 100,
      itemOutput: { item: "assemblylinemachines:prism_rose" },
    })
    .id(`${id_prefix}prism_rose`)

  event
    .custom({
      type: "mekanism:reaction",
      itemInput: {
        ingredient: { item: "minecraft:bone_meal" },
      },
      fluidInput: {
        amount: 1000,
        fluid: "assemblylinemachines:dark_energy",
      },
      gasInput: { amount: 1000, gas: "mekanism:steam" },
      duration: 100,
      itemOutput: { item: "assemblylinemachines:chaotic_fertilizer" },
    })
    .id(`${id_prefix}chaotic_fertilizer`)

  crushing("assemblylinemachines:prismatic_dust", "assemblylinemachines:prism_rose").id(`${id_prefix}prismatic_dust`)

  event
    .custom({
      type: "mekanism:pigment_mixing",
      leftInput: { amount: 1, pigment: "mekanism:yellow" },
      rightInput: { amount: 1, pigment: "mekanism:green" },
      output: { pigment: "kubejs:lime", amount: 2 },
    })
    .id(`${id_prefix}lime`)

  event
    .custom({
      type: "mekanism:pigment_mixing",
      leftInput: { amount: 1, pigment: "mekanism:red" },
      rightInput: { amount: 1, pigment: "mekanism:purple" },
      output: { pigment: "kubejs:violet", amount: 2 },
    })
    .id(`${id_prefix}violet`)

  // event
  //   .custom({
  //     type: "mekanism:painting",
  //     itemInput: {
  //       ingredient: {
  //         item: "projecte:dark_matter",
  //       },
  //     },
  //     chemicalInput: { amount: 256, pigment: "mekanism:red" },
  //     output: { item: "projecte:red_matter" },
  //   })
  //   .id(`${id_prefix}red_matter`);

  event
    .custom({
      type: "mekanism:painting",
      itemInput: {
        ingredient: {
          item: "projecte:dark_matter",
        },
      },
      chemicalInput: { amount: 256, pigment: "mekanism:orange" },
      output: { item: "extendedexchange:orange_matter" },
    })
    .id(`${id_prefix}orange_matter`)

  event
    .custom({
      type: "mekanism:painting",
      itemInput: {
        ingredient: {
          item: "projecte:dark_matter",
        },
      },
      chemicalInput: { amount: 256, pigment: "kubejs:lime" },
      output: { item: "extendedexchange:lime_matter" },
    })
    .id(`${id_prefix}lime_matter`)

  event
    .custom({
      type: "mekanism:painting",
      itemInput: {
        ingredient: {
          item: "projecte:dark_matter",
        },
      },
      chemicalInput: { amount: 256, pigment: "mekanism:green" },
      output: { item: "extendedexchange:green_matter" },
    })
    .id(`${id_prefix}green_matter`)

  event
    .custom({
      type: "mekanism:painting",
      itemInput: {
        ingredient: {
          item: "projecte:dark_matter",
        },
      },
      chemicalInput: { amount: 256, pigment: "mekanism:cyan" },
      output: { item: "extendedexchange:cyan_matter" },
    })
    .id(`${id_prefix}cyan_matter`)

  event
    .custom({
      type: "mekanism:painting",
      itemInput: {
        ingredient: {
          item: "projecte:dark_matter",
        },
      },
      chemicalInput: { amount: 256, pigment: "mekanism:blue" },
      output: { item: "extendedexchange:blue_matter" },
    })
    .id(`${id_prefix}blue_matter`)

  event
    .custom({
      type: "mekanism:painting",
      itemInput: {
        ingredient: {
          item: "projecte:dark_matter",
        },
      },
      chemicalInput: { amount: 256, pigment: "mekanism:magenta" },
      output: { item: "extendedexchange:magenta_matter" },
    })
    .id(`${id_prefix}magenta_matter`)

  event
    .custom({
      type: "mekanism:painting",
      itemInput: {
        ingredient: {
          item: "projecte:dark_matter",
        },
      },
      chemicalInput: { amount: 256, pigment: "mekanism:purple" },
      output: { item: "extendedexchange:purple_matter" },
    })
    .id(`${id_prefix}purple_matter`)

  event
    .custom({
      type: "mekanism:painting",
      itemInput: {
        ingredient: {
          item: "projecte:dark_matter",
        },
      },
      chemicalInput: { amount: 256, pigment: "mekanism:white" },
      output: { item: "extendedexchange:white_matter" },
    })
    .id(`${id_prefix}white_matter`)

  event
    .custom({
      type: "mekanism:painting",
      itemInput: {
        ingredient: {
          item: "projecte:dark_matter",
        },
      },
      chemicalInput: { amount: 256, pigment: "mekanism:pink" },
      output: { item: "extendedexchange:pink_matter" },
    })
    .id(`${id_prefix}pink_matter`)

  event
    .custom({
      type: "mekanism:painting",
      itemInput: {
        ingredient: {
          item: "projecte:dark_matter",
        },
      },
      chemicalInput: { amount: 256, pigment: "mekanism:yellow" },
      output: { item: "extendedexchange:yellow_matter" },
    })
    .id(`${id_prefix}yellow_matter`)

  event
    .custom({
      type: "mekanism:painting",
      itemInput: {
        ingredient: {
          item: "projecte:dark_matter",
        },
      },
      chemicalInput: { amount: 256, pigment: "kubejs:violet" },
      output: { item: "extendedexchange:violet_matter" },
    })
    .id(`${id_prefix}violet_matter`)

  enriching("kubejs:enriched_dragon_breath", "minecraft:dragon_breath")
  enriching("kubejs:enriched_unobtanium", "architects_palette:unobtanium")
})
