var pokedexRepository = [
  {
    name: 'Bulbasaur',
    height: 7,
    type: ['Grass','Poison']
 },
 {
   name: 'Arbok',
   height: 3.5,
   type: ['Poison']
 },
 {
   name: 'Nidoking',
   height: 1.4,
   type: ['Ground','Poison']
 },
 {
   name: 'Scyther',
   height: 1.5,
   type: ['Bug','Flying']
 }
];

for (i = 0; i < 4; i++) {
 document.write(pokedexRepository[i].lenght)
}
if (pokedexRepository.height < 1){
  document.write('wow thats a big one')
}
