onEvent('morejs.enchantment_table.changed', (event) => {
    let firstSlot = event.get(0);
    let secondSlot = event.get(1);
    let thirdSlot = event.get(2);

//FirstSlot
    firstSlot.removeEnchantments((enchantment, level) => {
        return enchantment.id == "miniutilities:molten_head" && level == 1;
    });
    if(firstSlot.enchantmentCount == 0) {
      firstSlot.addEnchantment("minecraft:fortune", 1);
    }
//SecondSlot
    secondSlot.removeEnchantments((enchantment, level) => {
        return enchantment.id == "miniutilities:molten_head" && level == 1;
    });
    if(secondSlot.enchantmentCount == 0) {
      secondSlot.addEnchantment("minecraft:fortune", 1);
    }
//ThirdSlot
    thirdSlot.removeEnchantments((enchantment, level) => {
        return enchantment.id == "miniutilities:molten_head" && level == 1;
    });
    if(thirdSlot.enchantmentCount == 0) {
      thirdSlot.addEnchantment("minecraft:fortune", 1);
    }

    firstSlot.updateClue();
    secondSlot.updateClue();
    thirdSlot.updateClue();
});