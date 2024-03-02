onEvent('recipes', (event) => {
  event.custom({
    type: 'extendedcrafting:combination',
    powerCost: 400000,
    input: {
      item: 'kubejs:undef1ned',
    },
    ingredients: [
      {
        item: 'projecte:dark_matter',
      },
      {
        item: 'projecte:red_matter',
      },
      {
        item: 'extendedexchange:yellow_matter',
      },
      {
        item: 'extendedexchange:orange_matter',
      },
      {
        item: 'extendedexchange:lime_matter',
      },
      {
        item: 'extendedexchange:green_matter',
      },
      {
        item: 'extendedexchange:cyan_matter',
      },
      {
        item: 'extendedexchange:blue_matter',
      },
      {
        item: 'extendedexchange:pink_matter',
      },
      {
        item: 'extendedexchange:magenta_matter',
      },
      {
        item: 'extendedexchange:purple_matter',
      },
      {
        item: 'extendedexchange:violet_matter',
      },
      {
        item: 'extendedexchange:white_matter',
      },
      {
        item: 'extendedexchange:fading_matter',
      },
    ],
    result: {
      item: 'extendedexchange:final_star',
    },
  });
});
