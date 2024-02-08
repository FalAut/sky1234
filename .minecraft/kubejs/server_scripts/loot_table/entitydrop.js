onEvent("lootjs", event => {
    event
        .addEntityLootModifier('minecraft:ghast')
        .matchMainHand(Item.of('botania:ender_dagger').ignoreNBT())
        .addLoot('2x kubejs:ghast_eye');
    event
        .addEntityLootModifier('minecraft:blaze')
        .matchMainHand(Item.of('botania:ender_dagger').ignoreNBT())
        .addLoot('2x naturesaura:fortress_finder');

    event
        .addEntityLootModifier('minecraft:wither_skeleton')
        .matchMainHand(Item.of('botania:ender_dagger').ignoreNBT())
        .addLoot('2x kubejs:wither_skeleton_eye');
    
    event
        .addEntityLootModifier('minecraft:zombified_piglin')
        .removeLoot(['gold_ingot', 'gold_nugget']);
})