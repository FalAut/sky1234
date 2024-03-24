onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/tconstruct/casting_table/"
  const recipes = [
    {
      cast: { tag: "tconstruct:casts/single_use/ingot" },
      cast_consumed: true,
      fluid: { name: "kubejs:molten_andesite_alloy", amount: 90 },
      result: "create:andesite_alloy",
      cooling_time: 60,
      id: `${id_prefix}andesite_alloy1`,
    },
    {
      cast: { tag: "tconstruct:casts/multi_use/ingot" },
      fluid: { name: "kubejs:molten_andesite_alloy", amount: 90 },
      result: "create:andesite_alloy",
      cooling_time: 60,
      id: `${id_prefix}andesite_alloy2`,
    },
  ]

  recipes.forEach((recipe) => {
    ;(recipe.type = "tconstruct:casting_table"), event.custom(recipe).id(recipe.id)
  })
})
