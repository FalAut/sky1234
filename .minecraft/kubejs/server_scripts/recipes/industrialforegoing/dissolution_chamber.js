/** @format */

onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipe/industrialforegoing/dissolution_chamber/";

  const recipes = [
    {
      inputs: [
        "botania:dragonstone", //↖
        "botania:elementium_ingot", //↑
        "botania:pixie_dust", //↗
        // '', //←
        // '', //→
        // '', //↙
        // '', //↓
        // '' //↘
      ],
      inputFluid: "industrialforegoing:pink_slime",
      inputFluidAmount: 250,
      processingTime: 300,
      outputItem: { item: "industrialforegoing:pink_slime_ingot", count: 1 },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}pink_slime_ingot`,
    },
    {
      inputs: [
        "hostilenetworks:empty_prediction", //↖
        "architects_palette:chiseled_hadaline_bricks", //↑
        "hostilenetworks:empty_prediction", //↗
        "tconstruct:blood_slime_ball", //←
        "tconstruct:blood_slime_ball", //→
        "hostilenetworks:empty_prediction", //↙
        "industrialforegoing:machine_frame_advanced", //↓
        "hostilenetworks:empty_prediction", //↘
      ],
      inputFluid: "industrialforegoing:pink_slime",
      inputFluidAmount: 1000,
      processingTime: 300,
      outputItem: { item: "multiblocked:gaia_killer", count: 1 },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}gaia_killer`,
    },
    {
      inputs: ["#forge:heads"],
      inputFluid: "kubejs:undef1ned_fluid",
      inputFluidAmount: 1000,
      processingTime: 300,
      outputItem: { item: "botania:gaia_head", count: 1 },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}gaia_head`,
    },
    {
      inputs: [
        "industrialforegoing:plastic", //↖
        "immersiveengineering:component_electronic", //↑
        "industrialforegoing:plastic", //↗
        "immersiveengineering:electron_tube", //←
        "immersiveengineering:electron_tube", //→
        "industrialforegoing:plastic", //↙
        "immersiveengineering:component_electronic", //↓
        "industrialforegoing:plastic", //↘
      ],
      inputFluid: "",
      inputFluidAmount: 0,
      processingTime: 300,
      outputItem: {
        item: "immersiveengineering:component_electronic_adv",
        count: 1,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}component_electronic_adv`,
    },
    {
      inputs: [
        "industrialforegoing:plastic", //↖
        "industrialforegoing:machine_frame_pity", //↑
        "industrialforegoing:plastic", //↗
        "create:shadow_steel", //←
        "create:shadow_steel", //→
        "industrialforegoing:plastic", //↙
        "immersiveengineering:component_electronic_adv", //↓
        "industrialforegoing:plastic", //↘
      ],
      inputFluid: "industrialforegoing:latex",
      inputFluidAmount: 1000,
      processingTime: 300,
      outputItem: {
        item: "industrialforegoing:machine_frame_advanced",
        count: 1,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}machine_frame_advanced`,
    },
    {
      inputs: [
        "industrialforegoing:plastic", //↖
        "industrialforegoing:machine_frame_pity", //↑
        "industrialforegoing:plastic", //↗
        "create:shadow_steel", //←
        "create:shadow_steel", //→
        "industrialforegoing:plastic", //↙
        "immersiveengineering:component_electronic_adv", //↓
        "industrialforegoing:plastic", //↘
      ],
      inputFluid: "industrialforegoing:latex",
      inputFluidAmount: 1000,
      processingTime: 300,
      outputItem: {
        item: "industrialforegoing:machine_frame_advanced",
        count: 1,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}machine_frame_advanced`,
    },
    {
      inputs: [
        "botania:gaia_ingot", //↖
        "industrialforegoing:machine_frame_pity", //↑
        "botania:gaia_ingot", //↗
        "create:refined_radiance", //←
        "create:shadow_steel", //→
        "botania:gaia_ingot", //↙
        "hostilenetworks:empty_prediction", //↓
        "botania:gaia_ingot", //↘
      ],
      inputFluid: "industrialforegoing:ether_gas",
      inputFluidAmount: 250,
      processingTime: 300,
      outputItem: {
        item: "industrialforegoing:machine_frame_supreme",
        count: 1,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}machine_frame_supreme`,
    },
    {
      inputs: [
        "botania:life_essence", //↖
        "botania:terrasteel_nugget", //↑
        "botania:life_essence", //↗
        "botania:terrasteel_nugget", //←
        "botania:terrasteel_nugget", //→
        "botania:life_essence", //↙
        "immersiveengineering:logic_circuit", //↓
        "botania:life_essence", //↘
      ],
      inputFluid: "manaliquidizer:mana_fluid",
      inputFluidAmount: 1000,
      processingTime: 300,
      outputItem: {
        item: "assemblylinemachines:microprocessor",
        count: 1,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}microprocessor`,
    },
    {
      inputs: [
        "thermal:nickel_plate", //↖
        "immersiveengineering:wire_copper", //↑
        "minecraft:redstone", //↗
        "#forge:glass", //←
      ],
      inputFluid: "",
      inputFluidAmount: 0,
      processingTime: 300,
      outputItem: {
        item: "immersiveengineering:electron_tube",
        count: 3,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}electron_tube1`,
    },
    {
      inputs: [
        "thermal:nickel_plate", //↖
        "immersiveengineering:wire_copper", //↑
        "minecraft:redstone", //↗
        "#forge:glass", //←
        "#forge:glass", //→
        "thermal:nickel_plate", //↙
        "immersiveengineering:wire_copper", //↓
        "minecraft:redstone", //↘
      ],
      inputFluid: "",
      inputFluidAmount: 0,
      processingTime: 300,
      outputItem: {
        item: "immersiveengineering:electron_tube",
        count: 6,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}electron_tube2`,
    },
    {
      inputs: [
        "immersiveengineering:slab_treated_wood_horizontal", //↖
        "immersiveengineering:wire_copper", //↑
        "immersiveengineering:plate_duroplast", //↗
        "create:electron_tube", //←
      ],
      inputFluid: "",
      inputFluidAmount: 0,
      processingTime: 300,
      outputItem: {
        item: "immersiveengineering:component_electronic",
        count: 1,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}component_electronic1`,
    },
    {
      inputs: [
        "immersiveengineering:slab_treated_wood_horizontal", //↖
        "immersiveengineering:wire_copper", //↑
        "immersiveengineering:plate_duroplast", //↗
        "create:electron_tube", //←
        "create:electron_tube", //→
        "immersiveengineering:slab_treated_wood_horizontal", //↙
        "immersiveengineering:wire_copper", //↓
        "immersiveengineering:plate_duroplast", //↘
      ],
      inputFluid: "",
      inputFluidAmount: 0,
      processingTime: 300,
      outputItem: {
        item: "immersiveengineering:component_electronic",
        count: 2,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}component_electronic2`,
    },
    {
      inputs: [
        "immersiveengineering:electron_tube", //↖
        "immersiveengineering:wire_copper", //↑
        "immersiveengineering:component_electronic", //↗
        "immersiveengineering:circuit_board", //←
      ],
      inputFluid: "",
      inputFluidAmount: 0,
      processingTime: 300,
      outputItem: {
        item: "immersiveengineering:logic_circuit",
        count: 1,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}logic_circuit1`,
    },
    {
      inputs: [
        "immersiveengineering:electron_tube", //↖
        "immersiveengineering:wire_copper", //↑
        "immersiveengineering:component_electronic", //↗
        "immersiveengineering:circuit_board", //←
        "immersiveengineering:circuit_board", //→
        "immersiveengineering:electron_tube", //↙
        "immersiveengineering:wire_copper", //↓
        "immersiveengineering:component_electronic", //↘
      ],
      inputFluid: "",
      inputFluidAmount: 0,
      processingTime: 300,
      outputItem: {
        item: "immersiveengineering:logic_circuit",
        count: 2,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}logic_circui2`,
    },
    {
      inputs: [
        "immersiveengineering:plate_duroplast",
        "immersiveengineering:insulating_glass",
      ],
      inputFluid: "",
      inputFluidAmount: 0,
      processingTime: 300,
      outputItem: {
        item: "immersiveengineering:circuit_board",
        count: 1,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}circuit_board1`,
    },
    {
      inputs: [
        "immersiveengineering:plate_duroplast",
        "immersiveengineering:insulating_glass",
        "immersiveengineering:plate_duroplast",
        "immersiveengineering:insulating_glass",
      ],
      inputFluid: "",
      inputFluidAmount: 0,
      processingTime: 300,
      outputItem: {
        item: "immersiveengineering:circuit_board",
        count: 2,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}circuit_board2`,
    },
    {
      inputs: [
        "immersiveengineering:plate_duroplast",
        "immersiveengineering:insulating_glass",
        "immersiveengineering:plate_duroplast",
        "immersiveengineering:insulating_glass",
        "immersiveengineering:plate_duroplast",
        "immersiveengineering:insulating_glass",
      ],
      inputFluid: "",
      inputFluidAmount: 0,
      processingTime: 300,
      outputItem: {
        item: "immersiveengineering:circuit_board",
        count: 3,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}circuit_board3`,
    },
    {
      inputs: [
        "immersiveengineering:plate_duroplast",
        "immersiveengineering:insulating_glass",
        "immersiveengineering:plate_duroplast",
        "immersiveengineering:insulating_glass",
        "immersiveengineering:plate_duroplast",
        "immersiveengineering:insulating_glass",
        "immersiveengineering:plate_duroplast",
        "immersiveengineering:insulating_glass",
      ],
      inputFluid: "",
      inputFluidAmount: 0,
      processingTime: 300,
      outputItem: {
        item: "immersiveengineering:circuit_board",
        count: 4,
      },
      outputFluid: "",
      outputFluidAmount: 0,
      id: `${id_prefix}circuit_board4`,
    },
  ];

  recipes.forEach((recipe) => {
    let ingredients = [];

    recipe.inputs.forEach((input) => {
      ingredients.push(Ingredient.of(input));
    });

    event
      .custom({
        type: "industrialforegoing:dissolution_chamber",
        input: ingredients,
        inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
        processingTime: recipe.processingTime,
        output: recipe.outputItem,
        outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`,
      })
      .id(recipe.id);
  });
});
