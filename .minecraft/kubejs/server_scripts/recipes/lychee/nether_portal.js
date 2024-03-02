onEvent('recipes', (event) => {
  event
    .custom({
      type: 'lychee:item_inside',
      post: [
        {
          type: 'drop_item',
          item: 'kubejs:nether_eye',
          count: 8,
        },
      ],
      item_in: [
        {
          item: 'naturesaura:fortress_finder',
        },
        {
          item: 'kubejs:ghast_eye',
        },
        {
          item: 'kubejs:wither_skeleton_eye',
        },
      ],
      block_in: 'minecraft:lava',
    })
    .id('lychee:kubejs/recipes/lychee/nether_portal/nether_eye_ghost');
  event
    .custom({
      type: 'lychee:item_inside',
      hide_in_viewer: true,
      post: [
        {
          type: 'execute',
          command: "summon minecraft:item ~ ~ ~ {NoGravity:1b,Motion:[0.0,0.01,0.0],Item:{id:'kubejs:nether_eye',Count:8}}",
        },
      ],
      item_in: [
        {
          item: 'naturesaura:fortress_finder',
        },
        {
          item: 'kubejs:ghast_eye',
        },
        {
          item: 'kubejs:wither_skeleton_eye',
        },
      ],
      block_in: 'minecraft:lava',
    })
    .id('lychee:kubejs/recipes/lychee/nether_portal/nether_eye');
});
