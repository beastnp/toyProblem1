function Hero(name, lifePoints, preferredWeapon, eat, trollGrunt, trollBite, trollWeaponAttack) {
    this.name = name,
    this.lifePoints = lifePoints,
    this.preferredWeapon = preferredWeapon,
    this.eat = function (foodAmt) {
        this.lifePoints += foodAmt;
        console.log(this.name + ' life remaining: ' + this.lifePoints);
    },
    this.trollGrunt = function() {
        this.lifePoints -= 1;
        console.log(this.name + ' life remaining: ' + this.lifePoints);
    },
    this.trollBite = function() {
        this.lifePoints -= 2;
        console.log(this.name + ' life remaining: ' + this.lifePoints);
    },
    this.trollWeaponAttack = function() {
        this.lifePoints -= 3;
        console.log(this.name + ' life remaining: ' + this.lifePoints);
    };
}

function Troll(battleName, lifePoints, preferredWeapon, heroPunch, heroWeaponAttack) {
    this.battleName = battleName,
    this.lifePoints = lifePoints,
    this.preferredWeapon = preferredWeapon,
    this.eatHero = function(heroPower) {
        this.lifePoints += heroPower;
        console.log(this.name + ' life remaining: ' + this.lifePoints);
    },
    this.heroPunch = function() {
        this.lifePoints -= 2;
        console.log(this.name + ' life remaining: ' + this.lifePoints);
    },
    this.heroWeaponAttack = function() {
        this.lifePoints -= 3;
        console.log(this.name + ' life remaining: ' + this.lifePoints);
    };
}

var wonderBoyHero = new Hero('Wonder Boy', 10, 'nunchucks');

var younNastyManHero = new Hero('Young Nasty Man', 10, 'mind bullets');

var trogTroll = new Troll('Trog the Terrible', 10, 'big dumb club');

var hooptieTroll = new Troll('Hooptie the Stupid', 10, 'kitana');