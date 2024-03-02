onEvent('recipes', (event) => {
  const id_prefix = 'kubejs:recipes/occultis/miner/';
  const recipes = [
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:white_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers1`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:orange_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers2`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:white_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers1`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:orange_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers2`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:magenta_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers3`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:light_blue_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers4`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:yellow_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers5`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:lime_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers6`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:black_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers7`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:pink_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers8`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:gray_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers9`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:light_gray_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers10`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:cyan_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers11`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:purple_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers12`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:blue_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers13`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:brown_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers14`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:green_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers15`,
    },
    {
      ingredient: { item: 'occultism:miner_debug_unspecialized' },
      result: { item: 'botania:red_mystical_flower' },
      weight: 100,
      id: `${id_prefix}mystical_flowers16`,
    },
  ];

  recipes.forEach((recipe) => {
    (recipe.type = 'occultism:miner'), event.custom(recipe).id(recipe.id);
  });
});
