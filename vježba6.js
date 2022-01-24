var auto = {
    brand: 'Maserati',
    model: 'Granturismo',
    year: 2020,
    acceleration: 4.7,
    currentspeed: 100,
    topspeed: function (kmph) {
        return kmph / 1.609344;
    }, 
    ubrzaj: function (speed) {
        return this.currentspeed + speed;
    }, 
    uspori: function (speed) {
        return this.currentspeed - speed;
    },
    vlasnik: {firstName: 'Stefani', lastName: 'Stuparić'}
};

console.log(topspeed, ubrzaj, uspori);

