const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion());

// dont need to include.js after player. node will assume file is js unless otherwise stated
// const { expect, jest } = require('@jest/globals');
const Player = require('../lib/Player');
const { expect } = require('@jest/globals');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
})