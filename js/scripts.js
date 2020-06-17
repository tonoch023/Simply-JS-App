
  let pokedexRepository = [
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


    let pokedexRepository2 = [
      {
        name: 'Charizard',
        height: 2.5,
        type: ['Fire','Flying']
     },
     {
       name: 'Pikachu',
       height: .5,
       type: ['Electric']
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
    let $ul = document.querySelector('.pokemonList');    //This function is inside the forEach as marked but i can make the pokemons to show up

    function addListItem (pokemon) {
      let $li = document.createElement('li');
      let $btn = document.createElement('button');
      $btn.classList.add('btn');
      $btn.innerText = `${currentName.name}`;
      $li.append($btn);
      $ul.append($li);
      $btn.addEventListener('click', showDetails(pokemon){
        console.log(pokemon);
      })
    }
     
    function showDetails (pokemon){                               //This function details the pokemon features
      console.log(pokemon)
    }
   addListItem(pokemon);
   pokedexRepository.map(addListItem);
   pokedexRepository.forEach(addListItem(currentName));
    }});

    let $ul = document.querySelector('.pokemonList');

    function addListItem (pokemon) {                                    // Here i put the function block ouside to see if it works but nothing
      let $li = document.createElement('li');
      let $btn = document.createElement('button');
      $btn.classList.add('btn');
      $btn.innerText = `${currentName.name}`;
      $li.append($btn);
      $ul.append($li);
      $btn.addEventListener('click', showDetails(pokemon){
        console.log(pokemon);
      })
    }
    function showDetails (pokemon){
      console.log(pokemon)
    }

    addListItem(pokedexRepository);

  



