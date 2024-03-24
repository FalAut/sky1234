onEvent("postinit", (event) => {
  let $MICC = java("com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory")
  let $CR = java("com.simibubi.create.compat.jei.ConversionRecipe")

  $MICC.RECIPES.add($CR.create("create:chromatic_compound", "create:shadow_steel"))
  $MICC.RECIPES.add($CR.create("create:chromatic_compound", "create:refined_radiance"))
})
