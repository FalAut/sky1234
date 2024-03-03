onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/extendedcrafting/compressor/";

  const recipes = [
    {
      powerCost: 4096,
      powerRate: 256,
      inputCount: 256,
      input: "ae2:matter_ball",
      icatalyst: "extendedcrafting:elite_catalyst",
      result: { item: "projecte:dark_matter" },
      id: `${id_prefix}dark_matter`,
    },
    {
      powerCost: 1,
      powerRate: 1,
      inputCount: 9,
      input: "assemblylinemachines:empowered_fuel",
      icatalyst: "extendedcrafting:elite_catalyst",
      result: { item: "assemblylinemachines:quantum_fuel" },
      id: `${id_prefix}quantum_fuel`,
    },
    {
      powerCost: 4096,
      powerRate: 256,
      inputCount: 1024,
      input: "mekanism:pellet_antimatter",
      icatalyst: "extendedcrafting:elite_catalyst",
      result: {
        type: "forge:nbt",
        item: "extendedcrafting:singularity",
        nbt: {
          Id: "extendedcrafting:antimatter",
        },
      },
      id: `${id_prefix}antimatter_singularity`,
    },
    {
      powerCost: 4096,
      powerRate: 256,
      inputCount: 1024,
      input: "diamond",
      icatalyst: "extendedcrafting:elite_catalyst",
      result: {
        type: "forge:nbt",
        item: "extendedcrafting:singularity",
        nbt: {
          Id: "extendedcrafting:diamond",
        },
      },
      id: `${id_prefix}diamond_singularity`,
    },
    {
      powerCost: 4096,
      powerRate: 256,
      inputCount: 1024,
      input: "coal",
      icatalyst: "extendedcrafting:elite_catalyst",
      result: {
        type: "forge:nbt",
        item: "extendedcrafting:singularity",
        nbt: {
          Id: "extendedcrafting:coal",
        },
      },
      id: `${id_prefix}coal_singularity`,
    },
    {
      powerCost: 4096,
      powerRate: 256,
      inputCount: 1024,
      input: "redstone",
      icatalyst: "extendedcrafting:elite_catalyst",
      result: {
        type: "forge:nbt",
        item: "extendedcrafting:singularity",
        nbt: {
          Id: "extendedcrafting:redstone",
        },
      },
      id: `${id_prefix}redstone_singularity`,
    },
    {
      powerCost: 4096,
      powerRate: 256,
      inputCount: 1024,
      input: "iron_ingot",
      icatalyst: "extendedcrafting:elite_catalyst",
      result: {
        type: "forge:nbt",
        item: "extendedcrafting:singularity",
        nbt: {
          Id: "extendedcrafting:iron",
        },
      },
      id: `${id_prefix}iron_singularity`,
    },
    {
      powerCost: 4096,
      powerRate: 256,
      inputCount: 1024,
      input: "gold_ingot",
      icatalyst: "extendedcrafting:elite_catalyst",
      result: {
        type: "forge:nbt",
        item: "extendedcrafting:singularity",
        nbt: {
          Id: "extendedcrafting:gold",
        },
      },
      id: `${id_prefix}gold_singularity`,
    },
    {
      powerCost: 4096,
      powerRate: 256,
      inputCount: 1024,
      input: "emerald",
      icatalyst: "extendedcrafting:elite_catalyst",
      result: {
        type: "forge:nbt",
        item: "extendedcrafting:singularity",
        nbt: {
          Id: "extendedcrafting:emerald",
        },
      },
      id: `${id_prefix}emerald_singularity`,
    },
    {
      powerCost: 4096,
      powerRate: 256,
      inputCount: 1024,
      input: "copper_ingot",
      icatalyst: "extendedcrafting:elite_catalyst",
      result: {
        type: "forge:nbt",
        item: "extendedcrafting:singularity",
        nbt: {
          Id: "extendedcrafting:copper",
        },
      },
      id: `${id_prefix}copper_singularity`,
    },
    {
      powerCost: 4096,
      powerRate: 256,
      inputCount: 1024,
      input: "lapis_lazuli",
      icatalyst: "extendedcrafting:elite_catalyst",
      result: {
        type: "forge:nbt",
        item: "extendedcrafting:singularity",
        nbt: {
          Id: "extendedcrafting:lapis_lazuli",
        },
      },
      id: `${id_prefix}lapis_lazuli_singularity`,
    },
    {
      powerCost: 4096,
      powerRate: 256,
      inputCount: 1024,
      input: "extendedexchange:final_star",
      icatalyst: "extendedcrafting:elite_catalyst",
      result: { item: "extendedcrafting:the_ultimate_ingot" },
      id: `${id_prefix}the_ultimate_ingot`,
    },
    {
      powerCost: 4096,
      powerRate: 256,
      inputCount: 1024,
      input: "extendedcrafting:the_ultimate_ingot",
      icatalyst: "extendedcrafting:the_ultimate_catalyst",
      result: { item: "extendedcrafting:ultimate_singularity" },
      id: `${id_prefix}ultimate_singularity`,
    },
  ];

  recipes.forEach((recipe) => {
    event
      .custom({
        powerCost: recipe.powerCost,
        powerRate: recipe.powerRate,
        inputCount: recipe.inputCount,
        type: "extendedcrafting:compressor",
        ingredient: { item: recipe.input },
        catalyst: { item: recipe.icatalyst },
        result: recipe.result,
      })
      .id(recipe.id);
  });
});
