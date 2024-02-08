onEvent("ponder.tag", event => {
    /**
     * "kubejs:getting_started" -> the tag name
     * "minecraft:paper"        -> the icon
     * "Getting Started"        -> the title
     * "This is a description"  -> the description
     * [...items]               -> default items
     */
    event.createTag("kubejs:getting_started", "minecraft:paper", "Getting started.", "We ponder now!", [
        'minecraft:oak_sapling'
    ]);
});