global.Potion = (id, amount) => {
  return {
    fluid: "create:potion",
    nbt: {
      Bottle: "REGULAR",
      Potion: id
    },
    amount: amount
  }
}
