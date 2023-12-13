class Character {
    constructor(name, type) {
        this.name = name,
        this.type = type
    }
}

const bowman = new Character('legolas', 'bowman')
const swordsman = new Character('aragorn', 'swordsman')

module.exports = { bowman, swordsman }
