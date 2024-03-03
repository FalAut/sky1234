onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/mekanism/fission/";
  const recipes = [
    {
      input: { gas: "mekanism:fissile_fuel", amount: 1 },
      output: { gas: "mekanism:polonium", amount: 1 },
      heat: 1,
      id: `${id_prefix}nuclear`,
    },
  ];

  recipes.forEach((recipe) => {
    event
      .custom({
        type: "mekanism:fission",
        input: recipe.input,
        output: recipe.output,
        heat: recipe.heat,
      })
      .id(recipe.id);
  });
});
