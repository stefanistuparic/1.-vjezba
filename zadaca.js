/*
1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
2. Dodajte svoje ime na kraj niza.
3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete “Jane” izađite iz petlje.
4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.*/

var names = ['John', 'Jane', 'Bob',, 'Mike'];
names.forEach(element => console.log(element));
names.push('Stefani');
console.log(names);
for (var i = 0; i < names.length; i++) {
    console.log(i);
    if (names[i] === 'Jane') break;
    }
var filtered = names.filter(x => x !== undefined);
console.log(filtered);