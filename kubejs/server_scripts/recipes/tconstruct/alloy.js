onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/tconstruct/alloy/"
  const recipes = [
    {
      inputs: [
        { name: "kubejs:molten_andesite", amount: 200 },
        { name: "tconstruct:molten_iron", amount: 20 },
      ],
      result: { fluid: "kubejs:molten_andesite_alloy", amount: 90 },
      temperature: 1000,
      id: `${id_prefix}molten_andesite_alloy1`,
    },
    {
      inputs: [
        { name: "kubejs:molten_andesite", amount: 200 },
        { name: "tconstruct:molten_zinc", amount: 20 },
      ],
      result: { fluid: "kubejs:molten_andesite_alloy", amount: 90 },
      temperature: 1000,
      id: `${id_prefix}molten_andesite_alloy2`,
    },
  ]

  recipes.forEach((recipe) => {
    recipe.type = "tconstruct:alloy"
    event.custom(recipe).id(recipe.id)
  })
})
