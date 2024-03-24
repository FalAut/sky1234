onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/occultis/spirit_fire/"
  const recipes = [
    {
      ingredient: { item: "create:refined_radiance" },
      result: { item: "occultism:otherworld_ashes" },
      id: `${id_prefix}otherworld_ashes`,
    },
    {
      ingredient: { item: "create:shadow_steel" },
      result: { item: "occultism:burnt_otherstone" },
      id: `${id_prefix}burnt_otherstone`,
    },
    {
      ingredient: { tag: "minecraft:logs" },
      result: { item: "occultism:otherworld_log" },
      id: `${id_prefix}otherworld_log`,
    },
    {
      ingredient: { tag: "forge:stone" },
      result: { item: "occultism:otherstone" },
      id: `${id_prefix}otherstone`,
    },
  ]

  recipes.forEach((recipe) => {
    ;(recipe.type = "occultism:spirit_fire"), event.custom(recipe).id(recipe.id)
  })
})
