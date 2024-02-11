onForgeEvent('net.minecraftforge.event.world.BlockEvent$PortalSpawnEvent', event => {event.setCanceled(true)})

const CustomPortalBuilder = java('net.kyrptonaught.customportalapi.api.CustomPortalBuilder')

onEvent('postinit', event => {
    CustomPortalBuilder.beginPortal()
        ['frameBlock(net.minecraft.resources.ResourceLocation)'](new ResourceLocation('kubejs', 'nether_portal_frame_filled'))
        .destDimID(new ResourceLocation('minecraft', 'the_nether'))
        .tintColor(61, 61, 61)
        .flatPortal()
        // .forcedSize(2, 2)
        .lightWithItem(new ResourceLocation('naturesaura', 'token_anger'))
        // .lightWithFluid(new ResourceLocation('minecraft', 'lava'))
        // .lightWithWater()
        .onlyLightInOverworld()
        .registerPortal();
});