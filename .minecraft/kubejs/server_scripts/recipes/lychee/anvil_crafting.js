onEvent('recipes', (event) => {
  event.custom({
    type: 'lychee:block_crushing',
    post: [
      {
        type: 'drop_item',
        item: 'naturesaura:gold_fiber',
      },
    ],
    item_in: [
      {
        item: 'naturesaura:gold_leaf',
      },
    ],
  });
});
