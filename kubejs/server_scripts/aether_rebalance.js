ServerEvents.tags('item', event => {
  event.add("origins:ignore_diet", "deep_aether:antidote")
  event.add("origins:ignore_diet", "deep_aether:enchanted_antidote")
})

ServerEvents.recipes(event => {
  event.recipes.create.crushing("kubejs:end_dust", "minecraft:end_rod")

  if (global.config.valkyrum_revamp) {
    event.remove({id:"ancient_aether:valkyrum"})
    for (let i of [
      "sword",
      "shovel",
      "pickaxe",
      "axe",
      "hoe",
      "boots",
      "leggings",
      "chestplate",
      "helmet",
      "gloves"
    ]) {
      event.remove({ id: `ancient_aether:valkyrum_${i}` })
      event.smithing(
        `ancient_aether:valkyrum_${i}`,
        "kubejs:valkyrum_upgrade_template",
        `aether:gravitite_${i}`,
        "ancient_aether:valkyrum"
      )
    }
    event.remove({ id: "ancient_aether:valkyrum_ring" })
    event.smithing(
      "ancient_aether:valkyrum_ring",
      "kubejs:valkyrum_upgrade_template",
      "deep_aether:gravitite_ring",
      "ancient_aether:valkyrum"
    )

    event.recipes.create.mixing(
      "ancient_aether:valkyrum",
      [
        Fluid.of("create_enchantment_industry:hyper_experience", 100),
        Item.of("kubejs:end_dust", 4),
        Item.of("ancient_aether:valkyrum_ore")
      ]
    ).superheated()

    event.shaped(
      "kubejs:valkyrum_upgrade_template",
      [
        "CAC",
        "CBC",
        "CCC"
      ],
      {
        A: "kubejs:valkyrum_upgrade_template",
        B: "ancient_aether:valkyrie_brick",
        C: "aether:enchanted_gravitite"
      }
    )
  }

  if (global.config.gummy_swet_craftable) {
    if (global.config.gummy_swet_old_recipe) {
      event.shaped(
        Item.of("aether:blue_gummy_swet", 1),
        [
          "AAA",
          "CBC",
          "AAA"
        ],
        {
          A: "aether:swet_ball",
          B: "minecraft:sugar",
          C: "immersive_weathering:tallow"
        }
      )
    }
    event.recipes.create.mixing(
      Item.of("aether:blue_gummy_swet", 2),
      [
        Item.of("aether:swet_ball", 8),
        Item.of("immersive_weathering:tallow", 2),
        "minecraft:sugar",
        global.Potion("minecraft:awkward", 1000)
      ]
    ).heated()
  }
})
