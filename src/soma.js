function somar(x, y) {
  return x + y
}

const somarArrow = (x, y) => x + y

const multiplo = (n, mult = 2) => {
  return n * mult
};


const obj = {
  name: "Daniel",
  get: function() {
    return this.name
  }
}

module.exports = somar
