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
