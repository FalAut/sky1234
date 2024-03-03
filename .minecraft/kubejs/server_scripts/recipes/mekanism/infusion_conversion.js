onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/mekanism/infusion_conversion/";
  const recipes = [
    {
      input: { ingredient: { item: "minecraft:dragon_breath" } },
      output: { amount: 10, infuse_type: "kubejs:dragon_breath" },
      id: `${id_prefix}dragon_breath1`,
    },
    {
      input: { ingredient: { item: "kubejs:enriched_dragon_breath" } },
      output: { amount: 80, infuse_type: "kubejs:dragon_breath" },
      id: `${id_prefix}dragon_breath2`,
    },
    {
      input: { ingredient: { item: "architects_palette:unobtanium" } },
      output: { amount: 10, infuse_type: "kubejs:unobtanium" },
      id: `${id_prefix}unobtanium1`,
    },
    {
      input: { ingredient: { item: "kubejs:enriched_unobtanium" } },
      output: { amount: 80, infuse_type: "kubejs:unobtanium" },
      id: `${id_prefix}unobtanium2`,
    },
  ];

  recipes.forEach((recipe) => {
    event
      .custom({
        type: "mekanism:infusion_conversion",
        input: recipe.input,
        output: recipe.output,
      })
      .id(recipe.id);
  });
});
