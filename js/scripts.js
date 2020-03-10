var pokedexRepository = [
  {
    name: 'Bulbasaur',
    height: .7,
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

<<<<<<< HEAD

for(i=0;i<4;i++){
  if(pokedexRepository[i].height > 1){
    document.write(pokedexRepository[i].name,',',' Wow thats a big one ', '<br>');
  } else if (pokedexRepository[i].height < 1) {
    document.write(pokedexRepository[i].name, ' ', '<br>')
  }
=======
for (i = 0; i < 4; i++) {
 document.write(pokedexRepository[i].lenght)
}
if (pokedexRepository.height < 1){
  document.write('wow thats a big one')
>>>>>>> e294ad6dd92839a947c1aa45b50449f61fa1a390
}
