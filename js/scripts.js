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

  // function printedArraysDetails(pokemonList){
  //   for(i=0;i<pokemonList.length  ;i++){
  //     if(pokedexRepository[i].height > 1){
  //       document.write(pokemonList[i].name,',',' Wow thats a big one ', '<br>');
  //     } else if (pokedexRepository[i].height < 1) {
  //       document.write(pokemonList[i].name, ' ', '<br>');
  //     }
  //   }
  // }

  pokedexRepository.forEach(function(currentName){
    if (currentName.height > 1){
      document.write(currentName.name, ' Wow, thats a big one!', '<br>');
    }else if(currentName.height< 1){
      document.write(currentName.name, '<br>');
    }});



  var names = ['John', 'Anne', 'Carly'];

  function loopBlockFunction(currentName){
    console.log(currentName);
  }
  names.forEach(loopBlockFunction);

  var anne = {
  name: 'Anne',
  age: 38,
  children: []
};

Object.keys(anne).forEach(function(property) {
  console.log(anne[property]);
});

  printedArraysDetails(pokedexRepository2);                                                                  document.write('<br>');  //line break
  printedArraysDetails(pokedexRepository);


function div(dividend, divisor){
  if ( divisor === 0){
    return "Youre trying to divided by zero"
  }else{
    var result= dividend / divisor;
    return result
  }
}

console.log(div(10,0));
console.log(div(10,5));
