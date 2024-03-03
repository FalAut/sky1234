onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/tconstruct/casting_basin/";
  const recipes = [
    {
      cast_item: { item: "minecraft:nether_bricks" },
      cast_consumed: true,
      fluid_name: "lava",
      fluid_amount: 100,
      result: "kubejs:nether_portal_frame",
      cooling_time: 0,
      id: `${id_prefix}nether_portal_frame`,
    },
    {
      cast_item: { item: "cobblestone" },
      cast_consumed: true,
      fluid_name: "lava",
      fluid_amount: 100,
      result: "minecraft:netherrack",
      cooling_time: 0,
      id: `${id_prefix}netherrack`,
    },
    {
      cast_item: { item: "naturesaura:tainted_gold" },
      cast_consumed: true,
      fluid_name: "tconstruct:earth_slime",
      fluid_amount: 250,
      result: Item.of(
        "kubejs:incomplete_queens_slime_ingot",
        '{SequencedAssembly:{Progress:0.16666667f,Step:1,id:"kubejs:recipes/create/sequenced_assembly/queens_slime_ingot"}}'
      ),
      cooling_time: 0,
      id: `${id_prefix}queens_slime_ingot1`,
    },
    {
      cast_item: {
        type: "forge:nbt",
        item: "kubejs:incomplete_queens_slime_ingot",
        nbt: '{SequencedAssembly:{Progress:0.16666667f,Step:1,id:"kubejs:recipes/create/sequenced_assembly/queens_slime_ingot"}}',
      },
      cast_consumed: true,
      fluid_name: "tconstruct:sky_slime",
      fluid_amount: 250,
      result: Item.of(
        "kubejs:incomplete_queens_slime_ingot",
        '{SequencedAssembly:{Progress:0.33333334f,Step:2,id:"kubejs:recipes/create/sequenced_assembly/queens_slime_ingot"}}'
      ),
      cooling_time: 0,
      id: `${id_prefix}queens_slime_ingot2`,
    },
    {
      cast_item: {
        type: "forge:nbt",
        item: "kubejs:incomplete_queens_slime_ingot",
        nbt: '{SequencedAssembly:{Progress:0.33333334f,Step:2,id:"kubejs:recipes/create/sequenced_assembly/queens_slime_ingot"}}',
      },
      cast_consumed: true,
      fluid_name: "tconstruct:ender_slime",
      fluid_amount: 250,
      result: Item.of(
        "kubejs:incomplete_queens_slime_ingot",
        '{SequencedAssembly:{Progress:0.5f,Step:3,id:"kubejs:recipes/create/sequenced_assembly/queens_slime_ingot"}}'
      ),
      cooling_time: 0,
      id: `${id_prefix}queens_slime_ingot3`,
    },
    {
      cast_item: {
        type: "forge:nbt",
        item: "kubejs:incomplete_queens_slime_ingot",
        nbt: '{SequencedAssembly:{Progress:0.5f,Step:3,id:"kubejs:recipes/create/sequenced_assembly/queens_slime_ingot"}}',
      },
      cast_consumed: true,
      fluid_name: "tconstruct:magma",
      fluid_amount: 250,
      result: Item.of(
        "kubejs:incomplete_queens_slime_ingot",
        '{SequencedAssembly:{Progress:0.6666667f,Step:4,id:"kubejs:recipes/create/sequenced_assembly/queens_slime_ingot"}}'
      ),
      cooling_time: 0,
      id: `${id_prefix}queens_slime_ingot4`,
    },
    {
      cast_item: {
        type: "forge:nbt",
        item: "kubejs:incomplete_queens_slime_ingot",
        nbt: '{SequencedAssembly:{Progress:0.6666667f,Step:4,id:"kubejs:recipes/create/sequenced_assembly/queens_slime_ingot"}}',
      },
      cast_consumed: true,
      fluid_name: "kubejs:ichor_slime",
      fluid_amount: 250,
      result: Item.of(
        "kubejs:incomplete_queens_slime_ingot",
        '{SequencedAssembly:{Progress:0.8333333f,Step:5,id:"kubejs:recipes/create/sequenced_assembly/queens_slime_ingot"}}'
      ),
      cooling_time: 0,
      id: `${id_prefix}queens_slime_ingot5`,
    },
    {
      cast_item: {
        type: "forge:nbt",
        item: "kubejs:incomplete_queens_slime_ingot",
        nbt: '{SequencedAssembly:{Progress:0.8333333f,Step:5,id:"kubejs:recipes/create/sequenced_assembly/queens_slime_ingot"}}',
      },
      cast_consumed: true,
      fluid_name: "tconstruct:blood",
      fluid_amount: 250,
      result: "tconstruct:queens_slime_ingot",
      cooling_time: 0,
      id: `${id_prefix}queens_slime_ingot6`,
    },
    {
      fluid_name: "kubejs:molten_andesite",
      fluid_amount: 100,
      result: "minecraft:andesite",
      cooling_time: 100,
      id: `${id_prefix}andesite`,
    },
  ];

  recipes.forEach((recipe) => {
    (recipe.type = "tconstruct:casting_basin"),
      (recipe.cast = recipe.cast_item),
      recipe.cast_tag,
      (recipe.fluid = { name: recipe.fluid_name, tag: recipe.fluid_tag, amount: recipe.fluid_amount }),
      event.custom(recipe).id(recipe.id);
  });
});
