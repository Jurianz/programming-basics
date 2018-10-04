//Schrijf de volgende array om in JSON. De array beschrijft rondetijden van een hardloper. Wat zijn de namen (keys) van de properties?
//const lapRounds = [55.99, 63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]; 
const lapRounds = [
    {
        eersteRonde: 55.99,
        tweedeRonde: 63.00,
        derdeRonde: 63.01,
        vierdeRonde: 54.01,
        vijfdeRonde: 62.79,
        sesdeRonde: 52.88,
        zevendeRonde: 53.10,
        achsteRonde: 54.12
    }
]
console.log(lapRounds);
//Gebruik een for-loop of foreach-loop en print voor elk object de regel
const teachers = [
    {
        name: 'Loek',
        profession: 'Teacher',
        brand: 'Linux'
    },
    {
        name: 'Daan',
        profession: 'Teacher',
        brand: 'Arduino'
    },
    {
        name: 'Rimmert',
        profession: 'Teacher',
        brand: 'Apple'
    }
]
teachers.forEach(function(teachers) {
    console.log('I have a '+teachers.profession+" named "+teachers.name+" and he likes to work on "+teachers.brand+" computer");
});
