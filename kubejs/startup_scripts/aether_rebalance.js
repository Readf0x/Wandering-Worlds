StartupEvents.registry("item", event => {
  event.create("end_dust").texture("ww:item/end_dust")
  event.create("valkyrum_upgrade_template")
    .texture("ww:item/valkyrum_upgrade_template")
    .displayName("Smithing Template")
})

ItemEvents.modification(event => {
  const setDurabilities = (items, durability) => {
    items.forEach(id => {
      event.modify(id, item => {
        item.maxDamage = durability
      })
    })
  }

  if (global.config.skyjade_nerf) {
    setDurabilities([
      "deep_aether:skyjade_sword",
      "deep_aether:skyjade_shovel",
      "deep_aether:skyjade_pickaxe",
      "deep_aether:skyjade_axe",
      "deep_aether:skyjade_hoe",
    ], 50)
  }

  if (global.config.valkyrum_revamp) {
    for (let i of [
      ["boots",      407],
      ["leggings",   592],
      ["chestplate", 555],
      ["helmet",     481]
    ]) {
      event.modify(`ancient_aether:valkyrum_${i[0]}`, item => {
        item.armorToughness = 3.0
        item.armorKnockbackResistance = 0.1
        item.maxDamage = i[1] * 1.2
      })
    }
    event.modify(`ancient_aether:valkyrum_gloves`, item => {
      item.maxDamage = 2031 * 1.2
    })
  }
})
