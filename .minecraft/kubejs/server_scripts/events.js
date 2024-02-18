// priority: 2

onEvent('server.load', event => {
    const { server } = event
    if (server.persistentData.firstload) return

    server.runCommandSilent('time set noon')
    server.runCommandSilent('gamerule keepInventory true')
    server.runCommandSilent('gamerule doDaylightCycle false')
    server.runCommandSilent('gamerule doWeatherCycle false')
    server.runCommandSilent('gamerule doInsomnia false')
    server.runCommandSilent('gamerule doTraderSpawning false')
    server.scheduleInTicks(100, callback => {
        callback.server.runCommandSilent('setworldspawn 57 65 57')
    })

    server.persistentData.firstload = true
})

onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
      event.player.stages.add('starting_items')
      event.player.give(Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}'))
    }
})

onEvent('player.tick', event => {
    const { player, block, level } = event
    const pData = player.persistentData

    // //哭泣之井传送
    // if (player.potionEffects.isActive("malum:rejected")) {
    //     player.teleportTo('assemblylinemachines:chaos_plane', 1, 500, 1, 90, 90);
    //     player.potionEffects.clear();
    //     player.potionEffects.add("minecraft:resistance", 300, 255);
    // }

    //每隔1秒只运行一次代码
    if (!pData.timer) pData.timer = 0
    if (pData.timer >= 20) pData.timer = 0
    pData.timer++
    if (pData.timer != 1) return

    //维持饥饿值和饱和度
    player.setFoodLevel(20);
    player.setSaturation(20);

})

onEvent('item.right_click', event => {
    const { item, level, player, server } = event

    //降生之魂
    if (item.id == 'botania:ender_dagger') {
        player.addItemCooldown('botania:ender_dagger', 200);
        player.attack('void', 19);
        player.give('naturesaura:birth_spirit');
    }

    // //虚空维度传送器
    // if (item.id == 'kubejs:void_teleporter' && level.dimension != 'kubejs:void') {
    //     player.teleportTo('kubejs:void', 0.5, 69, 0.5, 0, 0);
    //     event.server.runCommandSilent('execute in kubejs:void run setblock 0 65 0 minecraft:bedrock')
    // }

    // if (item.id == 'kubejs:void_teleporter' && level.dimension == "kubejs:void") {
    //     event.player.runCommandSilent('skyblock home')
    // }

    // //超平坦维度传送器
    // if (item.id == 'kubejs:surper_flat_teleporter' && level.dimension != 'kubejs:surper_flat') {
    //     player.teleportTo('kubejs:surper_flat', 0.5, 69, 0.5, 0, 0);
    // }

    // if (item.id == 'kubejs:surper_flat_teleporter' && level.dimension == "kubejs:surper_flat") {
    //     event.player.runCommandSilent('skyblock home')
    // }
})

onEvent('entity.spawned', event => {
    const { entity, server } = event
    // if (event.level.dimension == "minecraft:the_nether" && event.entity.type != 'minecraft:player' && event.entity.type != 'minecraft:item') {
    //     event.cancel()
    // }

    if (entity.type == 'minecraft:ender_dragon') {
        server.scheduleInTicks(20, callback => {
            entity.kill()
        })
    }
})

// onEvent('block.right_click', event => {
//     if (event.item.id == 'industrialforegoing:infinity_nuke' && event.level.dimension == "minecraft:overworld") {
//         event.player.tell('主世界无法放置无限核弹，建议前往超平坦放置')
//         event.cancel()
//     }
// })