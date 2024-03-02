onEvent('recipes', (event) => {
  event
    .custom({
      type: 'lychee:item_inside',
      post: [
        {
          type: 'place',
          block: 'kubejs:undef1ned_fluid',
        },
      ],
      item_in: [
        {
          item: 'kubejs:undef1ned',
        },
      ],
      block_in: { blocks: ['water'], state: { level: 0 } },
    })
    .id('lychee:kubejs/recipes/lychee/undef1ned_fluid');
});
