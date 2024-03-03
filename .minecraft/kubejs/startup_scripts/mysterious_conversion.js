onEvent("postinit", (event) => {
  let $MysteriousItemConversionCategory = java("com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory");
  let $ConversionRecipe = java("com.simibubi.create.compat.jei.ConversionRecipe");

  $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create("create:chromatic_compound", "create:shadow_steel"));
  $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create("create:chromatic_compound", "create:refined_radiance"));
});
