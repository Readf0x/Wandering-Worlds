if (global.config.jokes) {
  ServerEvents.recipes(event => {
    event.shapeless(
      Item.of("minecraft:crying_obsidian"),
      [
        "minecraft:obsidian",
        "farm_and_charm:onion"
      ]
    )
    event.recipes.create.splashing("minecraft:obsidian", "minecraft:crying_obsidian")
  })

  LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.CHEST)
      .matchLoot("minecraft:apple")
      .randomChance(0.01)
      .addLoot("appledog:dogapple")
  })
}
