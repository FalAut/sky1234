onEvent("lootjs", (event) => {
  event.addEntityLootModifier("minecraft:ghast").matchMainHand(Item.of("botania:ender_dagger").ignoreNBT()).addLoot("2x kubejs:ghast_eye");
  event
    .addEntityLootModifier("minecraft:blaze")
    .matchMainHand(Item.of("botania:ender_dagger").ignoreNBT())
    .addLoot("2x naturesaura:fortress_finder");

  event
    .addEntityLootModifier("minecraft:wither_skeleton")
    .matchMainHand(Item.of("botania:ender_dagger").ignoreNBT())
    .addLoot("2x kubejs:wither_skeleton_eye");

  event.addEntityLootModifier("minecraft:zombified_piglin").removeLoot(["gold_ingot", "gold_nugget"]);

  event
    .addEntityLootModifier("minecraft:wither_skeleton")
    .addLoot("64x tconstruct:necrotic_bone")
    .removeLoot("architects_palette:withered_bone");
  
  event.addBlockLootModifier("kubejs:congealed_magma_cream").addLoot("4x minecraft:magma_cream").removeLoot("kubejs:congealed_magma_cream");

  event
    .addBlockLootModifier("kubejs:nether_portal_frame_filled")
    .addLoot("kubejs:nether_portal_frame")
    .removeLoot("kubejs:nether_portal_frame_filled");
});
