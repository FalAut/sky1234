onEvent("recipes", (event) => {
  event
    .custom({
      type: "lychee:item_burning",
      hide_in_viewer: true,
      post: [
        {
          type: "drop_item",
          item: "naturesaura:token_anger",
        },
      ],
      item_in: {
        item: "naturesaura:token_joy",
      },
    })
    .id("lychee:kubejs/recipes/lychee/burning/token_anger");
});
