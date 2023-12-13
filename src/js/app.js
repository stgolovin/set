class Team {
    constructor() {
        this.members = new Set();
    }
    add(member) {
        if(this.members.has(member)) {
            throw Error('The team has this character already.')
        } else {this.members.add(member);}
        
    }
    addAll(...member){
        member.forEach(member => this.members.add(member))
    }
    toArray() {
        return [...this.members];
    }
}

module.exports = { Team }
