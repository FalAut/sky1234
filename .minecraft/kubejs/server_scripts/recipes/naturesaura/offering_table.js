onEvent('recipes', (event) => {
  const id_prefix = 'kubejs:recipes/naturesaura/offering_table/';
  const recipes = [
    {
      input: {
        item: 'hay_block',
      },
      start_item: {
        item: 'naturesaura:birth_spirit',
      },
      output: {
        item: 'naturesaura:animal_spawner',
      },
      id: `naturesaura:animal_spawner1`,
    },
    {
      input: {
        item: 'naturesaura:gold_powder',
      },
      start_item: {
        item: 'naturesaura:calling_spirit',
      },
      output: {
        item: 'naturesaura:clock_hand',
      },
      id: `naturesaura:offering/clock_hand`,
    },
    {
      input: {
        item: 'naturesaura:sky_ingot',
      },
      start_item: {
        item: 'naturesaura:calling_spirit',
      },
      output: {
        item: 'diamond',
      },
      id: `${id_prefix}diamond1`,
    },
  ];
  recipes.forEach((recipe) => {
    recipe.type = 'naturesaura:offering';
    event.custom(recipe).id(recipe.id);
  });
});
