onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/ae2/inscriber/";
  const recipes = [
    {
      mode: "press",
      top: { item: "minecraft:iron_block" },
      middle: { item: "ae2:silicon" },
      result: { item: "ae2:silicon_press" },
      id: `${id_prefix}silicon_press`,
    },
    {
      mode: "press",
      top: { item: "minecraft:iron_block" },
      middle: { item: "minecraft:gold_ingot" },
      result: { item: "ae2:logic_processor_press" },
      id: `${id_prefix}logic_processor_press`,
    },
    {
      mode: "press",
      top: { item: "minecraft:iron_block" },
      middle: { item: "diamond" },
      result: { item: "ae2:engineering_processor_press" },
      id: `${id_prefix}engineering_processor_press`,
    },
    {
      mode: "press",
      top: { item: "minecraft:iron_block" },
      middle: { item: "ae2:certus_quartz_crystal" },
      result: { item: "ae2:calculation_processor_press" },
      id: `${id_prefix}calculation_processor_press`,
    },
  ];

  recipes.forEach((recipe) => {
    event
      .custom({
        type: "ae2:inscriber",
        mode: recipe.mode,
        ingredients: {
          middle: recipe.middle,
          top: recipe.top,
          bottom: recipe.bottom,
        },
        result: recipe.result,
      })
      .id(recipe.id);
  });
});
