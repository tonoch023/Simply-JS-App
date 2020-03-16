var pokedexRepository = (function () {
  var repository = [{
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
 }];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };
})();



  // function printedArraysDetails(pokemonList){
  //   for(i=0;i<pokemonList.length  ;i++){
  //     if(pokedexRepository[i].height > 1){
  //       document.write(pokemonList[i].name,',',' Wow thats a big one ', '<br>');
  //     } else if (pokedexRepository[i].height < 1) {
  //       document.write(pokemonList[i].name, ' ', '<br>');
  //     }
  //   }
  // }

  pokedexRepository.getAll.forEach(function(currentName){
    if (currentName.height > 1){
      document.write(currentName.name, ' Wow, thats a big one!', '<br>');
    }else if(currentName.height< 1){
      document.write(currentName.name, '<br>');
    }});
