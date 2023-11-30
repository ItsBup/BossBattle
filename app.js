console.log('hello there! ~Obi-Wan Kenobi')

const heroes = [
    {
        name: 'Stella Stallone',
        type: 'barbarian',
        damage: 15,
        health: 69,
        level: 1
    },
    {
        name: 'Sugar',
        type: 'rogue',
        damage: 20,
        health: 40,
        level: 1
    },
    {
        name: 'Billy the Kid',
        type: 'fighter',
        damage: 10,
        health: 80,
        level: 1
    },
    {
        name: 'Indigo',
        type: 'monk',
        damage: 25,
        health: 30,
        level: 1
    }
]

const bigBads = {
    name: 'Lyra 💖',
    health: 69,
    maxHealth: 69,
    damage: 10,
    level: 1
}

// const bigBads = [
//     {
//         name: 'Opulent Soldier',
//         health: 30,
//         maxHealth: 30,
//         damage: 5,
//         level: 1
//     },
//     {
//         name: 'Lyra 💖',
//         health: 69,
//         maxHealth: 69,
//         damage: 10,
//         level: 1
//     },
//     {
//         name: 'Mother',
//         health: 100,
//         maxHealth: 100,
//         damage: 15,
//         level: 1
//     },
//     {
//         name: 'Lord Regis',
//         health: 200,
//         maxHealth: 200,
//         damage: 25,
//         level: 1
//     },
// ]

/**NOTE - Functions Needed
 * Attack Boss "attackBoss"
 *  
 * Get attacked "bossAttacks"
 *  -currently selected boss attacks on a 5 second interval
 * Update Stats -> boss and heroes "updateParty"&"updateBoss"
 *  -constant draw man
 *  -keep hero/boss/money stats updated
 * Boss Defeat/Level Up "bossDeath"&"heroDeath"&"partyWipe"/"bossLvlUp"&"partyLvlUp"
 *  -when boss hp = 0 lvl it up, lvl up party then rotate to next boss in array
 *  -when anyone lvl up, boost stats. max lvl is 20.
 *  -hero death tracks individual hero, prevents dead heroes from fighting
 *  -party wipe checks if all heroes are dead. if true, game over
 * Reward "getPaid"
 *  -on boss death, earn cash money. cash money relative to boss lvl
 * Healing "healHero"
 *  -use money to purchase healing for heroes.
*/
function updateParty() {
    heroes.forEach(hero => {
        let heroEl = document.getElementByID(hero.name)
        console.log('⚔️', heroEl)
        // @type {HTMLDivElement}
        let statsElm = heroElm.querySelector('.stats')
        console.log('❤️', statsElm)
        statsElm.innerText = `${hero.name}|${hero.type}|${hero.damage}|${hero.health}|${hero.level}`
    });
}

function updateBoss() {
    bigBads.forEach(boss => {
        let bossEl = document.getElementByID(boss.name)
        console.log('💀', bossEl)
        // @type {HTMLDivElement}
        let statsElm = bossElm.querySelector('.stats')
        console.log('🖤', statsElm)
        statsElm.innerText = `${boss.name}|${boss.maxHealth}|${boss.damage}|${boss.health}|${boss.level}`
    });
}