console.log('hello there! ~Obi-Wan Kenobi')

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

const heroes = [
    {
        name: 'Stella Sloan',
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

const bigBads = [
    {
        name: 'Opulent Soldier',
        health: 30,
        maxHealth: 30,
        damage: 5,
        level: 1
    },
    {
        name: 'Lyra 💖',
        health: 69,
        maxHealth: 69,
        damage: 10,
        level: 1
    },
    {
        name: 'Mother',
        health: 100,
        maxHealth: 100,
        damage: 15,
        level: 1
    },
    {
        name: 'Lord Regis',
        health: 200,
        maxHealth: 200,
        damage: 25,
        level: 1
    },
]