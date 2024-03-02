onEvent("recipes", (event) => {
  event
    .custom({
      type: "lychee:block_crushing",
      hide_in_viewer: true,
      post: [
        {
          type: "drop_item",
          item: "naturesaura:gold_fiber",
        },
      ],
      item_in: [
        {
          item: "naturesaura:gold_leaf",
        },
      ],
    })
    .id("lychee:kubejs/recipes/lychee/block_crushing/gold_fiber");
});
