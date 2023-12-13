const { Team } = require('../app');
const { bowman, swordsman } = require('../character');

test('testing function add with succsess result', () => {
    const team = new Team;
    team.add(bowman);
    team.add(swordsman);
    expect(team.members.size).toBe(2);
})

test('testing function add with failed result', () => {
    const team = new Team;
    try {
        team.add(bowman);
        team.add(bowman);
        team.add(swordsman);
        expect(true).toBe(false);
    } catch(error) {
        expect(error.message).toBe('The team has this character already.');
    }
})

test('testing function addAll', () => {
    const team = new Team;
    team.addAll(bowman, swordsman, bowman, swordsman, swordsman, swordsman);
    expect(team.members.size).toBe(2);
})

test('teseting function toArray', () => {
    const team = new Team;
    team.add(bowman);
    team.add(swordsman);
    const result = team.toArray();
    // expect(result.length).toBe(2);
    expect(Array.isArray(result)).toBeTruthy()
})
